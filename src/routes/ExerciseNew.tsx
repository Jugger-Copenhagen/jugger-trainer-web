import ExerciseForm from '@/components/ExerciseForm';
import { makeExerciseCreate } from '@/lib/exercise';
import { loaderExerciseNew } from '@/routes/loaders';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function ExerciseNew() {
  const navigate = useNavigate();
  const { images, tags } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseNew>>;

  const exercise = makeExerciseCreate(images);

  const onCancel = () => {
    navigate('/');
  };

  return <ExerciseForm exercise={exercise} tags={tags} onCancel={onCancel} />;
}
