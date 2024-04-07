import { getExerciseById, searchExercises } from '@/lib/firebase';
import { FirebaseId } from '@/lib/types';
import { LoaderFunctionArgs } from 'react-router-dom';

export async function loaderExerciseSearch() {
  return searchExercises({
    tagIDs: [],
  });
}

export async function loaderExerciseView({ params }: LoaderFunctionArgs) {
  const { eid } = params as { eid: FirebaseId };

  const exercise = await getExerciseById(eid);
  if (exercise === null) {
    throw new Error(`Exercise ${eid} not found`);
  }

  return exercise;
}
