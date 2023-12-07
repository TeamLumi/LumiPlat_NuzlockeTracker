import { Move } from 'components';
import { MOVEMAP } from 'constants/moves';
import styles from './Moves.module.scss';
import { HIDDEN_POWER_TYPES } from 'constants/constant';
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
        if (moveDetail.name === "Hidden Power") {
          const hiddenPowerType = calcHiddenPower(stats)
          moveDetail.type = HIDDEN_POWER_TYPES[hiddenPowerType]
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
