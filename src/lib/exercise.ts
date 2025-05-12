import { ExerciseCreate } from "@/lib/types";

export const PLAYERS_MAX_NOT_SPECIFIED = 2147483647;

export function getRandomImages(images: string[]) {
  return [
    images[Math.floor(Math.random() * 11)],
    images[Math.floor(Math.random() * 11)],
  ];
}

export function makeExerciseCreate(images: string[]): ExerciseCreate {
  const randomImages = getRandomImages(images);

  return {
    exertionLevel: 'EASY',
    howToPlay: '',
    name: '',
    originCountry: 'CANADA',
    playersMin: 2,
    playersMax: PLAYERS_MAX_NOT_SPECIFIED,
    tags: [],
    images: randomImages,
  }
}