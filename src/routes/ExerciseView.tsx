import { getExerciseById } from '@/lib/firebase';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExerciseDetails() {
  const [exercise, setExercise] = useState({} as DocumentData);

  useEffect(() => {
    (async () => {
      const exercise = await getExerciseById('1HvoXNfZdn8AdLTAVkw2z');
      setExercise(exercise);
    })();
  }, []);

  return (
    <>
      <h2>Exercise details</h2>
      <Link to="/">Back to list</Link>
      <pre>
        <code>{JSON.stringify(exercise, null, 2)}</code>
      </pre>
    </>
  );
}
