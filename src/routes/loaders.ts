import { getAllImages, getExerciseById, getTags, searchExercises } from '@/lib/firebase';
import { ExerciseSearchParamsSchema, FirebaseId } from '@/lib/types';
import { LoaderFunctionArgs, json } from 'react-router-dom';

export async function loaderExerciseSearch({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);

  const resultParams = ExerciseSearchParamsSchema.safeParse({
    name: searchParams.get('name') ?? undefined,
    tagIDs: searchParams.getAll('tagIDs'),
    exertionLevel: searchParams.get('exertionLevel') ?? undefined,
    players: searchParams.get('players') ?? undefined,
  });

  if (!resultParams.success) {
    throw json(resultParams.error.flatten(), {
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
    throw new Error(`Exercise ${eid} not found`);
  }

  return exercise;
}

export async function loaderExerciseNew() {
  const images = await getAllImages();
  const tags = await getTags();

  return { images, tags };
}
