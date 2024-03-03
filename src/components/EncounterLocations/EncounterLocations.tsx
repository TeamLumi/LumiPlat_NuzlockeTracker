import EncounterMoves from 'components/EncounterMoves/EncounterMoves';

import type { LocationDetails } from 'constants/types';
import { POKEMON_RATES } from 'constants/encounter_locations';
import { ENC_TYPES } from 'constants/constant';

import styles from 'assets/styles/Selector.module.scss';

interface TEncounterLocation {
  pokemon_id: number;
  zoneId: number[];
}

function EncounterLocations({ pokemon_id, zoneId }: TEncounterLocation): JSX.Element {
  const filteredEncounters: LocationDetails[] = POKEMON_RATES[pokemon_id] ?? [];

  const filteredByZone = filteredEncounters.filter((encounter) =>
    zoneId.includes(encounter.zoneId)
  );

  const combinedEncounters: LocationDetails[] = Object.values(
    filteredByZone.reduce((acc: Record<string, LocationDetails>, encounter: LocationDetails) => {
      const encType = encounter.encounterType;
      if (!acc[encType]) {
        acc[encType] = {
          encounterType: encounter.encounterRate === "morning" ? "Morning" : encType,
          encounterRate: "0%",
          routeName: encounter.routeName,
          minLevel: encounter.minLevel,
          maxLevel: encounter.minLevel,
          encounterTypeIndex: encounter.encounterTypeIndex,
          zoneId: encounter.zoneId,
        };
      }
      const originalRate = encounter.encounterRate === "morning" ? "10%" : encounter.encounterRate;
      const encRate = `${parseInt(acc[encType].encounterRate) + parseInt(originalRate)}%`
      acc[encType].encounterRate = encRate;
      return acc;
    }, {})
  );

  return (
    <>
      <div>
        {Array.from(new Set(combinedEncounters.map(encounter => encounter.minLevel))).map((uniqueMinLevel, index) => {
          return (
            <EncounterMoves pokemonId={pokemon_id} encLevel={uniqueMinLevel}/>
          );
        })}
      </div>
      <div>
        {combinedEncounters.map((encounter, index) => {
          return (
            <div key={index} className={styles.encounter}>
              <span>{ENC_TYPES[encounter.encounterType]}</span> {/* encounterType */}
              <span>{encounter.encounterRate}</span> {/* encounterRate */}
            </div>
          )
        })}
      </div>
    </>
  );
}

export default EncounterLocations;
