import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import type { LocationDetails } from 'constants/types';
import useStore from 'store';
import styles from './EncounterLocations.module.scss';
import { POKEMON_RATES } from 'constants/encounter_locations';

interface TEncounterLocation {
  pokemon_id: number;
  zoneId: number[];
}

function EncounterLocations({ pokemon_id, zoneId }: TEncounterLocation): JSX.Element {
  const selectedGame = useStore(
    useCallback((state) => state.selectedGame, []),
    shallow
  );

  const filteredEncounters: LocationDetails[] = POKEMON_RATES[pokemon_id] ?? [];

  const filteredByZone = filteredEncounters.filter((encounter) =>
    zoneId.includes(encounter.zoneId)
  );

  return (
    <div className={styles.encounterLocations}>
      {filteredByZone.map((encounter, index) => (
        <div key={index} className={styles.encounter}>
          <span>{encounter.encounterType}</span> {/* encounterType */}
          <span>{encounter.encounterRate}</span> {/* encounterRate */}
          <span>{encounter.minLevel}</span> {/* minLevel */}
        </div>
      ))}
    </div>
  );
}

export default EncounterLocations;
