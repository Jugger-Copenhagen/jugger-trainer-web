import { countryFlag, exertionLevelHumanReadable, numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise } from '@/lib/firebase';
import { Equalizer, Language, People } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

type ExerciseCardMetadataProps = {
  exercise: Exercise;
};

export default function ExerciseCardMetadata({ exercise }: ExerciseCardMetadataProps) {
  const flag = countryFlag(exercise);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Equalizer />
        <Typography component="span">{exertionLevelHumanReadable(exercise)}</Typography>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems="center">
        <People />
        <Typography component="span">{numberOfPlayersHumanReadable(exercise)}</Typography>
      </Stack>
      {flag !== null && (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Language />
          <Typography variant="h6" component="span">
            {flag}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
