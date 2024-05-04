import { getExerciseById, getTags, searchExercises } from '@/lib/firebase';
import { ExerciseSearchParamsSchema, FirebaseId } from '@/lib/types';
import { LoaderFunctionArgs, json } from 'react-router-dom';

export async function loaderExerciseSearch({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);

  const searchParamsValidated = ExerciseSearchParamsSchema.safeParse({
    name: searchParams.get('name') ?? undefined,
    tagIDs: searchParams.getAll('tagIDs'),
    exertionLevel: searchParams.get('exertionLevel') ?? undefined,
    playersMin: searchParams.get('playersMin') ?? undefined,
    playersMax: searchParams.get('playersMax') ?? undefined,
  });

  if (!searchParamsValidated.success) {
    throw json(searchParamsValidated.error.flatten(), {
      status: 400,
    });
  }

  const [exercises, tags] = await Promise.all([
    searchExercises(searchParamsValidated.data),
    getTags(),
  ]);

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
