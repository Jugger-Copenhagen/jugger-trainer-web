import ExerciseList from '@/components/ExerciseList';
import { loaderExerciseSearch } from '@/routes/loaders';
import { useLoaderData } from 'react-router-dom';

export default function ExerciseSearch() {
  const exercises = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseSearch>>;

  return <ExerciseList exercises={exercises} />;
}
