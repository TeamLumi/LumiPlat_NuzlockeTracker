import { ABILITIES } from '@smogon/calc';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import { ItemSelector, PkmImage } from 'common';
import { MoveSelector, Natures, PokemonType } from 'components';
import { TYPE_COLOR } from 'constants/colors';
import NATURES from 'constants/natures';
import { POKEMAP } from 'constants/pokemon';
import type { PokemonDetail } from 'constants/types';
import useStore from 'store';
import dropdownStyles from 'assets/styles/Dropdown.module.scss';
import styles from './Member.module.scss';
import { Pokemon } from 'lumi-calc/dist/calc';
import { GAME_GENERATION } from 'constants/constant';
import { getSmogonName } from 'hooks/useCalculate';

interface MemberProps {
  index: number;
  pokemonDetail: PokemonDetail;
}

function Member({ index, pokemonDetail }: MemberProps): JSX.Element {
  const { t } = useTranslation('builder');
  const pokemon = POKEMAP.get(pokemonDetail.id);
  let stats: Pokemon | undefined = undefined;
  try {
      stats = new Pokemon(
        GAME_GENERATION[1],
        getSmogonName(pokemon.text),
        {
        level: pokemonDetail?.level ?? 1,
        nature: pokemonDetail?.nature,
        ivs: {
          hp: pokemonDetail?.ivhp ?? 0,
          atk: pokemonDetail?.ivatk ?? 0,
          def: pokemonDetail?.ivdef ?? 0,
          spa: pokemonDetail?.ivspatk ?? 0,
          spd: pokemonDetail?.ivspdef ?? 0,
          spe: pokemonDetail?.ivspeed ?? 0,
        },
        evs: {
          hp: pokemonDetail?.evhp ?? 0,
          atk: pokemonDetail?.evatk ?? 0,
          def: pokemonDetail?.evdef ?? 0,
          spa: pokemonDetail?.evspatk ?? 0,
          spd: pokemonDetail?.evspdef ?? 0,
          spe: pokemonDetail?.evspeed ?? 0,
        },
        }
      );
  } catch {
    // do nothing
  }

  const changeTeamMember = useStore(useCallback((state) => state.changeTeamMember, []));
  const deleteTeamMember = useStore(useCallback((state) => state.deleteTeamMember, []));
  const darkMode = useStore(useCallback((state) => state.darkMode, []));
  const [expanded, setExpanded] = useState(false);
  const legalAbilities = pokemon.abilities;

  return (
    <>
      <div
        className={styles.member}
        data-testid={`team-poke-${pokemon.text}`}
        style={{ backgroundColor: `${TYPE_COLOR[pokemon.type]}50` }}
      >
        <div className={styles.info}>
          <div className={styles.pokemonImage}>
          <PkmImage dexNum={pokemon?.dexNum} form={pokemon?.form} name={pokemon?.text} shiny={pokemonDetail?.shiny} />
          </div>
          <b>{pokemon.text}</b>
        </div>
        <div className={styles.other}>
          <PokemonType pokemon={pokemon} />
          <Icon
            className={styles.arrow}
            style={{ transform: expanded ? 'rotate(90deg)' : undefined }}
            name="angle right"
            onClick={() => setExpanded((prevState) => !prevState)}
          />
        </div>
      </div>
      <div className={`${styles.details} ${expanded ? styles.open : ''}`}>
        <div>
          <Dropdown
            aria-label="nature-selector"
            basic
            className={`${dropdownStyles.dropdown} ${styles.nature}`}
            data-testid={`team-nature-${pokemon?.text}`}
            inline
            lazyLoad
            onChange={(e, data) =>
              changeTeamMember(index, { ...pokemonDetail, nature: data.value as unknown as string })
            }
            options={NATURES}
            placeholder={t('select_nature', { ns: 'calculator' })}
            search
            selection
            value={pokemonDetail.nature ?? ''}
          />
          <Natures />
        </div>
        <Dropdown
          aria-label="ability"
          basic
          className={dropdownStyles.dropdown}
          data-testid={`team-ability-${pokemon?.text}`}
          inline
          lazyLoad
          onChange={(e, data) =>
            changeTeamMember(index, { ...pokemonDetail, ability: data.value as string })
          }
          options={[...new Set(legalAbilities)].map((smogonAbility) => {
            return { text: smogonAbility, value: smogonAbility };
          })}
          placeholder={t('select_ability', { ns: 'calculator' })}
          search
          selection
          value={pokemonDetail.ability ?? ''}
        />
        <ItemSelector
          dataTestId={`team-item-${pokemon?.text}`}
          item={pokemonDetail.item}
          onChange={(newItem) => changeTeamMember(index, { ...pokemonDetail, item: newItem })}
        />
        <MoveSelector
          currentMoveId={pokemonDetail?.moves?.length > 0 ? pokemonDetail.moves[0] : null}
          handleMove={(moveId: number) =>
            changeTeamMember(index, {
              ...pokemonDetail,
              moves: [
                moveId,
                pokemonDetail.moves[1],
                pokemonDetail.moves[2],
                pokemonDetail.moves[3],
              ],
            })
          }
          stats={stats}
        />
        <MoveSelector
          currentMoveId={pokemonDetail?.moves?.length > 1 ? pokemonDetail.moves[1] : null}
          handleMove={(moveId: number) =>
            changeTeamMember(index, {
              ...pokemonDetail,
              moves: [
                pokemonDetail.moves[0],
                moveId,
                pokemonDetail.moves[2],
                pokemonDetail.moves[3],
              ],
            })
          }
          stats={stats}
        />
        <MoveSelector
          currentMoveId={pokemonDetail?.moves?.length > 2 ? pokemonDetail.moves[2] : null}
          handleMove={(moveId: number) =>
            changeTeamMember(index, {
              ...pokemonDetail,
              moves: [
                pokemonDetail.moves[0],
                pokemonDetail.moves[1],
                moveId,
                pokemonDetail.moves[3],
              ],
            })
          }
          stats={stats}
        />
        <MoveSelector
          currentMoveId={pokemonDetail?.moves?.length > 3 ? pokemonDetail.moves[3] : null}
          handleMove={(moveId: number) =>
            changeTeamMember(index, {
              ...pokemonDetail,
              moves: [
                pokemonDetail.moves[0],
                pokemonDetail.moves[1],
                pokemonDetail.moves[2],
                moveId,
              ],
            })
          }
          stats={stats}
        />
        <Button
          className={styles.delete}
          color="red"
          data-testid={`delete-team-${index}`}
          inverted={darkMode}
          onClick={() => deleteTeamMember(index)}
        >
          {t('delete')}
          <Icon className="icon close" />
        </Button>
      </div>
    </>
  );
}

export default Member;
