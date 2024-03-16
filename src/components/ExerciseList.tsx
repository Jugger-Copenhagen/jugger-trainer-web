import ExerciseListCard from '@/components/ExerciseListCard';
import { Exercise } from '@/lib/firebase';
import { Grid } from '@mui/material';

type ExerciseListProps = {
  exercises: Exercise[];
};

export default function ExerciseList(props: ExerciseListProps) {
  const { exercises } = props;

  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {exercises.map((exercise) => (
        <Grid item sm={12} md={6} lg={4} key={exercise.eid}>
          <ExerciseListCard exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );
}
