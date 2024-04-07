import { getExerciseById, getTags, searchExercises } from '@/lib/firebase';
import { FirebaseId } from '@/lib/types';
import { LoaderFunctionArgs } from 'react-router-dom';

export async function loaderExerciseSearch() {
  const [exercises, tags] = await Promise.all([
    searchExercises({
      tagIDs: [],
    }),
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
