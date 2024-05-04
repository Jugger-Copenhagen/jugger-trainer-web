import { Exercise, ExerciseSearchParams, FirebaseId, Tag } from '@/lib/types';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { child, get, getDatabase, ref as realtimeRef } from 'firebase/database';
import { DocumentData } from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDyVMCRC9Toba_G8dp5aweN9Z7Ap479sRw',
  authDomain: 'jugger-trainer-web.firebaseapp.com',
  databaseURL: 'https://jugger-trainer-web-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'jugger-trainer-web',
  storageBucket: 'jugger-trainer-web.appspot.com',
  messagingSenderId: '987757334310',
  appId: '1:987757334310:web:b45a9e20e317ca03e6fbe7',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage();
const storageRef = ref(storage);

export const auth = getAuth(app);

// === TAGS === //

let tagsPromise: Promise<Tag[]> | null = null;

function validateTag(data: DocumentData): Tag {
  // TODO: actually validate this in some way
  return data as Tag;
}

async function getTagsImpl(): Promise<Tag[]> {
  const querySnapshot = await get(child(realtimeRef(db), 'tags'));
  const queryResult = querySnapshot.val() as Record<FirebaseId, DocumentData>;

  return Object.values(queryResult).map((data) => validateTag(data));
}

export async function getTags(): Promise<Tag[]> {
  if (tagsPromise !== null) {
    return tagsPromise;
  }

  tagsPromise = getTagsImpl();
  return tagsPromise;
}

export async function getTagsByIds(tagIDs: FirebaseId[]): Promise<Tag[]> {
  const tagsAll = await getTags();
  const tagsById = new Map(tagsAll.map((tag) => [tag.tagID, tag]));

  const tags = [];
  for (const tagID of tagIDs) {
    const tag = tagsById.get(tagID);
    if (tag !== undefined) {
      tags.push(tag);
    }
  }

  return tags;
}

// === EXERCISES === //

function validateExercise(data: DocumentData, tags: Tag[], images: string[]): Exercise {
  const exercise = data as Omit<Exercise, 'tags'> & { tagIDs: FirebaseId[] };

  const tagsById = new Map(tags.map((tag) => [tag.tagID, tag]));
  const tagIDs = new Set<FirebaseId>(exercise.tagIDs ?? []);
  const tagsForExercise = [];

  for (const tagID of tagIDs) {
    const tag = tagsById.get(tagID);
    if (tag !== undefined) {
      tagsForExercise.push(tag);
    }
  }

  tagsForExercise.sort((a, b) => a.tag.localeCompare(b.tag));

  const randomImages = [
    images[Math.floor(Math.random() * 11)],
    images[Math.floor(Math.random() * 11)],
  ];

  return {
    ...exercise,
    tags: tagsForExercise,
    images: randomImages,
  };
}

export async function searchExercises(searchParams: ExerciseSearchParams): Promise<Exercise[]> {
  const tags = await getTags();
  const images = await getAllImages();

  const querySnapshot = await get(child(realtimeRef(db), 'exercises'));
  const queryResult = querySnapshot.val() as Record<FirebaseId, DocumentData>;

  /*
   * Now we filter exercises client-side based on the search parameters.
   */
  return Object.values(queryResult)
    .map((data) => validateExercise(data, tags, images))
    .filter((exercise) => {
      if (exercise.name === undefined) {
        /*
         * This shouldn't happen, but: one of the exercises in our existing database appears to
         * be missing nearly all its fields somehow.  Until we remove that from database, we'll
         * need this workaround.
         */
        return false;
      }

      if (searchParams.tagIDs.length > 0) {
        if (!exercise.tags.some((tag: Tag) => searchParams.tagIDs.includes(tag.tagID))) {
          return false;
        }
      }

      if (searchParams.exertionLevel !== undefined) {
        if (exercise.exertionLevel !== searchParams.exertionLevel) {
          return false;
        }
      }

      if (searchParams.name !== undefined) {
        if (!exercise.name.toLowerCase().includes(searchParams.name.toLowerCase())) {
          return false;
        }
      }

      if (searchParams.players !== undefined) {
        if (exercise.playersMin > searchParams.players) {
          return false;
        }

        if (exercise.playersMax < searchParams.players) {
          return false;
        }
      }

      return true;
    })
    .toSorted((a, b) => a.name.localeCompare(b.name));
}

export async function getExerciseById(eid: FirebaseId) {
  const querySnapshot = await get(child(realtimeRef(db), `exercises/${eid}`));
  if (!querySnapshot.exists()) {
    return null;
  }

  const queryResult = querySnapshot.val() as DocumentData;

  const tags = await getTagsByIds(queryResult.tagIDs);
  const images = await getAllImages();

  return validateExercise(queryResult, tags, images);
}

export async function randomExercise(searchParams: ExerciseSearchParams) {
  const exercises = await searchExercises(searchParams);
  if (exercises.length === 0) {
    return null;
  }

  const i = Math.floor(Math.random() * exercises.length);
  return exercises[i];
}

export async function createExercise(/* type? */) {
  // TODO: this
}

export async function editExercise(/* type? */) {
  // TODO: this
}

// === FAVOURITES === //

export async function favoriteExercise(/* eid: FirebaseId */) {
  // TODO: this
}

export async function unfavoriteExercise(/* eid: FirebaseId */) {
  // TODO: this
}

// === IMAGES === //

export async function getAllImages() {
  // someday, this would do something else
  const sampleImageFolderRef = ref(storageRef, 'samples/');
  const allThaShit = await listAll(sampleImageFolderRef);
  const allImagesUrls = await Promise.all(
    allThaShit.items.map((itemRef) => getDownloadURL(itemRef))
  );
  return allImagesUrls;
}
