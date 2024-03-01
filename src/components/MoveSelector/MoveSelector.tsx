import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FixedSizeList, ListChildComponentProps as RowProps } from 'react-window';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import { Filter, Move } from 'components';
import { HIDDEN_POWER_TYPES, PHYS_SPEC_SPLIT, TYPES } from 'constants/constant';
import MOVES, { MOVEMAP } from 'constants/moves';
import useFilter from 'hooks/useFilter';
import useRemtoPx from 'hooks/useRemToPx';
import useStore from 'store';
import styles from './MoveSelector.module.scss';
import { calcHiddenPower } from 'components/Moves/Moves';
import { PokemonIVs } from 'constants/types';
import { getEggMoves, getLevelLearnset, getTechMachineLearnset, getTutorMoves } from 'constants/moveFunctions';

interface MoveSelectorProps {
  currentMoveId: number;
  handleMove: (moveId: number) => void;
  hideGen?: boolean;
  limitGen?: number;
  stats?: PokemonIVs;
  pokemonId?: number;
}

function MoveSelector({
  currentMoveId,
  handleMove,
  hideGen,
  limitGen,
  stats,
  pokemonId = 0,
}: MoveSelectorProps): JSX.Element {
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const values = useFilter();
  const itemSize = useRemtoPx(2.857);
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const isSplit = !PHYS_SPEC_SPLIT.includes(selectedGame?.value);
  const currentMove = MOVEMAP.get(currentMoveId);
  const learnset = {
    level: getLevelLearnset(pokemonId),
    tm: getTechMachineLearnset(pokemonId),
    egg: getEggMoves(pokemonId),
    tutor: getTutorMoves(pokemonId)
  };

  const learnsetMovesList = Object.values(learnset)
    .flat()
    .map((move: any) => move.move.name.toUpperCase());

  const filteredMovesList = MOVES.filter((move) => {
    if (move.name.includes("Hidden Power")) {
      return learnsetMovesList.some((learnsetMove) =>
        move.name.toUpperCase().includes(learnsetMove.toUpperCase())
      );
    } else {
      return learnsetMovesList.includes(move.name.toUpperCase());
    }
  });

  const initialFilteredMoves = filteredMovesList.filter(
    (m) =>
      m.name.toUpperCase().includes(values.search) &&
      (values.gens.length > 0 ? values.gens.includes(m.gen) : true) &&
      (limitGen ? m.gen <= limitGen : true) &&
      (values.types.length > 0 ? values.types.includes(m.type) : true)
  );

  const filteredMoves = initialFilteredMoves.sort((a, b) => {
    const aName = a.name.includes("Hidden Power") ? "HIDDEN POWER" : a.name.toUpperCase();
    const bName = b.name.includes("Hidden Power") ? "HIDDEN POWER" : b.name.toUpperCase();
    const indexA = learnsetMovesList.indexOf(aName);
    const indexB = learnsetMovesList.indexOf(bName);
    return indexA - indexB;
  });

  const isAnyStatUndefined = Object.values(stats).some(value => value === undefined)
  const HPIndex = filteredMoves.findIndex((move) => {
    return move.name.includes("Hidden Power");
  })
  if ( isAnyStatUndefined && HPIndex !== -1 ) {
    const hiddenPowerMove = filteredMoves[HPIndex];
    hiddenPowerMove.name = "Hidden Power (Input IVs for Type)";
    hiddenPowerMove.type = TYPES[0];
  }
  if ( !isAnyStatUndefined && HPIndex !== -1 ) {
    const hiddenPowerType = calcHiddenPower(stats);
    const hiddenPowerMove = filteredMoves[HPIndex];
    hiddenPowerMove.type = HIDDEN_POWER_TYPES[hiddenPowerType];
    hiddenPowerMove.name = `Hidden Power (${HIDDEN_POWER_TYPES[hiddenPowerType][0]}${HIDDEN_POWER_TYPES[hiddenPowerType].slice(1).toLowerCase()})`;
  };

  const handleClick = (moveId: number) => {
    handleMove(moveId);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    handleMove(null);
  };

  const renderRow: React.FC<RowProps> = ({ index, style }) => {
    const move = filteredMoves[index];
    return (
      <div style={style}>
        <div
          className={styles.row}
          data-testid={`move-${move.name}`}
          onClick={() => handleClick(move.id)}
          role="presentation"
        >
          <Move moveDetail={move} showStatus={isSplit} />
        </div>
      </div>
    );
  };

  return (
    <Modal
      open={open}
      trigger={
        currentMoveId ? (
          <div onClick={() => setOpen(true)} role="presentation" className={styles.currentMove}>
            <Move moveDetail={currentMove} showStatus={isSplit} />
            <Button
              basic
              className={styles.trash}
              compact
              icon="trash"
              name="trash"
              onClick={handleClear}
            />
          </div>
        ) : (
          <div className={styles.selector} onClick={() => setOpen(true)} role="presentation">
            <b>{t('select_move')}</b> <Icon name="hand pointer outline" />
          </div>
        )
      }
    >
      <Modal.Content className={styles.content} scrolling>
        <div data-testid="move-selector-wrapper">
          <Filter hideGen={hideGen} values={values} />
        </div>
        {/* @ts-ignore */}
        <FixedSizeList
          height={400}
          itemCount={filteredMoves.length}
          itemSize={itemSize}
          width="100%"
        >
          {renderRow}
        </FixedSizeList>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>{t('cancel')}</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default MoveSelector;
