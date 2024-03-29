import { numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise } from '@/lib/firebase';
import { Equalizer, People } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

type ExerciseCardMetadataProps = {
  exercise: Exercise;
};

export default function ExerciseCardMetadata({ exercise }: ExerciseCardMetadataProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Equalizer />
        <Typography component="span">{exercise.exertionLevel}</Typography>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems="center">
        <People />
        <Typography component="span">{numberOfPlayersHumanReadable(exercise)}</Typography>
      </Stack>
    </Stack>
  );
}
