import { Move } from 'components';
import { MOVEMAP } from 'constants/moves';
import styles from './Moves.module.scss';
import { HIDDEN_POWER_TYPES, TYPES } from 'constants/constant';
import { HiddenPowerInts, PokemonIVs } from 'constants/types';

interface MovesProps {
  moves?: number[];
  showStatus?: boolean;
  stats?: PokemonIVs;
}

export function getHiddenPowerNameWithType(hiddenPowerType: HiddenPowerInts) {
  return `Hidden Power (${HIDDEN_POWER_TYPES[hiddenPowerType][0]}${HIDDEN_POWER_TYPES[hiddenPowerType].slice(1).toLowerCase()})`;
}

export function calcHiddenPower(
  pokemon1Stats : PokemonIVs,
  ) {
  const ivSigBits = {
    hp: pokemon1Stats.hp % 2,
    atk: pokemon1Stats.atk % 2,
    def: pokemon1Stats.def % 2,
    spe: pokemon1Stats.spe % 2,
    spa: pokemon1Stats.spa % 2,
    spd: pokemon1Stats.spd % 2,
  };
  const sumIvs = Object.values(ivSigBits)
    .map((value, index) => value * (2 ** index))
    .reduce((acc, val) => acc + val, 0);

  const hiddenPowerType : HiddenPowerInts = Math.floor((sumIvs * 15) / 63) as HiddenPowerInts;
  return hiddenPowerType;
}

function Moves({ moves = [], showStatus = false, stats }: MovesProps): JSX.Element {
  return (
    <div className={styles.moves}>
      {moves?.map((move, i) => {
        const moveDetail = MOVEMAP.get(move);
        const isAnyStatUndefined = Object.values(stats).some(value => value === undefined)
        if (
          move &&
          isAnyStatUndefined &&
          moveDetail.name.includes("Hidden Power")
        ) {
          moveDetail.name = "Hidden Power (Input IVs for Type)";
          moveDetail.type = TYPES[0];
        } else if (move && moveDetail.name.includes("Hidden Power") && !isAnyStatUndefined) {
          const hiddenPowerType = calcHiddenPower(stats);
          moveDetail.name = getHiddenPowerNameWithType(hiddenPowerType);
          moveDetail.type = HIDDEN_POWER_TYPES[hiddenPowerType];
        }
        return (
          !!moveDetail && (
            <Move key={`move-${move}-${i + 1}`} moveDetail={moveDetail} showStatus={showStatus} />
          )
        );
      })}
    </div>
  );
}

export default Moves;
