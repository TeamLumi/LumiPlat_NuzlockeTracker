import type { LocationDetails } from 'constants/types';
import data from './generated_files/encounter_locations.json';

interface LocationRates {
  [pokemon_id: number]: LocationDetails[];
}

export const POKEMON_RATES: LocationRates = data;
