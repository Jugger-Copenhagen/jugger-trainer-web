import { ExerciseCreate } from "@/lib/types";

export const PLAYERS_MAX_NOT_SPECIFIED = 2147483647;

export function makeExerciseCreate(): ExerciseCreate {
  return {
    exertionLevel: 'EASY',
    howToPlay: '',
    name: '',
    originCountry: 'CANADA',
    playersMin: 2,
    playersMax: PLAYERS_MAX_NOT_SPECIFIED,
    tags: [],
    images: [],
  }
}