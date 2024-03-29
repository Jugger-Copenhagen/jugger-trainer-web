import { Exercise } from '@/lib/firebase';

export function numberOfPlayersHumanReadable(exercise: Exercise) {
  const { playersMin, playersMax } = exercise;
  if (playersMin === playersMax) {
    return playersMin;
  }
  if (playersMax === 2147483647) {
    return `${playersMin}+`;
  }
  return `${playersMin}\u2013${playersMax}`;
}
