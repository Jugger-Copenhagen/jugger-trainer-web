import { Exercise } from '@/lib/firebase';
import { Link } from 'react-router-dom';

type ExerciseListProps = {
  exercises: Exercise[];
};

export default function ExerciseList(props: ExerciseListProps) {
  const { exercises } = props;

  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.eid}>
          <Link to={`exercises/${exercise.eid}`}>{exercise.name || '(Unnamed)'}</Link>
        </li>
      ))}
    </ul>
  );
}
