// === ALIASES === //

import { z } from 'zod';

export type FirebaseId = string;

// === ENUMS === //

export const EXERTION_LEVELS = ['EASY', 'MEDIUM', 'HARD'] as const;

export type ExertionLevel = (typeof EXERTION_LEVELS)[number];

export const COUNTRIES = [
  'CANADA',
  'USA',
  'AUSTRALIA',
  'GERMANY',
  'SPAIN',
  'FRANCE',
  'IRELAND',
  'NEWZEALAND',
  'CHILE',
  'COLOMBIA',
  'ARGENTINA',
  'MEXICO',
  'VENEZUELA',
  'COSTARICA',
  'ITALY',
  'SLOVENIJA',
  'CZECHREPUBLIC',
  'AUSTRIA',
  'LITHUANIA',
  'SWEDEN',
  'LATVIA',
  'NETHERLANDS',
  'BELGIUM',
  'ENGLAND',
  'JAPAN',
];

export type Country = (typeof COUNTRIES)[number];

// === TAGS === //

export type Tag = {
  // TODO (post-android): we should get rid of associatedExerciseIds in database
  associatedExerciseIds: FirebaseId[];
  tag: string;
  tagID: FirebaseId;
};

// === EXERCISES === //

export const ExerciseSearchParamsSchema = z.object({
  name: z.string().optional(),
  tagIDs: z.array(z.string()),
  exertionLevel: z.enum(EXERTION_LEVELS).optional(),
  players: z.coerce.number().positive().int().optional(),
});

export type ExerciseSearchParams = z.infer<typeof ExerciseSearchParamsSchema>;

export type Exercise = {
  created: number;
  createdByUID: FirebaseId;
  eid: FirebaseId;
  exertionLevel: ExertionLevel;
  howToPlay: string;
  name: string;
  originCountry?: string;
  playersMin: number;
  playersMax: number;
  tags: Tag[];
  images: string[];
};

export type ExerciseCreate = Omit<Exercise, 'created' | 'createdByUID' | 'eid'>;
