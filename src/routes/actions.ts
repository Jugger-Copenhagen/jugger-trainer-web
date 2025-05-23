import { getExerciseById } from '@/lib/firebase';
import { COUNTRIES, EXERTION_LEVELS, FirebaseId } from '@/lib/types';
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

const ExerciseEditFormSchema = zfd.formData({
  _method: zfd.text(z.enum(['put'])),
  exertionLevel: zfd.text(z.enum(EXERTION_LEVELS)),
  howToPlay: zfd.text(z.string()),
  name: zfd.text(z.string()),
  originCountry: zfd.text(z.enum(COUNTRIES).optional()),
  players: zfd.text(z.string()),
  tags: zfd.repeatableOfType(zfd.text()),
});

export type ExerciseEditFormErrors = z.inferFlattenedErrors<typeof ExerciseEditFormSchema>;

export async function actionExerciseEdit({ request, params }: ActionFunctionArgs) {
  const { eid } = params as { eid: FirebaseId };

  const exercise = await getExerciseById(eid);

  if (exercise === null) {
    throw json({ error: `Exercise ${eid} not found` }, { status: 404 });
  }

  const formData = await request.formData();

  const validatedForm = ExerciseEditFormSchema.safeParse(formData);
  if (!validatedForm.success) {
    return json(validatedForm.error.flatten());
  }

  const { _method } = validatedForm.data;
  if (_method !== 'put') {
    throw json({ error: `Invalid method ${_method}` }, { status: 405 });
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
