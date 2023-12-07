import { Move } from 'components';
import { MOVEMAP } from 'constants/moves';
import styles from './Moves.module.scss';
import { HIDDEN_POWER_TYPES, TYPES } from 'constants/constant';
import { PokemonIVs } from 'constants/types';

interface MovesProps {
  moves?: number[];
  showStatus?: boolean;
  stats?: PokemonIVs;
}

export function calcHiddenPower(stats : PokemonIVs) {
  const ivSigBits = {
    hp: stats.hp % 2,
    atk: stats.atk % 2,
    def: stats.def % 2,
    spe: stats.spe % 2,
    spa: stats.spa % 2,
    spd: stats.spd % 2,
  };
  const sumIvs = Object.values(ivSigBits)
    .map((value, index) => value * (2 ** index))
    .reduce((acc, val) => acc + val, 0);

  const hiddenPowerType = Math.floor((sumIvs * 15) / 63);
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
          moveDetail.name = `Hidden Power (${HIDDEN_POWER_TYPES[hiddenPowerType][0]}${HIDDEN_POWER_TYPES[hiddenPowerType].slice(1).toLowerCase()})`;
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
