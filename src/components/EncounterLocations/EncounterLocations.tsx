import EncounterMoves from 'components/EncounterMoves/EncounterMoves';
import { Carousel } from 'primereact/carousel';

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

  const EncounterDisplay = (encounter: LocationDetails) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: "2fr 1fr",
        columnGap: "var(--spacing-4)",
        justifyContent: "space-between"
      }}
    >
      <div>
        <EncounterMoves pokemonId={pokemon_id} encLevel={encounter.minLevel} />
      </div>
      <div className={styles.encounter}>
        <span>{ENC_TYPES[encounter.encounterType]} </span>
        <span>{encounter.encounterRate}</span>
        {combinedEncounters.length > 1 && (
          <span> {combinedEncounters.findIndex(item => item === encounter) + 1} of {combinedEncounters.length}</span>
        )}
      </div>
    </div>
  );

  return (
    <Carousel
      value={combinedEncounters}
      showNavigators={false}
      showIndicators
      numVisible={1}
      numScroll={1}
      circular
      autoplayInterval={combinedEncounters.length > 1 ? 3000 : undefined}
      orientation="vertical"
      verticalViewPortHeight="75px"
      itemTemplate={EncounterDisplay}
    />
  );
}

export default EncounterLocations;
