import { generateMovesViaLearnset } from 'constants/moveFunctions';
import styles from './EncounterMoves.module.scss';

interface TEncounterMoves {
  pokemonId: number;
  encLevel: number;
}

function EncounterMoves({pokemonId, encLevel}: TEncounterMoves): JSX.Element {
  const moveList = generateMovesViaLearnset(pokemonId, encLevel)
  return(
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      {moveList.slice(0, 4).map((move, index) => (
        <div key={index} className={styles.moveItem}>
          {move}
        </div>
      ))}
    </div>
  );
};

export default EncounterMoves;