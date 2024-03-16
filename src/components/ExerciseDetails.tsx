import { Exercise } from '@/lib/firebase';
import { Link } from 'react-router-dom';

type ExerciseDetailsProps = {
  exercise: Exercise;
};

export default function ExerciseDetails(props: ExerciseDetailsProps) {
  const { exercise } = props;

  return (
    <>
      <h2>{exercise.name}</h2>
      <Link to="/">Back to list</Link>
      <pre>
        <code>{JSON.stringify(exercise, null, 2)}</code>
      </pre>
    </>
  );
}
