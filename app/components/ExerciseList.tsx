import ExerciseCard from '@/components/ExerciseCard';
import { Exercise } from '@/lib/types';
import { GridLegacy } from '@mui/material';

type ExerciseListProps = {
  exercises: Exercise[];
};

export default function ExerciseList(props: ExerciseListProps) {
  const { exercises } = props;

  return (
    <GridLegacy container spacing={2} sx={{ mt: 0 }}>
      {exercises.map((exercise) => (
        <GridLegacy item sm={12} md={6} lg={4} key={exercise.eid}>
          <ExerciseCard exercise={exercise} />
        </GridLegacy>
      ))}
    </GridLegacy>
  );
}
