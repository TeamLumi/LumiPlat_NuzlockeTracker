import { TLumiNameFiles, TLearnset, TEggLearnset, TMoveInfo, TItemTable, TPersonalTable, TPersonalData, TTutorTable, TFormMap } from './types';
import LearnsetTableData from './input_files/WazaOboeTable.json';
import EggMovesTableData from './input_files/TamagoWazaTable.json';
import MovesTableData from './input_files/WazaTable.json';
import ItemTableData from './input_files/ItemTable.json';
import PersonalTableData from './input_files/PersonalTable.json';
import MoveInfoData from './input_files/english_ss_wazainfo.json';
import TutorMovesData from './input_files/tutorMoves.json';
import MOVE_ENUM from './input_files/moveEnum';

const LearnsetTable: TLearnset = LearnsetTableData;
const EggMovesTable: TEggLearnset = EggMovesTableData;
const MovesTable: TMoveInfo = MovesTableData;
const ItemTable: TItemTable = ItemTableData;
const PersonalTable: TPersonalTable = PersonalTableData;
const MoveInfo: TLumiNameFiles = MoveInfoData;
const TutorMoves: TTutorTable = TutorMovesData;

const IS_MOVE_INDEX = false;
const MAX_TM_COUNT = 104;

const FORM_MAP = PersonalTable.Personal.reduce(createFormMap, {});

function createFormMap(formMap: TFormMap, currentPokemon: TPersonalData) {
  if (!Array.isArray(formMap[currentPokemon.monsno])) {
    formMap[currentPokemon.monsno] = [];
  }

  formMap[currentPokemon.monsno].push(currentPokemon.id);
  return formMap;
}

function getPokemonFormId(monsno = 0, id: number) {
  return FORM_MAP[monsno]?.findIndex((e) => e === id) ?? -1;
}

function getPokemonMonsNoAndFormNoFromPokemonId(pokemonId = 0) {
	const { monsno } = PersonalTable.Personal[pokemonId];
	const formno = FORM_MAP[monsno].indexOf(pokemonId);
	return [monsno, formno];
}

function generateMovesViaLearnset(monsNo: number, level: number) {
  /**
   * In BDSP, a trainer's Pokemon, when provided no moves,
   * will use the four most recent moves in the learnset.
   */
  if (!Number.isInteger(monsNo) || monsNo < 0 || !LearnsetTable.WazaOboe[monsNo]) {
    throw new Error('Invalid Pokémon number');
  }

  if (!Number.isInteger(level) || level < 0) {
    throw new Error('Invalid level');
  }

  const cutoffIndex = LearnsetTable.WazaOboe[monsNo].ar.findIndex((currentMoveOrLevel, i) => {
    if (i % 2 === 1) return IS_MOVE_INDEX;
    return currentMoveOrLevel > level;
  });

  const moves = LearnsetTable.WazaOboe[monsNo].ar.slice(0, cutoffIndex);

  return [
    getMoveString(moves.at(-7)),
    getMoveString(moves.at(-5)),
    getMoveString(moves.at(-3)),
    getMoveString(moves.at(-1)),
  ];
}

function getMoveId(moveName: string) {
  if (typeof moveName !== 'string' || !moveName) throw Error(`Bad move name: ${moveName}`);
  const id = MOVE_ENUM.findIndex((e) => e === moveName.trim());
  if (id === -1) throw Error(`Bad move name: ${moveName}`);
  return id;
}

function getMoveString(id = 0) {
  if (!Number.isInteger(id) || id < 0) throw Error(`Bad move string found: ID - ${id}`);

  const str = MOVE_ENUM[id];
  return str;
}

function getMoveProperties(moveId = 0) {
  const move = MovesTable.Waza[moveId];
  const type = move.type;
  const damageType = move.damageType;
  const power = move.power;
  const hitPer = move.hitPer;
  const basePP = move.basePP;

  const BASE_PP = basePP ?? 0;
  const MAX_PP_MULTIPLIER = 1.6;
  const maxPP = BASE_PP * MAX_PP_MULTIPLIER;

  return {
    moveId: moveId,
    name: MOVE_ENUM[moveId] ?? 'None',
    desc: getMoveDescription(moveId),
    type,
    damageType, //0 = Status, 1 = Physical, 2 = Special
    maxPP,
    power,
    accuracy: hitPer,
  };
}

