import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

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

export async function getExercises() {
  const querySnapshot = await getDocs(collection(db, 'exercises'));
  return querySnapshot.docs.map((doc) => doc.data());
}
