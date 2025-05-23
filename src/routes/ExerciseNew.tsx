import ExerciseForm from '@/components/ExerciseForm';
import { makeExerciseCreate } from '@/lib/exercise';
import { loaderExerciseNew } from '@/routes/loaders';
import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function ExerciseNew() {
  const { images } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseNew>>;

  const [open, setOpen] = useState(true);

  const exercise = makeExerciseCreate(images);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    border: '10px dashed #f00',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ExerciseForm exercise={exercise} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            🚧 Juggers are friends, not food 🚧
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              Hey! We're currently building edit features into the web version of Jugger Trainer.
              Pardon our dust while the work continues.
            </p>
            <p>
              Click / tap outside this box to see our current progress.{' '}
              <strong>
                Note that while this work is in progress, you will not be able to save new exercises
                here.
              </strong>
            </p>
            <p style={{ textAlign: 'center' }}>🚧 🚧 🚧 🚧 🚧 🚧 🚧</p>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
