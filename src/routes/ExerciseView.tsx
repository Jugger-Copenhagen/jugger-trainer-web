import ExerciseDetails from '@/components/ExerciseDetails';
import { useUserStore } from '@/lib/store';
import { loaderExerciseView } from '@/routes/loaders';
import { Edit } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { Link, useLoaderData } from 'react-router-dom';

export default function ExerciseView() {
  const { user } = useUserStore();
  const exercise = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseView>>;

  return (
    <Box>
      <ExerciseDetails exercise={exercise} />
      {user && (
        <Fab
          aria-label={`Edit exercise: ${exercise.name}`}
          color="secondary"
          component={Link}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          to={`/exercises/edit/${exercise.eid}`}
        >
          <Edit />
        </Fab>
      )}
    </Box>
  );
}
