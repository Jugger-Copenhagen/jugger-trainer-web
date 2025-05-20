import { COUNTRIES, EXERTION_LEVELS } from '@/lib/types';
import { ActionFunctionArgs, json } from 'react-router-dom';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const ExerciseNewFormSchema = zfd.formData({
  exertionLevel: zfd.text(z.enum(EXERTION_LEVELS)),
  howToPlay: zfd.text(z.string()),
  name: zfd.text(z.string()),
  originCountry: zfd.text(z.enum(COUNTRIES).optional()),
  players: zfd.text(z.string()),
  tags: zfd.repeatableOfType(zfd.text()),
});

export type ExerciseNewFormErrors = z.inferFlattenedErrors<typeof ExerciseNewFormSchema>;

export async function actionExerciseNew({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const validatedForm = ExerciseNewFormSchema.safeParse(formData);
  if (!validatedForm.success) {
    return json(validatedForm.error.flatten());
  }

  /*
  const {
    exertionLevel,
    howToPlay,
    name,
    originCountry,
    players,
    tags,
  } = validatedForm.data;
  */

  // TODO: actually build up exercise object, validate tags, etc.

  return null;
}
