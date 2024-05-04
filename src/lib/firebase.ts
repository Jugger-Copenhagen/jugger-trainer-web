import { Exercise, ExerciseSearchParams, FirebaseId, Tag } from '@/lib/types';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
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
const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage);

export const auth = getAuth(app);

// === TAGS === //

function validateTag(data: DocumentData): Tag {
  // TODO: actually validate this in some way
  return data as Tag;
}

export async function getTags(): Promise<Tag[]> {
  const querySnapshot = await getDocs(collection(db, 'tags'));
  return querySnapshot.docs.map((doc) => validateTag(doc.data()));
}

export async function getTagsByIds(tagIDs: FirebaseId[]): Promise<Tag[]> {
  const querySnapshot = await getDocs(query(collection(db, 'tags'), where('tagID', 'in', tagIDs)));
  return querySnapshot.docs.map((doc) => validateTag(doc.data()));
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

  /*
   * Now we build up the Firebase query as a series of query constraints.
   *
   * Firebase [does not support full-text search](https://firebase.google.com/docs/firestore/solutions/search?provider=typesense),
   * so we instead apply the `name` filter client-side.
   *
   * It _also_ requires composite indexes for queries with range filters, so we apply the `players`
   * filter client-side as well.
   *
   * All other filters are applied as part of the Firebase query.
   */

  const queryConstraints = [];

  if (searchParams.tagIDs.length > 0) {
    queryConstraints.push(where('tagIDs', 'array-contains-any', searchParams.tagIDs));
  }

  if (searchParams.exertionLevel !== undefined) {
    queryConstraints.push(where('exertionLevel', '==', searchParams.exertionLevel));
  }

  const querySnapshot = await getDocs(query(collection(db, 'exercises'), ...queryConstraints));

  return querySnapshot.docs
    .map((doc) => validateExercise(doc.data(), tags, images))
    .filter((exercise) => {
      if (exercise.name === undefined) {
        /*
         * This shouldn't happen, but: one of the exercises in our existing database appears to
         * be missing nearly all its fields somehow.  Until we remove that from database, we'll
         * need this workaround.
         */
        return false;
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
  const docRef = doc(db, 'exercises', eid);
  const docSnapshot = await getDoc(docRef);
  const data = docSnapshot.data();

  if (data === undefined) {
    return null;
  }

  const tags = await getTagsByIds(data.tagIDs);
  const images = await getAllImages();

  return validateExercise(data, tags, images);
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
