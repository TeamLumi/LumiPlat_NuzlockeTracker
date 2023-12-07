import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CalculatorHeader,
  General,
  MoveController,
  SideField,
  Stats,
} from 'components/Calculator/elements';
import useWindowSize from 'hooks/useWindowSize';
import { selectCaught } from 'selectors';
import useStore from 'store';
import { ReactComponent as PokeballSVG } from 'assets/svg/pokeball.svg';
import styles from './Calculator.module.scss';
import { getPokemon } from 'hooks/useCalculate';

function Calculator(): JSX.Element {
  const { t } = useTranslation('common');
  const [selected, setSelected] = useState<0 | 1>(0);
  const calc = useStore(useCallback((state) => state.calcs[state?.selectedGame?.value], []));
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const setDefaultCalculator = useStore(useCallback((state) => state.setDefaultCalculator, []));
  const caught = useStore(selectCaught);
  const size = useWindowSize();

  const all = useStore(useCallback((state) => state.calcs[state?.selectedGame?.value]?.form, []));
  const pokemon1 = useMemo(() => {
    return getPokemon(all, 1);
  }, [all]);

  const pokemon2 = useMemo(() => {
    return getPokemon(all, 2);
  }, [all]);

  useEffect(() => {
    if (selectedGame?.value && !calc?.form) {
      setDefaultCalculator();
    }
  }, [calc, selectedGame, setDefaultCalculator]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>, index: 0 | 1) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      setSelected(index);
    }
  };

  return (
    <form className={styles.container} id="calculator">
      {selectedGame && calc?.form ? (
        <>
          <CalculatorHeader />
          <fieldset
            className={styles.fieldset}
            style={{ display: selected === 0 || size?.width >= 750 ? 'flex' : 'none' }}
          >
            <General encounters={caught} pokemon="1" />
            <MoveController move="1" pokemon="1" stats={pokemon1} />
            <MoveController move="2" pokemon="1" stats={pokemon1} />
            <MoveController move="3" pokemon="1" stats={pokemon1} />
            <MoveController move="4" pokemon="1" stats={pokemon1} />
            <Stats pokemon="1" />
            <SideField pokemon="1" />
          </fieldset>
          <fieldset
            className={styles.fieldset}
            style={{ display: selected === 1 || size?.width >= 750 ? 'flex' : 'none' }}
          >
            <General pokemon="2" />
            <MoveController move="1" pokemon="2" stats={pokemon2} />
            <MoveController move="2" pokemon="2" stats={pokemon2} />
            <MoveController move="3" pokemon="2" stats={pokemon2} />
            <MoveController move="4" pokemon="2" stats={pokemon2} />
            <Stats pokemon="2" />
            <SideField pokemon="2" />
          </fieldset>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${selected === 0 ? styles.active : ''}`}
              data-testid="pokemon1-tab"
              onClick={() => setSelected(0)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, 0)}
            >
              Pokémon 1
            </div>
            <div
              className={`${styles.tab} ${selected === 1 ? styles.active : ''}`}
              data-testid="pokemon2-tab"
              onClick={() => setSelected(1)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, 1)}
            >
              Pokémon 2
            </div>
          </div>
        </>
      ) : (
        <div className={styles.placeholder}>
          <PokeballSVG />
          <span>{t('please_select')}</span>
        </div>
      )}
    </form>
  );
}

export default Calculator;
