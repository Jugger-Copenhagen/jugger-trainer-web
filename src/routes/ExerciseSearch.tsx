import { searchExercises } from '@/lib/firebase';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExerciseSearch() {
  const [exercises, setExercises] = useState([] as DocumentData[]);

  useEffect(() => {
    (async () => {
      const exercisesFetched = await searchExercises({
        tagIDs: [],
      });
      setExercises(exercisesFetched);
    })();
  }, []);

  return (
    <>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.eid}>
            <Link to={`exercises/${exercise.eid}`}>{exercise.name || '(Unnamed)'}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
