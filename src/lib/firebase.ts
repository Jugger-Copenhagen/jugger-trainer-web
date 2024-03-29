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

export const auth = getAuth(app);

// === TAGS === //

export type Tag = {
  associatedExerciseIds: FirebaseId[];
  tag: string;
  tagID: FirebaseId;
};

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
  originCountry: string;
  playersMin: number;
  playersMax: number;
  tags: Tag[];
};

function validateExercise(data: DocumentData, tags: Tag[]): Exercise {
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

  return {
    ...exercise,
    tags: tagsForExercise,
  };
}

export async function searchExercises(searchParams: ExerciseSearchParams): Promise<Exercise[]> {
  const tags = await getTags();

  const querySnapshot = await getDocs(collection(db, 'exercises'));
  return querySnapshot.docs.map((doc) => validateExercise(doc.data(), tags));
}

export async function getExerciseById(eid: FirebaseId) {
  const docRef = doc(db, 'exercises', eid);
  const docSnapshot = await getDoc(docRef);
  const data = docSnapshot.data();

  if (data === undefined) {
    return null;
  }

  const tags = await getTagsByIds(data.tagIDs);

  return validateExercise(data, tags);
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

export async function favoriteExercise(eid: FirebaseId) {
  // TODO: this
}

export async function unfavoriteExercise(eid: FirebaseId) {
  // TODO: this
}
