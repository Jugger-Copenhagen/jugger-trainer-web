import { COUNTRIES, EXERTION_LEVELS } from '@/lib/types';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const ExerciseNewFormSchema = zfd.formData({
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

export const ExerciseEditFormSchema = zfd.formData({
  _method: zfd.text(z.enum(['put'])),
  exertionLevel: zfd.text(z.enum(EXERTION_LEVELS)),
  howToPlay: zfd.text(z.string()),
  name: zfd.text(z.string()),
  playersMin: zfd.text(z.coerce.number().positive().int()),
  playersMax: zfd.text(z.coerce.number().positive().int()),
  tags: zfd.repeatableOfType(zfd.text(z.string().regex(/^(s|t):.*$/))),
});

export type ExerciseEditFormValidated = z.infer<typeof ExerciseEditFormSchema>;

export type ExerciseEditFormErrors = z.inferFlattenedErrors<typeof ExerciseEditFormSchema>;
