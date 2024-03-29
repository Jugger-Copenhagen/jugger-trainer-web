import ExerciseCard from '@/components/ExerciseCard';
import { Exercise } from '@/lib/firebase';
import { Grid } from '@mui/material';

type ExerciseListProps = {
  exercises: Exercise[];
};

export default function ExerciseList(props: ExerciseListProps) {
  const { exercises } = props;

  console.log(exercises.map(({ originCountry }) => originCountry));

  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {exercises.map((exercise) => (
        <Grid item sm={12} md={6} lg={4} key={exercise.eid}>
          <ExerciseCard exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );
}
