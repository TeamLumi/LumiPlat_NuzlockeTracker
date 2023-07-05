import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Radio from 'semantic-ui-react/dist/commonjs/addons/Radio';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { Page } from 'common';
import LMPT from 'constants/locations/LMPT';
import METLOCATIONS from 'constants/locations/MetLocations';
import MOVES from 'constants/moves';
import POKEMON from 'constants/pokemon';
import type { AppState, Gender, TEncounter } from 'constants/types';
import useStore from 'store';
import styles from './Import.module.scss';

const GENDER_DICTIONARY: Record<string, Gender> = {
  'F': 'FEMALE',
  'M': 'MALE',
};

const getMoveByName = (name: string) => {
  return MOVES?.find((move) => move.name === name)?.id || null;
};

const removeNone = (value: string) => {
  return value === '(None)' ? null : value;
};

function findNthInstance(str: string, n: number=1): number {
  let count = 0;

  for (let i = 0; i < METLOCATIONS.length; i++) {
    if (METLOCATIONS[i] === str) {
      count++;

      if (count === n) {
        return i;
      }
    }
  }
  return -1;
}

const getZoneIdFromName = (name: string) => {
  const hasNumberAfterParenthesis = /\(\d/.test(name);
  if (name.includes(" (") && hasNumberAfterParenthesis) {
    const zone = name.split(" (");
    const zoneName = zone[0];
    const zoneIndex = parseInt(zone[1].replace(")", ""));
    const zoneID = findNthInstance(zoneName, zoneIndex);
    return zoneID
  }
  const zoneID = findNthInstance(name);
  return zoneID
}

function Import(): JSX.Element {
  const { t } = useTranslation('import');
  const importState = useStore(useCallback((state) => state.importState, []));
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const massImport = useStore(useCallback((state) => state.massImport, []));
  const encounterList = useStore(
    useCallback((state) => state.games[state.selectedGame?.value], [])
  );
  const [option, setOption] = useState<'all' | 'table'>('all');
  const [file, setFile] = useState<File>(undefined);
  const [text, setText] = useState('');
  const pkhexHelper = t('pkhex_helper');
  const linkText = 'PKLumiHeX (Version 0.3.7)';
  const linkIndex = pkhexHelper.indexOf(linkText);
  const pkHexTraslate = [
    pkhexHelper.substring(0, linkIndex),
    `<a href="https://github.com/TalonSabre/PKLumiHex">${linkText}</a>`,
    pkhexHelper.substring(linkIndex + linkText.length)
  ];

  function overwriteZoneIDs(firstFile: Partial<AppState>) {
    const encounters = firstFile.games["1"].encounters;
  
    LMPT.forEach((secondEncounter) => {
      const { id, zoneID } = secondEncounter;
  
      const firstEncounter = encounters.find((encounter) => encounter.id === id);
      if (firstEncounter) {
        firstEncounter.zoneID = zoneID;
      }
    });
    return firstFile;
  }
  
  const handleAllImport = () => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = (event) => {
      try {
        const partialState: Partial<AppState> = JSON.parse(event.target.result as string);
        if (!!partialState?.games && !!partialState?.selectedGame && !!partialState?.gamesList) {
          if (partialState?.gamesList[0].text === "Luminescent Platinum") {
            const updatedState = overwriteZoneIDs(partialState);
            importState(updatedState);
          } else {
            importState(partialState);
          }
          toast.success<void>(t('file_success'));
        } else {
          throw Error(t('invalid'));
        }
      } catch (error) {
        toast.error<void>(t('invalid_file'));
      }
    };
  };
  
  const getEncounter = (
    data: string[],
    arrPositions: Map<string, number>,
    pokemonName: string
  ): TEncounter => {
    const MetLoc = data[arrPositions.get('MetLoc')];
    const MetZoneId = getZoneIdFromName(MetLoc)
    const foundEnc = encounterList.encounters.find((enc) => {
      return enc.zoneID.some((zoneId) => zoneId === MetZoneId);
    });
        
    if (foundEnc) {
      const foundPoke = POKEMON.find((poke) => poke.text === pokemonName);
      const zoneID: number[] = foundEnc.zoneID;
      return {
        details: {
          ability: data[arrPositions.get('Ability')],
          gender: GENDER_DICTIONARY[data[arrPositions.get('Gender')]],
          id: foundPoke?.value,
          item: removeNone(data[arrPositions.get('HeldItem')]),
          level: Number(data[arrPositions.get('Level')]) ?? 1,
          metLevel: Number(data[arrPositions.get('MetLevel')]),
          moves: [
            getMoveByName(data[arrPositions.get('Move1')]),
            getMoveByName(data[arrPositions.get('Move2')]),
            getMoveByName(data[arrPositions.get('Move3')]),
            getMoveByName(data[arrPositions.get('Move4')]),
          ],
          nature: removeNone(data[arrPositions.get('Nature')]),
          shiny: data[arrPositions.get('IsShiny')] === 'True',
          ivhp: Number(data[arrPositions.get('HP_IV')]) ?? 31,
          ivatk: Number(data[arrPositions.get('ATK_IV')]) ?? 31,
          ivdef: Number(data[arrPositions.get('DEF_IV')]) ?? 31,
          ivspatk: Number(data[arrPositions.get('SPA_IV')]) ?? 31,
          ivspdef: Number(data[arrPositions.get('SPD_IV')]) ?? 31,
          ivspeed: Number(data[arrPositions.get('SPE_IV')]) ?? 31,
          evhp: Number(data[arrPositions.get('HP_EV')]) ?? 0,
          evatk: Number(data[arrPositions.get('ATK_EV')]) ?? 0,
          evdef: Number(data[arrPositions.get('DEF_EV')]) ?? 0,
          evspatk: Number(data[arrPositions.get('SPA_EV')]),
          evspdef: Number(data[arrPositions.get('SPD_EV')]) ?? 0,
          evspeed: Number(data[arrPositions.get('SPE_EV')]) ?? 0,
        },
        id: foundEnc.id,
        location: foundEnc.location,
        nickname: removeNone(data[arrPositions.get('Nickname')]),
        pokemon: foundPoke?.value,
        status: null,
        zoneID: zoneID,
      };
    }
    return null;
  };

  const getPositionsMap = (arr: string[]) => {
    const arrPositions = new Map<string, number>();
    arr.forEach((v, i) => {
      arrPositions.set(v, i);
    });
    return arrPositions;
  };

  const handleTable = () => {
    try {
      const formatted = text.split('\n');
      if (formatted?.length <= 1 || !text.includes('|')) {
        throw Error('Invalid text');
      }
      const arrPositions = getPositionsMap(formatted[0].split('|'));
      formatted.shift();
      formatted.shift();

      const newEncounters = formatted.reduce((parsedArr: TEncounter[], line) => {
        const lineArr = line.split('|');
        const pokemonName = lineArr[arrPositions.get('Species')];

        if (lineArr?.length < 5 || !pokemonName) {
          return parsedArr;
        }

        const newEncounter = getEncounter(lineArr, arrPositions, pokemonName);
        if (newEncounter) {
          parsedArr.push(newEncounter);
        }

        return parsedArr;
      }, []);
      massImport(newEncounters);
      toast.success<void>(t('game_success'));
    } catch (e) {
      toast.error<void>(t('invalid_text'));
    }
  };

  const handleApply = () => {
    if (option === 'all') handleAllImport();
    if (option === 'table') handleTable();
  };

  return (
    <Page header={t('import')}>
      <div className={styles.container}>
        <Radio
          checked={option === 'all'}
          data-testid="all-import-option"
          label={t('complete_import')}
          onChange={() => setOption('all')}
          value="all"
        />
        <p>
          {t('import_helper_1')}
          <u>
            <strong>{t('all')}</strong>
          </u>
          {t('import_helper_2')}
          <strong>{t('export')}</strong>
          {t('import_helper_3')}
        </p>
        <div className={styles.customFile}>
          <div className={styles.fileText}>
            <span>{file?.name || `${t('select_file')}...`}</span>
          </div>
          <Button color="grey" data-testid="attach-file" type="button">
            {t('select_file')}
            <input
              accept=".json, text/json"
              aria-labelledby="import"
              className={styles.hiddenFile}
              data-testid="import-file-input"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
            />
          </Button>
        </div>
        <b style={{ color: 'red' }}>{t('important_helper')}</b>
        <b style={{ color: 'red' }}>{t('status_not')}</b>
        <p>
          {pkHexTraslate.map((part, index) => (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          ))}
          <strong>{t('selected')}</strong> {t('game')}:{' '}
          <em>{selectedGame?.text || t('no_game')}</em>
        </p>
        <Radio
          checked={option === 'table'}
          data-testid="table-import-option"
          disabled={!selectedGame?.value}
          label={t('import_game_by')}
          onChange={() => setOption('table')}
          value="table"
        />
        <a
          href="https://github.com/diballesteros/nuzlocke/wiki/How-to-generate-table-with-PkHeX"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('how_to')} <Icon name="linkify" />
        </a>
        <textarea
          className={styles.textarea}
          data-testid="table-import-textarea"
          onChange={(e) => setText(e.target.value)}
          placeholder={t('copy_table')}
          rows={5}
          value={text}
        />
        <Button
          className={styles.apply}
          data-testid="apply-import"
          disabled={(option === 'all' && !file) || (option === 'table' && !text)}
          onClick={handleApply}
          primary
          type="button"
        >
          {t('apply')}
        </Button>
      </div>
    </Page>
  );
}

export default Import;
