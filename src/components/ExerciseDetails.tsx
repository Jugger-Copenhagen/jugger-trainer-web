import ExerciseTagList from '@/components/ExerciseTagList';
import { exertionLevelHumanReadable, numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise } from '@/lib/firebase';
import { Box, Grid, Typography } from '@mui/material';

type ExerciseDetailsProps = {
  exercise: Exercise;
};

export default function ExerciseDetails(props: ExerciseDetailsProps) {
  const { exercise } = props;

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
              src="https://source.unsplash.com/random/800x600"
              alt={'Image of ' + exercise.name}
              style={{ width: '100%' }}
            />
          </Box>

          <Box mt={2}>
            <Typography style={{ fontWeight: 700 }} component="strong">
              Difficulty:
            </Typography>{' '}
            <Typography component="span">{exertionLevelHumanReadable(exercise)}</Typography>
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
        </Grid>
        <Grid item xs={12} md={8}>
          <pre>
            <code>{JSON.stringify(exercise, null, 2)}</code>
          </pre>
        </Grid>
      </Grid>
    </Box>
  );
}
