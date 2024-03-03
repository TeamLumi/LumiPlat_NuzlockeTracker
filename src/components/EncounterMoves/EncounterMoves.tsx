import { generateMovesViaLearnset } from 'constants/moveFunctions';
import Move from 'components/Move/Move';

interface TEncounterMoves {
  pokemonId: number;
  encLevel: number;
}

function EncounterMoves({pokemonId, encLevel}: TEncounterMoves): JSX.Element {
  const moveList = generateMovesViaLearnset(pokemonId, encLevel)
  return(
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      {moveList.slice(0, 4).map((move, index) => {
        return (
          <Move
            key={index}
            moveDetail={move}
            showStatus={false}
          />
        );
      })}
    </div>
  );
};

export default EncounterMoves;