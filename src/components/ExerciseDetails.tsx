import { Exercise } from '@/lib/firebase';

type ExerciseDetailsProps = {
  exercise: Exercise;
};

export default function ExerciseDetails(props: ExerciseDetailsProps) {
  const { exercise } = props;

  return (
    <>
      <h2>{exercise.name}</h2>
      <pre>
        <code>{JSON.stringify(exercise, null, 2)}</code>
      </pre>
    </>
  );
}
