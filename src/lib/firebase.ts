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

export type FirebaseId = string;

export type ExertionLevel = 'EASY' | 'MEDIUM' | 'HARD';

export type ExerciseSearchParams = {
  name?: string;
  tagIDs: string[];
  exertionLevel?: ExertionLevel;
  playersMin?: number;
  playersMax?: number;
};

export type Exercise = {
  created: number;
  createdByUID: FirebaseId;
  eid: FirebaseId;
  exertionLevel: ExertionLevel;
  howToPlay: string;
  name: string;
  originCountry?: string;
  playersMin: number;
  playersMax: number;
  tags: Tag[];
  images: string[];
};

function validateExercise(data: DocumentData, tags: Tag[], images: string[]): Exercise {
  const exercise = data as Omit<Exercise, 'tags'> & { tagIDs: FirebaseId[] };

  const tagsById = new Map(tags.map((tag) => [tag.tagID, tag]));
  const { tagIDs = [] } = exercise;
  const tagsForExercise: Tag[] = [];
  for (const tagID of tagIDs) {
    const tag = tagsById.get(tagID);
    if (tag !== undefined) {
      tagsForExercise.push(tag);
    }
  }

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
   * All other filters are applied as part of the Firebase query.
   */

  const queryConstraints = [];

  if (searchParams.tagIDs.length > 0) {
    queryConstraints.push(where('tagIDs', 'array-contains-any', searchParams.tagIDs));
  }

  if (searchParams.exertionLevel !== undefined) {
    queryConstraints.push(where('exertionLevel', '==', searchParams.exertionLevel));
  }

  if (searchParams.playersMin !== undefined) {
    queryConstraints.push(where('playersMin', '>=', searchParams.playersMin));
  }

  if (searchParams.playersMax !== undefined) {
    queryConstraints.push(where('playersMax', '<=', searchParams.playersMax));
  }

  const querySnapshot = await getDocs(query(collection(db, 'exercises'), ...queryConstraints));

  return querySnapshot.docs
    .map((doc) => validateExercise(doc.data(), tags, images))
    .filter((exercise) => {
      if (searchParams.name !== undefined) {
        return exercise.name.toLowerCase().includes(searchParams.name.toLowerCase());
      }

      return true;
    });
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

export function getImageForExercise(eid: FirebaseId) {}
