import { Exercise, ExerciseCreate, Tag } from "@/lib/types";

type ExerciseFormProps = {
  exercise: ExerciseCreate | Exercise;
  tags: Tag[];
}

export default function ExerciseForm({ exercise, tags }: ExerciseFormProps) {
  const isEditing = 'eid' in exercise;

  return <div>TODO: exercise form</div>
}