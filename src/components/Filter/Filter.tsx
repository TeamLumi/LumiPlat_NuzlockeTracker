import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';
import { shallow } from 'zustand/shallow';
import { TYPE_COLOR } from 'constants/colors';
import { GENERATIONS, TYPES } from 'constants/constant';
import { TFilter } from 'hooks/useFilter';
import styles from './Filter.module.scss';
import useStore from 'store';

interface FilterProps {
  darkMode?: boolean;
  hideGen?: boolean;
  values: TFilter;
}

function Filter({ darkMode = false, hideGen = false, values }: FilterProps): JSX.Element {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);
  const [levels, setLevels] = useState(false);
  const games = useStore(useCallback((state) => state.games, []));
  const selectedGame = useStore(
    useCallback((state) => state.selectedGame, []),
    shallow
  );
  
  const handleShowClick = () => {
    setShow((prevState) => !prevState);
    setLevels(false);
  };

  const handleLevelsClick = () => {
    setShow(false);
    setLevels((prevState) => !prevState);
  };

  return (
    <div className={styles.filter}>
      <Input
        aria-label="search"
        className={`${styles.search} ${values.search ? styles.active : ''}`}
        data-testid="filter"
        fluid
        icon="search"
        iconPosition="left"
        label={{
          content: (
            <Popup
              content={<b>{t('search_help')}</b>}
              inverted={darkMode}
              trigger={<Icon name="question circle" style={{ cursor: 'help' }} />}
            />
          ),
        }}
        labelPosition="right corner"
        maxLength={50}
        onChange={(e, data) => values.setSearch(data.value)}
        placeholder={`${t('search')}...`}
        type="search"
        value={values.search}
      />
      <Button
        active={show}
        aria-label="search-filter"
        color={values.gens?.length > 0 || values?.types?.length > 0 ? 'blue' : undefined}
        data-testid="filter-button"
        icon="filter"
        inverted={darkMode}
        onClick={handleShowClick}
        toggle
        type="button"
      />
      <Button
        active={levels}
        aria-label="route-levels"
        color={undefined}
        data-testid="levels-button"
        icon="question circle"
        inverted={darkMode}
        onClick={handleLevelsClick}
        toggle
        type="button"
      >
        <Popup
          content={<b>{t('search_help')}</b>}
          inverted={darkMode}
          trigger={<Icon name="question circle" style={{ cursor: 'help' }} />}
        />
      </Button>
      {show && !levels && (
        <div className={styles.popup}>
          {!hideGen && (
            <>
              <b>{t('generations')}:</b>
              <div className={styles.buttonRow}>
                {GENERATIONS.map((gen) => {
                  return (
                    <Button
                      active={values.gens.includes(gen)}
                      data-testid={`filter-gen-${gen}`}
                      key={`filter-gen-${gen}`}
                      onClick={() => values.setGens(gen)}
                      toggle
                    >
                      {gen}
                    </Button>
                  );
                })}
              </div>
            </>
          )}
          <b>{t('types')}:</b>
          <div className={styles.buttonRow}>
            {TYPES.map((type) => {
              return (
                <Button
                  data-testid={`filter-type-${type}`}
                  key={`filter-type-${type}`}
                  onClick={() => values.setTypes(type)}
                  style={{
                    backgroundColor: values.types.includes(type) ? TYPE_COLOR[type] : undefined,
                  }}
                >
                  {type}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      {levels && !show && (
        <div className={styles.popup}>
          {!hideGen && (
            <>
              <b>{t('generations')}:</b>
              <div className={styles.buttonRow}>
                {GENERATIONS.map((gen) => {
                  return (
                    <Button
                      active={values.gens.includes(gen)}
                      data-testid={`filter-gen-${gen}`}
                      key={`filter-gen-${gen}`}
                      onClick={() => values.setGens(gen)}
                      toggle
                    >
                      {gen}
                    </Button>
                  );
                })}
              </div>
            </>
          )}
          <b>{t('types')}:</b>
          <div className={styles.buttonRow}>
            {TYPES.map((type) => {
              return (
                <Button
                  data-testid={`filter-type-${type}`}
                  key={`filter-type-${type}`}
                  onClick={() => values.setTypes(type)}
                  style={{
                    backgroundColor: values.types.includes(type) ? TYPE_COLOR[type] : undefined,
                  }}
                >
                  {type}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
