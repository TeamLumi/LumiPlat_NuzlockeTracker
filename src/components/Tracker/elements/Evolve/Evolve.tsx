import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Radio from 'semantic-ui-react/dist/commonjs/addons/Radio';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import type { CheckboxProps } from 'semantic-ui-react/dist/commonjs/modules/Checkbox';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import { PkmImage } from 'common';
import { POKEMAP } from 'constants/pokemon';
import type { TEncounter } from 'constants/types';
import useStore from 'store';
import styles from './Evolve.module.scss';

interface EvolveProps {
  encounter: TEncounter;
  evolveIds: number[];
  showLabel: boolean;
}

function Evolve({ encounter, evolveIds, showLabel }: EvolveProps): JSX.Element {
  const { t } = useTranslation('tracker');
  const changePokemon = useStore(useCallback((state) => state.changePokemon, []));
  const [selected, setSelected] = useState(encounter.pokemon);
  const [open, setOpen] = useState(false);
  const activeLabel = showLabel ? t('evolution_chain') : null;

  const handleClose = () => {
    setSelected(encounter?.pokemon);
    setOpen(false);
  };

  const handleChange = (newId: number) => {
    setSelected(newId);
  };

  const handleEvolve = () => {
    changePokemon(encounter.id, selected);
    setOpen(false);
  };

  return (
    <Modal
      closeOnDimmerClick
      onClose={handleClose}
      open={open}
      trigger={
        <Button
          aria-label="evolve"
          className={styles.button}
          data-testid={`evolve-${encounter.id}}`}
          icon="dna"
          onClick={() => setOpen(true)}
          title="Evolve"
          type="button"
          label={activeLabel}
        />
      }
    >
      <Modal.Header>{t('evolution_chain')}</Modal.Header>
      <Modal.Content>
        {evolveIds.map((id) => {
          const foundPokemon = POKEMAP.get(id);
          return (
            <div className={styles.option} key={`evolve-${id}`}>
              <div className={styles.image}>
              <PkmImage dexNum={foundPokemon?.dexNum} form={foundPokemon?.form} name={foundPokemon?.text} />{' '}
              </div>
              <Radio
                className={styles.radio}
                checked={id === selected}
                label={foundPokemon?.text}
                onChange={(e: React.FormEvent<HTMLInputElement>, data: CheckboxProps) =>
                  handleChange(data.value as number)
                }
                value={id}
              />
            </div>
          );
        })}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose}>{t('cancel', { ns: 'common' })}</Button>
        <Button onClick={handleEvolve} primary>
          {t('save', { ns: 'common' })}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Evolve;
