// === ALIASES === //

import { z } from 'zod';

export type FirebaseId = string;

// === ENUMS === //

export const EXERTION_LEVELS = ['EASY', 'MEDIUM', 'HARD'] as const;

export type ExertionLevel = (typeof EXERTION_LEVELS)[number];

// === TAGS === //

export type Tag = {
  // TODO: we should get rid of associatedExerciseIds in database
  associatedExerciseIds: FirebaseId[];
  tag: string;
  tagID: FirebaseId;
};

// === EXERCISES === //

export const ExerciseSearchParamsSchema = z.object({
  name: z.string().optional(),
  tagIDs: z.array(z.string()),
  exertionLevel: z.enum(EXERTION_LEVELS).optional(),
  playersMin: z.number().int().positive().optional(),
  playersMax: z.number().int().positive().optional(),
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
