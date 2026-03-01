import ExerciseList from '@/components/ExerciseList';
import ExerciseSearchForm from '@/components/ExerciseSearchForm';
import { getTags, searchExercises } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import { ExerciseSearchParams, ExerciseSearchParamsSchema } from '@/lib/types';
import { Add } from '@mui/icons-material';
import { Box, Divider, Fab, Typography } from '@mui/material';
import { data, Link, useSearchParams } from 'react-router';
import type { Route } from './+types/home';

export async function loader({ request }: Route.LoaderArgs) {
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

export default function ExerciseSearch({ loaderData }: Route.ComponentProps) {
  const { user } = useUserStore();
  const { exercises, tags } = loaderData;
  const [searchParams] = useSearchParams();

  const resultParams = ExerciseSearchParamsSchema.safeParse({
    name: searchParams.get('name') ?? undefined,
    tagIDs: searchParams.getAll('tagIDs'),
    exertionLevel: searchParams.get('exertionLevel') ?? undefined,
    players: searchParams.get('players') ?? undefined,
  });

  let paramsValidated: ExerciseSearchParams;
  if (resultParams.success) {
    paramsValidated = resultParams.data;
  } else {
    paramsValidated = {
      tagIDs: [],
    };

    // TODO: show a toast
  }

  return (
    <Box>
      <Box marginY={2}>
        <ExerciseSearchForm params={paramsValidated} tags={tags} />
      </Box>
      <Divider />
      <Typography component="h2" marginTop={2} variant="h5">
        {exercises.length} exercises
      </Typography>
      <ExerciseList exercises={exercises} />
      {user && (
        <Fab
          aria-label="Add exercise"
          color="secondary"
          component={Link}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          to="/exercises/new"
        >
          <Add />
        </Fab>
      )}
    </Box>
  );
}