function getEggMoves(dexId = 0) {
  if (!Number.isInteger(dexId) || PersonalTable.Personal[dexId] === undefined) return [];
  const { monsno } = PersonalTable.Personal[dexId];
  const formNo = getPokemonFormId(monsno, dexId);
  const eggMoves = EggMovesTable.Data.find((e) => e.no === monsno && e.formNo === formNo)?.wazaNo ?? [];
  return eggMoves.map((moveId) => ({
    level: 'egg',
    move: getMoveProperties(moveId),
  }));
}

function getMoveDescription(moveId = 0) {
  const wordData = MoveInfo.labelDataArray[moveId].wordDataArray;
  const description = wordData.reduce((moveDescription, currentString) => {
    return moveDescription + currentString.str + ' ';
  }, '');
  return description.trim();
}

function getTMCompatibility(pokemonId = 0) {
  const { machine1, machine2, machine3, machine4 } = PersonalTable.Personal[pokemonId];
  let tmCompatibility = [];

  for (let i = 0; i < 32; i++) {
    tmCompatibility[i] = (machine1 & (1 << i)) != 0;
  }
  for (let i = 0; i < 32; i++) {
    tmCompatibility[i + 32] = (machine2 & (1 << i)) != 0;
  }
  for (let i = 0; i < 32; i++) {
    tmCompatibility[i + 64] = (machine3 & (1 << i)) != 0;
  }
  for (let i = 0; i < 32; i++) {
    tmCompatibility[i + 96] = (machine4 & (1 << i)) != 0;
  }

  return tmCompatibility;
}

function getTechMachineLearnset(pokemonId = 0) {
  const learnset = getTMCompatibility(pokemonId);

  const canLearn = [];
  for (let i = 0; i <= MAX_TM_COUNT; i++) {
    const tm = ItemTable.WazaMachine[i];

    const legalitySetValue = ItemTable.Item[tm.itemNo].group_id;
    const isLearnable = learnset[legalitySetValue - 1];

    if (isLearnable) {
      canLearn.push({ level: 'tm', move: getMoveProperties(tm.wazaNo) });
    }
  }

  return canLearn;
}


function getPokemonLearnset(pokemonId = 0) {
  if (!Number.isInteger(pokemonId) || pokemonId < 0) return [];
  return LearnsetTable.WazaOboe[pokemonId]?.ar ?? [];
}

function getLevelLearnset(pokemonId = 0) {
  const learnset = getPokemonLearnset(pokemonId);

  const moveList = [];
  for (let i = 0; i < learnset.length; i += 2) {
    moveList.push({ level: learnset[i], move: getMoveProperties(learnset[i + 1]) });
  }

  return moveList;
}

function parseTmLearnsetSection(decimal: number) {
  return (decimal >>> 0).toString(2).split('').reverse().join('').padStart(32, "0");
}

function getTutorMoves(pokemonId = 0) {
  const [ monsno, formNo] = getPokemonMonsNoAndFormNoFromPokemonId(pokemonId)
  if(monsno === 0) return [];
  if (!TutorMoves.hasOwnProperty(monsno)) return [];
  if (!TutorMoves[monsno].hasOwnProperty(formNo)) return [];
  const moveset = TutorMoves[monsno][formNo];
  const tutorSet = moveset.map(moveId => ({
    moveLevel: 0,
    move: getMoveProperties(moveId)
  }));

  return tutorSet;
}

export {
  generateMovesViaLearnset,
  createFormMap,
  getPokemonMonsNoAndFormNoFromPokemonId,
  getMoveId,
  getMoveString,
  getEggMoves,
  getTechMachineLearnset,
  getMoveProperties,
  getPokemonLearnset,
  parseTmLearnsetSection,
  getLevelLearnset,
  getTutorMoves
};
