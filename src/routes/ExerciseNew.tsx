import ExerciseForm from "@/components/ExerciseForm";
import { makeExerciseCreate } from "@/lib/exercise";
import { loaderExerciseNew } from "@/routes/loaders";
import { useLoaderData } from "react-router-dom";

export default function ExerciseNew() {
  const exercise = makeExerciseCreate();

  const { tags } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseNew>>;

  return <ExerciseForm exercise={exercise} tags={tags} />
}
