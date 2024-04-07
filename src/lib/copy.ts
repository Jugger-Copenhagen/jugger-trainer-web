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

export function exertionLevelHumanReadable(exercise: Exercise) {
  switch (exercise.exertionLevel) {
    case 'EASY':
      return 'Easy';
    case 'MEDIUM':
      return 'Medium';
    case 'HARD':
      return 'Hard';
  }
}

// TODO: we should *really* convert these in database to ISO 2-letter country codes
export function countryFlag(exercise: Exercise): string | null {
  switch (exercise.originCountry?.toUpperCase()) {
    case 'AUSTRALIA':
      return '🇦🇺';
    case 'AUSTRIA':
      return '🇦🇹';
    case 'CANADA':
      return '🇨🇦';
    case 'COLOMBIA':
      return '🇨🇴';
    case 'CZECHREPUBLIC':
      return '🇨🇿';
    case 'DENMARK':
      return '🇩🇰';
    case 'FRANCE':
      return '🇫🇷';
    case 'GERMANY':
      return '🇩🇪';
    case 'IRELAND':
      return '🇮🇪';
    case 'ITALY':
      return '🇮🇹';
    case 'SPAIN':
      return '🇪🇸';
    case 'SWEDEN':
      return '🇸🇪';
    case 'USA':
      return '🇺🇸';
    default:
      return null;
  }
}
