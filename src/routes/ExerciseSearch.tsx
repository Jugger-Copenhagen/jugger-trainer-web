import { loaderExerciseSearch } from '@/routes/loaders';
import { Link, useLoaderData } from 'react-router-dom';

export default function ExerciseSearch() {
  const exercises = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseSearch>>;

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
