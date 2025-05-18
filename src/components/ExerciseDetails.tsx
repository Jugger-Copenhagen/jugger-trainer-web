import ExerciseTagList from '@/components/ExerciseTagList';
import { countryFlag, exertionLevelHumanReadable, numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise } from '@/lib/types';
import { Box, Grid, Typography } from '@mui/material';
import Markdown from 'react-markdown';

type ExerciseDetailsProps = {
  exercise: Exercise;
};

export default function ExerciseDetails(props: ExerciseDetailsProps) {
  const { exercise } = props;
  const flag = countryFlag(exercise.originCountry);

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            {exercise.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <img
              src={exercise.images[0]}
              alt={'Image of ' + exercise.name}
              style={{ width: '100%' }}
            />
          </Box>

          <Box mt={2}>
            <Typography style={{ fontWeight: 700 }} component="strong">
              Difficulty:
            </Typography>{' '}
            <Typography component="span">
              {exertionLevelHumanReadable(exercise.exertionLevel)}
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography style={{ fontWeight: 700 }} component="strong">
              Number of Players:
            </Typography>{' '}
            <Typography component="span">{numberOfPlayersHumanReadable(exercise)}</Typography>
          </Box>
          <Box mt={1}>
            <Typography style={{ fontWeight: 700 }} component="strong">
              Skills and Equipment:
            </Typography>{' '}
            <ExerciseTagList component="span" exercise={exercise} />
          </Box>
          <Box mt={1}>
            {flag !== null && (
              <>
                <Typography style={{ fontWeight: 700 }} component="strong">
                  Origin Country:
                </Typography>{' '}
                <Typography component="span">{flag}</Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Markdown>{exercise.howToPlay}</Markdown>
        </Grid>
      </Grid>
    </Box>
  );
}
