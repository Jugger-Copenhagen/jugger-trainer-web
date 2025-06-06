import ExerciseDetails from '@/components/ExerciseDetails';
import ExerciseForm from '@/components/ExerciseForm';
import { useUserStore } from '@/lib/store';
import { Exercise } from '@/lib/types';
import { loaderExerciseView } from '@/routes/loaders';
import { Edit } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

export default function ExerciseView() {
  const { user } = useUserStore();
  const { exercise, tags } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseView>>;
  const actionData = useActionData() as Exercise | undefined;

  const [editMode, setEditMode] = useState(false);

  const onCancel = () => {
    setEditMode(false);
  };

  useEffect(() => {
    if (actionData) {
      setEditMode(false);
    }
  }, [actionData]);

  return (
    <Box>
      {editMode ? (
        <ExerciseForm exercise={exercise} tags={tags} onCancel={onCancel} />
      ) : (
        <ExerciseDetails exercise={exercise} />
      )}
      {user && !editMode && (
        <Fab
          aria-label={`Edit exercise: ${exercise.name}`}
          color="secondary"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => setEditMode(true)}
        >
          <Edit />
        </Fab>
      )}
    </Box>
  );
}
