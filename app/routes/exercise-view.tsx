import ExerciseDetails from '@/components/ExerciseDetails';
import ExerciseForm from '@/components/ExerciseForm';
import { pageTitle } from '@/lib/copy';
import { getExerciseById, getTags, updateExercise } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import { ExerciseEditFormSchema } from '@/lib/validation';
import { Edit } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { data, redirect } from 'react-router';
import type { Route } from './+types/exercise-view';

export function meta({ loaderData }: Route.MetaArgs) {
  const { exercise } = loaderData;
  return [{ title: pageTitle(exercise.name) }];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const { eid } = params;

  const exercise = await getExerciseById(eid);
  if (exercise === null) {
    throw data({ error: `Exercise ${eid} not found` }, { status: 404 });
  }

  const tags = await getTags();

  return { exercise, tags };
}

export async function clientAction({ request, params }: Route.ClientActionArgs) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user === null) {
    throw redirect('/login');
  }

  const { eid } = params;

  const exercise = await getExerciseById(eid);

  if (exercise === null) {
    throw data({ error: `Exercise ${eid} not found` }, { status: 404 });
  }

  const formData = await request.formData();

  const validatedForm = ExerciseEditFormSchema.safeParse(formData);
  if (!validatedForm.success) {
    return validatedForm.error.flatten();
  }

  const { _method } = validatedForm.data;
  if (_method !== 'put') {
    throw data({ error: `Invalid method ${_method}` }, { status: 405 });
  }

  const updatedExercise = await updateExercise(exercise, validatedForm.data);

  return updatedExercise;
}

export default function ExerciseView({ loaderData, actionData }: Route.ComponentProps) {
  const { user } = useUserStore();
  const { exercise, tags } = loaderData;

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
