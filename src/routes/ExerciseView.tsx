import ExerciseDetails from '@/components/ExerciseDetails';
import { loaderExerciseView } from '@/routes/loaders';
import { useLoaderData } from 'react-router-dom';

export default function ExerciseView() {
  const exercise = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseView>>;

  return <ExerciseDetails exercise={exercise} />;
}
