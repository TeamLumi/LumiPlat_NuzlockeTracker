import { Pokemon } from '../../../../lumi-calc/dist/calc';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Radio from 'semantic-ui-react/dist/commonjs/addons/Radio';
import type { CheckboxProps } from 'semantic-ui-react/dist/commonjs/modules/Checkbox';
import { PkmImage } from 'common';
import { Moves, PokemonType } from 'components';
import { getGenderIcon } from 'components/PokeInfo/PokeInfo';
import { TYPE_COLOR } from 'constants/colors';
import {
  D_STAT_COLOR,
  GAME_GENERATION,
  getSmogonItemName,
  PHYS_SPEC_SPLIT,
  STAT_COLOR,
} from 'constants/constant';
import { POKEMAP } from 'constants/pokemon';
import type { TDetail } from 'constants/types';
import { getSmogonName } from 'hooks/useCalculate';
import useStore from 'store';
import styles from './BadgeDetail.module.scss';
import useCalculate from 'hooks/useCalculate';
interface BadgeDetailProps {
  selectedDetail: TDetail;
}

function BadgeDetail({ selectedDetail }: BadgeDetailProps): JSX.Element {
  const { t } = useTranslation('badges');
  const [view, setView] = useState(0);
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const darkMode = useStore(useCallback((state) => state.darkMode, []));
  const isSplit = !PHYS_SPEC_SPLIT.includes(selectedGame?.value);
  const colors = darkMode ? D_STAT_COLOR : STAT_COLOR;

  const getContent = () => {
    if (!!selectedDetail?.rematch && view === 1) {
      return selectedDetail.rematch;
    }
    return selectedDetail?.content;
  };
  return (
    <>
      <div className={styles.title}>{selectedDetail?.name}</div>
      {selectedDetail?.type === 'REMATCH' && (
        <div className={styles.rematch}>
          <Radio
            checked={view === 0}
            label={t('original')}
            onChange={(e: React.FormEvent<HTMLInputElement>, data: CheckboxProps) =>
              setView(data.value as number)
            }
            value={0}
          />
          <Radio
            checked={view === 1}
            label={t('rematch')}
            onChange={(e: React.FormEvent<HTMLInputElement>, data: CheckboxProps) =>
              setView(data.value as number)
            }
            value={1}
          />
        </div>
      )}
      <div className={styles.gymPokemon}>
        {getContent()?.map((pokemon, ind) => {
          const poke = POKEMAP.get(pokemon.id);
          let stats: Pokemon | undefined = undefined;
          try {
              stats = new Pokemon(
                GAME_GENERATION[selectedGame?.value],
                getSmogonName(poke.text),
                {
                level: pokemon?.level,
                nature: pokemon?.nature,
                ivs: {
                  hp: pokemon?.ivhp ?? 0,
                  atk: pokemon?.ivatk ?? 0,
                  def: pokemon?.ivdef ?? 0,
                  spa: pokemon?.ivspatk ?? 0,
                  spd: pokemon?.ivspdef ?? 0,
                  spe: pokemon?.ivspeed ?? 0,
                },
                evs: {
                  hp: pokemon?.evhp ?? 0,
                  atk: pokemon?.evatk ?? 0,
                  def: pokemon?.evdef ?? 0,
                  spa: pokemon?.evspatk ?? 0,
                  spd: pokemon?.evspdef ?? 0,
                  spe: pokemon?.evspeed ?? 0,
                },
                }
              );
          } catch {
            // do nothing
          }

          return (
            <div
              className={styles.pokemon}
              key={`pokemon-${pokemon.id}-${ind + 1}`}
              style={{ border: `2px solid ${TYPE_COLOR[poke?.type]}` }}
            >
              <div className={styles.pokemonHeader}>
                <div className={styles.pokemonName}>
                  {selectedDetail?.type === 'TRIAL' && ind === 0 && (
                    <span className={styles.totem}>TOTEM</span>
                  )}
                  {selectedDetail?.type === 'DYNAMAX' &&
                    ind === (selectedDetail?.content?.length ?? 0) - 1 && (
                      <span className={styles.totem}>DYNAMAX</span>
                    )}
                  <div className={styles.pokemonImage}>
                    <PkmImage name={poke?.text} />
                  </div>
                  <span>
                    {poke?.text} <span>{getGenderIcon(pokemon.gender)}</span>
                  </span>
                  <span>Lv. {pokemon?.level} Nature: {pokemon?.nature}</span>
                </div>
                <div className={styles.pokemonDetails}>
                  <PokemonType pokemon={poke} />
                  {!!pokemon?.ability && (
                    <div className={styles.pokemonLabel}>
                      <span className={styles.value}>{t('ability')}:</span> 
                      <span className={styles.value}>{pokemon?.ability}</span>                      
                    </div>
                  )}
                  {!!pokemon?.item && (
                    <div className={styles.pokemonLabel}>
                      <span>{t('item')}:</span>
                      <div className={styles.item}>
                        <span className={styles.value}>{pokemon?.item}</span>
                        <div className="pkitem-wrapper">
                          <div className={`pkitem pkitem-${getSmogonItemName(pokemon?.item)}`} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.extendedDetails}>
                {stats?.stats && (
                  <div className={styles.stats}>
                    <span className={styles.totalStats}>Total Stats</span>
                    {Object.entries(stats.stats).map(([key, value]) => (
                      <React.Fragment key={`${key}-${value}`}>
                        <span className={styles.statLabel}>{key.toUpperCase()}:</span>
                        <span style={{ color: colors[key][0] }}>{value}</span>
                        <div
                          className={styles.statBar}
                          style={{
                            width: `${(value / 450) * 100}%`,
                            backgroundColor: colors[key][0],
                            border: `1px solid ${colors[key][1]}`,
                          }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {stats?.ivs && stats?.evs && (
                  <div className={styles.ivEv}>
                    <span className={styles.addStats}>IVs / EVs</span>
                    {Object.keys(stats.ivs).map((key) => (
                      <div key={key} className={styles.ivEvWrapper}>
                        <span className={styles.iv}>
                          {key.toUpperCase()}: {stats.ivs[key as keyof typeof stats.ivs]} / {stats.evs[key as keyof typeof stats.evs]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.moves}>
                  <Moves moves={pokemon?.moves} showStatus={isSplit} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BadgeDetail;
