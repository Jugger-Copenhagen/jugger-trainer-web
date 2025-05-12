import ExerciseList from '@/components/ExerciseList';
import ExerciseSearchForm from '@/components/ExerciseSearchForm';
import { ExerciseSearchParams, ExerciseSearchParamsSchema } from '@/lib/types';
import { loaderExerciseSearch } from '@/routes/loaders';
import { Box, Divider, Typography } from '@mui/material';
import { useLoaderData, useSearchParams } from 'react-router-dom';

export default function ExerciseSearch() {
  const { exercises, tags } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseSearch>>;
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
      {/* <Fab
        aria-label="Add exercise"
        color="secondary"
        component={Link}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        to="/exercises/new"
      >
        <Add />
      </Fab> */}
    </Box>
  );
}
