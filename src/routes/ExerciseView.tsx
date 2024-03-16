import { loaderExerciseView } from '@/routes/loaders';
import { Link, useLoaderData } from 'react-router-dom';

export default function ExerciseDetails() {
  const exercise = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseView>>;

  return (
    <>
      <h2>{exercise.name}</h2>
      <Link to="/">Back to list</Link>
      <pre>
        <code>{JSON.stringify(exercise, null, 2)}</code>
      </pre>
    </>
  );
}
