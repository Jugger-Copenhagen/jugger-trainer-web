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

export function countryFlag(originCountry?: Country): string | null {
  switch (originCountry) {
    case 'AR':
      return '🇦🇷';
    case 'AT':
      return '🇦🇹';
    case 'AU':
      return '🇦🇺';
    case 'BE':
      return '🇧🇪';
    case 'CA':
      return '🇨🇦';
    case 'CL':
      return '🇨🇱';
    case 'CO':
      return '🇨🇴';
    case 'CR':
      return '🇨🇷';
    case 'CZ':
      return '🇨🇿';
    case 'DE':
      return '🇩🇪';
    case 'DK':
      return '🇩🇰';
    case 'ES':
      return '🇪🇸';
    case 'FR':
      return '🇫🇷';
    case 'GB':
      return '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
    case 'IE':
      return '🇮🇪';
    case 'IT':
      return '🇮🇹';
    case 'JP':
      return '🇯🇵';
    case 'LT':
      return '🇱🇹';
    case 'LV':
      return '🇱🇻';
    case 'MX':
      return '🇲🇽';
    case 'NL':
      return '🇳🇱';
    case 'NZ':
      return '🇳🇿';
    case 'SE':
      return '🇸🇪';
    case 'SI':
      return '🇸🇮';
    case 'US':
      return '🇺🇸';
    case 'VE':
      return '🇻🇪';
    default:
      return null;
  }
}

export function countryHumanReadable(originCountry?: Country): string | null {
  switch (originCountry) {
    case 'AR':
      return 'Argentina';
    case 'AT':
      return 'Austria';
    case 'AU':
      return 'Australia';
    case 'BE':
      return 'Belgium';
    case 'CA':
      return 'Canada';
    case 'CL':
      return 'Chile';
    case 'CO':
      return 'Colombia';
    case 'CR':
      return 'Costa Rica';
    case 'CZ':
      return 'Czechia';
    case 'DE':
      return 'Germany';
    case 'DK':
      return 'Denmark';
    case 'ES':
      return 'Spain';
    case 'FR':
      return 'France';
    case 'GB':
      return 'England';
    case 'IE':
      return 'Ireland';
    case 'IT':
      return 'Italy';
    case 'JP':
      return 'Japan';
    case 'LT':
      return 'Lithuania';
    case 'LV':
      return 'Latvia';
    case 'MX':
      return 'Mexico';
    case 'NL':
      return 'The Netherlands';
    case 'NZ':
      return 'New Zealand';
    case 'SE':
      return 'Sweden';
    case 'SI':
      return 'Slovenia';
    case 'US':
      return 'United States';
    case 'VE':
      return 'Venezuela';
    default:
      return null;
  }
}
