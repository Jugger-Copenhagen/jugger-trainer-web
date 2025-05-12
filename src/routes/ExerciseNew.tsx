import ExerciseForm from "@/components/ExerciseForm";
import { makeExerciseCreate } from "@/lib/exercise";
import { loaderExerciseNew } from "@/routes/loaders";
import { useLoaderData } from "react-router-dom";

export default function ExerciseNew() {
  const { images, tags } = useLoaderData() as Awaited<ReturnType<typeof loaderExerciseNew>>;

  const exercise = makeExerciseCreate(images);

  return <ExerciseForm exercise={exercise} tags={tags} />
}
