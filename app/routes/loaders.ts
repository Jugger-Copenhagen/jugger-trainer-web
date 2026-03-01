import { getAllImages, getExerciseById, getTags, searchExercises } from '@/lib/firebase';
import { useToastStore, useUserStore } from '@/lib/store';
import { ExerciseSearchParamsSchema, FirebaseId } from '@/lib/types';
import { data, LoaderFunctionArgs, redirect } from 'react-router';

export async function loaderExerciseSearch({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);

  const resultParams = ExerciseSearchParamsSchema.safeParse({
    name: searchParams.get('name') ?? undefined,
    tagIDs: searchParams.getAll('tagIDs'),
    exertionLevel: searchParams.get('exertionLevel') ?? undefined,
    players: searchParams.get('players') ?? undefined,
  });

  if (!resultParams.success) {
    throw data(resultParams.error.flatten(), {
      status: 400,
    });
  }

  const [exercises, tags] = await Promise.all([searchExercises(resultParams.data), getTags()]);

  return { exercises, tags };
}

export async function loaderExerciseView({ params }: LoaderFunctionArgs) {
  const { eid } = params as { eid: FirebaseId };

  const exercise = await getExerciseById(eid);
  if (exercise === null) {
    throw data({ error: `Exercise ${eid} not found` }, { status: 404 });
  }

  const tags = await getTags();

  return { exercise, tags };
}

export async function loaderExerciseNew() {
  const images = await getAllImages();
  const tags = await getTags();

  return { images, tags };
}

export function loaderAdmin() {
  const { profile } = useUserStore.getState();

  if (profile?.role !== 'admin') {
    useToastStore.getState().setToast('You are not authorized to access that page.', 'error');
    throw redirect('/');
  }

  return null;
}
