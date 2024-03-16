import { initializeApp } from 'firebase/app';
import { DocumentData, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

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
  tagIDs: FirebaseId[];
};

function validateExercise(data: DocumentData): Exercise {
  // TODO: actually validate this in some way
  return data as Exercise;
}

export async function searchExercises(searchParams: ExerciseSearchParams): Promise<Exercise[]> {
  const querySnapshot = await getDocs(collection(db, 'exercises'));
  return querySnapshot.docs.map((doc) => validateExercise(doc.data()));
}

export async function getExerciseById(eid: string) {
  const docRef = doc(db, 'exercises', eid);
  const docSnapshot = await getDoc(docRef);
  const data = docSnapshot.data();

  if (data === undefined) {
    throw new Error(`No exercise found with ID ${eid}`);
  }

  return validateExercise(data);
}

export async function randomExercise(searchParams: ExerciseSearchParams) {
  // TODO: this
}

export async function starExercise(eid: string) {
  // TODO: this
}

export async function unstarExercise(eid: string) {
  // TODO: this
}

export async function createExercise(/* type? */) {
  // TODO: this
}

export async function editExercise(/* type? */) {
  // TODO: this
}

// === TAGS === //

export async function getTags() {
  const querySnapshot = await getDocs(collection(db, 'tags'));
  return querySnapshot.docs.map((doc) => doc.data());
}
