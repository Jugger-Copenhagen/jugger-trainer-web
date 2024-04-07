// === ALIASES === //

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

export type ExerciseSearchParams = {
  name?: string;
  tagIDs: string[];
  exertionLevel?: ExertionLevel;
  playersMin?: number;
  playersMax?: number;
};

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
