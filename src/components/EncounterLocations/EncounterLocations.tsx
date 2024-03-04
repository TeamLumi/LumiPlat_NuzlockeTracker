import EncounterMoves from 'components/EncounterMoves/EncounterMoves';
import { Carousel } from 'primereact/carousel';

import type { LocationDetails } from 'constants/types';
import { POKEMON_RATES } from 'constants/encounter_locations';
import { ENC_ICONS, ENC_TYPES } from 'constants/constant';

import styles from 'assets/styles/Selector.module.scss';
import { useEffect, useState } from 'react';

interface TEncounterLocation {
  pokemon_id: number;
  zoneId: number[];
}

function EncounterLocations({ pokemon_id, zoneId }: TEncounterLocation): JSX.Element {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className={styles.encounterDisplay}>
      {isLargeScreen && 
        <div>
          <EncounterMoves pokemonId={pokemon_id} encLevel={encounter.minLevel} />
        </div>
      }
      <div className={styles.details}>
        <div className={styles.icons}>
          {ENC_ICONS[encounter.encounterType].map((src) => (
            <img
              key={ENC_TYPES[encounter.encounterType]}
              src={src}
              alt={ENC_TYPES[encounter.encounterType]}
              title={ENC_TYPES[encounter.encounterType]}
            />
          ))}
          <span>{encounter.encounterRate}</span>
        </div>
        {combinedEncounters.length > 1 && (
          <div className={styles.pageNumber}>
            {combinedEncounters.findIndex(item => item === encounter) + 1} of {combinedEncounters.length}
          </div>
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
      contentClassName={styles.carouselContainer}
      circular={combinedEncounters.length > 1}
      autoplayInterval={combinedEncounters.length > 1 ? 3000 : undefined}
      orientation={isLargeScreen ? "vertical" : "horizontal"}
      verticalViewPortHeight="75px"
      itemTemplate={EncounterDisplay}
    />
  );
}

export default EncounterLocations;
