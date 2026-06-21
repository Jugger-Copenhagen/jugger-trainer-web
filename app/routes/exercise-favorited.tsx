import ExerciseList from '@/components/ExerciseList';
import { getFavoriteExercises, getTags } from '@/lib/firebase';
import { useToastStore, useUserStore } from '@/lib/store';
import { Box, Divider, Typography } from '@mui/material';
import { redirect } from 'react-router';
import type { Route } from './+types/exercise-favorited';

export async function clientLoader() {
  const { user } = useUserStore.getState();
  const { setToast } = useToastStore.getState();

  if (user === null) {
    setToast('You must be signed in to view your favorites.', 'error');
    throw redirect('/login');
  }

  const [exercises, tags] = await Promise.all([getFavoriteExercises(user.uid), getTags()]);

  return { exercises, tags };
}

export default function ExerciseFavorited({ loaderData }: Route.ComponentProps) {
  const { exercises } = loaderData;

  return (
    <Box>
      <Typography component="h2" marginTop={2} variant="h4">
        Favorite Exercises
      </Typography>
      <Divider sx={{ mt: 1 }} />
      {exercises.length === 0 ? (
        <Typography marginTop={2} variant="body1">
          You haven&apos;t favorited any exercises yet. Tap the heart on an exercise to save it
          here.
        </Typography>
      ) : (
        <>
          <Typography component="h3" marginTop={2} variant="h5">
            {exercises.length} exercises
          </Typography>
          <ExerciseList exercises={exercises} />
        </>
      )}
    </Box>
  );
}
