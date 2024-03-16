import '@/App.css';
import { getExercises } from '@/lib/firebase';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [exercises, setExercises] = useState([] as DocumentData[]);

  useEffect(() => {
    (async () => {
      const exercisesFetched = await getExercises();
      setExercises(exercisesFetched);
    })();
  }, []);

  return (
    <>
      <h1>Jugger Trainer</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.eid}>{exercise.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
