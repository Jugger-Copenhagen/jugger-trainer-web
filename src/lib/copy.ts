import { PLAYERS_MAX_NOT_SPECIFIED } from '@/lib/exercise';
import { Country, Exercise, ExerciseCreate, ExertionLevel } from '@/lib/types';

export function numberOfPlayersHumanReadable(exercise: Exercise | ExerciseCreate) {
  const { playersMin, playersMax } = exercise;
  if (playersMin === playersMax) {
    return `${playersMin}`;
  }
  if (playersMax === PLAYERS_MAX_NOT_SPECIFIED) {
    return `${playersMin}+`;
  }
  return `${playersMin}\u2013${playersMax}`;
}

export function exertionLevelHumanReadable(exertionLevel: ExertionLevel) {
  switch (exertionLevel) {
    case 'EASY':
      return 'Easy';
    case 'MEDIUM':
      return 'Medium';
    case 'HARD':
      return 'Hard';
  }
}

// TODO: we should *really* convert these in database to ISO 2-letter country codes
export function countryFlag(originCountry?: Country): string | null {
  switch (originCountry?.toUpperCase()) {
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
    case 'NEWZEALAND':
      return '🇳🇿';
    case 'CHILE':
      return '🇨🇱';
    case 'ARGENTINA':
      return '🇦🇷';
    case 'MEXICO':
      return '🇲🇽';
    case 'VENEZUELA':
      return '🇻🇪';
    case 'COSTARICA':
      return '🇨🇷';
    case 'SLOVENIJA':
      return '🇸🇮';
    case 'LITHUANIA':
      return '🇱🇹';
    case 'LATVIA':
      return '🇱🇻';
    case 'NETHERLANDS':
      return '🇳🇱';
    case 'BELGIUM':
      return '🇧🇪';
    case 'ENGLAND':
      return '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
    case 'JAPAN':
      return '🇯🇵';
    default:
      return null;
  }
}

export function countryHumanReadable(originCountry?: Country): string | null {
  switch (originCountry) {
    case 'ARGENTINA':
    case 'AUSTRALIA':
    case 'AUSTRIA':
    case 'BELGIUM':
    case 'CANADA':
    case 'CHILE':
    case 'COLOMBIA':
    case 'ENGLAND':
    case 'FRANCE':
    case 'GERMANY':
    case 'IRELAND':
    case 'ITALY':
    case 'JAPAN':
    case 'LATVIA':
    case 'LITHUANIA':
    case 'MEXICO':
    case 'SPAIN':
    case 'SWEDEN':
    case 'VENEZUELA':
      return originCountry.slice(0, 1) + originCountry.slice(1).toLowerCase();
    case 'COSTARICA':
      return 'Costa Rica';
    case 'CZECHREPUBLIC':
      return 'Czechia';
    case 'NETHERLANDS':
      return 'The Netherlands';
    case 'NEWZEALAND':
      return 'New Zealand';
    case 'SLOVENIJA':
      return 'Slovenia';
    case 'USA':
      return 'United States';
    default:
      return null;
  }
}
