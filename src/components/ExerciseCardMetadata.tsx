import { countryFlag, exertionLevelHumanReadable, numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise } from '@/lib/types';
import { DirectionsRun, Language, People } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

type ExerciseCardMetadataProps = {
  exercise: Exercise;
};

export default function ExerciseCardMetadata({ exercise }: ExerciseCardMetadataProps) {
  const flag = countryFlag(exercise.originCountry);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack direction="row" spacing={0.5} alignItems="center">
        <DirectionsRun />
        <Typography component="span">
          {exertionLevelHumanReadable(exercise.exertionLevel)}
        </Typography>
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
