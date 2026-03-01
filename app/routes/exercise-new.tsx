import ExerciseForm from '@/components/ExerciseForm';
import { makeExerciseCreate } from '@/lib/exercise';
import { createExercise, getAllImages, getTags } from '@/lib/firebase';
import { ExerciseNewFormSchema } from '@/lib/validation';
import { getAuth } from 'firebase/auth';
import { redirect, useNavigate } from 'react-router';
import type { Route } from './+types/exercise-new';

export async function clientLoader() {
  const images = await getAllImages();
  const tags = await getTags();

  return { images, tags };
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user === null) {
    throw redirect('/login');
  }

  const formData = await request.formData();

  const validatedForm = ExerciseNewFormSchema.safeParse(formData);
  if (!validatedForm.success) {
    throw validatedForm.error.flatten();
  }

  const exercise = await createExercise(user, validatedForm.data);

  return redirect(`/exercises/${exercise.eid}`);
}

export default function ExerciseNew({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const { images, tags } = loaderData;

  const exercise = makeExerciseCreate(images);

  const onCancel = () => {
    navigate('/');
  };

  return <ExerciseForm exercise={exercise} tags={tags} onCancel={onCancel} />;
}
