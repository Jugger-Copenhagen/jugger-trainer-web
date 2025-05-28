import { createExercise, getExerciseById } from '@/lib/firebase';
import { COUNTRIES, EXERTION_LEVELS, FirebaseId } from '@/lib/types';
import { getAuth } from 'firebase/auth';
import { ActionFunctionArgs, json, redirect } from 'react-router-dom';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const ExerciseNewFormSchema = zfd.formData({
  exertionLevel: zfd.text(z.enum(EXERTION_LEVELS)),
  howToPlay: zfd.text(z.string()),
  name: zfd.text(z.string()),
  originCountry: zfd.text(z.enum(COUNTRIES).optional()),
  playersMin: zfd.text(z.coerce.number().positive().int()),
  playersMax: zfd.text(z.coerce.number().positive().int()),
  tags: zfd.repeatableOfType(zfd.text(z.string().regex(/^(s|t):.*$/))),
});

export type ExerciseNewFormValidated = z.infer<typeof ExerciseNewFormSchema>;

export type ExerciseNewFormErrors = z.inferFlattenedErrors<typeof ExerciseNewFormSchema>;

export async function actionExerciseNew({ request }: ActionFunctionArgs) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user === null) {
    throw redirect('/login');
  }

  const formData = await request.formData();

  const validatedForm = ExerciseNewFormSchema.safeParse(formData);
  if (!validatedForm.success) {
    throw json(validatedForm.error.flatten());
  }

  return createExercise(user, validatedForm.data);
}

const ExerciseEditFormSchema = zfd.formData({
  _method: zfd.text(z.enum(['put'])),
  exertionLevel: zfd.text(z.enum(EXERTION_LEVELS)),
  howToPlay: zfd.text(z.string()),
  name: zfd.text(z.string()),
  originCountry: zfd.text(z.enum(COUNTRIES).optional()),
  playersMin: zfd.text(z.coerce.number().positive().int()),
  playersMax: zfd.text(z.coerce.number().positive().int()),
  tags: zfd.repeatableOfType(zfd.text(z.string().regex(/^(s|t):.*$/))),
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

  // TODO: actually build up exercise object, validate tags, etc.

  return null;
}
