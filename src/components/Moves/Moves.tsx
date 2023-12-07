import { Move } from 'components';
import { MOVEMAP } from 'constants/moves';
import styles from './Moves.module.scss';
import { Pokemon } from 'lumi-calc/dist/calc';
import { HIDDEN_POWER_TYPES } from 'constants/constant';

interface MovesProps {
  moves?: number[];
  showStatus?: boolean;
  stats?: Pokemon;
}

function calcHiddenPower(stats : Pokemon) {
  const ivs = stats.ivs;
  const ivSigBits = {
    hp: ivs.hp % 2,
    atk: ivs.atk % 2,
    def: ivs.def % 2,
    spe: ivs.spe % 2,
    spa: ivs.spa % 2,
    spd: ivs.spd % 2,
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
