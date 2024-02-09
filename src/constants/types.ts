import { GenerationNum } from '@smogon/calc';
import { StatusName } from '@smogon/calc/dist/data/interface';

export interface AppState {
  badges: TBadgeDictionary;
  calcs: TCalcDictionary;
  customBadges: TCustomBadgeDictionary;
  customStatuses: TStatus[];
  darkMode: boolean;
  duplicates: boolean;
  games: Games;
  gamesList: TGame[];
  gens: number[];
  language: TLanguage;
  missing: boolean;
  newVersion: string;
  nicknames: boolean;
  notes: TNotesDictionary;
  rules: TRulesetDictionary;
  rulesets: TRuleset[];
  selectedGame: TGame;
  selectedRuleset: string;
  soulink: boolean;
  showAll: boolean;
  showAllTooltip: boolean;
  skipped: TSkippedDictionary;
  suggestions: boolean;
  team: TTeamDictionary;
  text: string;
  typeModal: Type;
  types: Type[];
  addCustomBadge: () => void;
  addCustomStatus: (status: string) => void;
  addEncounter: (newLocation: string) => void;
  addGame: (newGame: string, templateKey?: string) => void;
  addRule: (entry: TRuleEntry) => void;
  addRuleset: (newRuleset: string) => void;
  addSkipped: (index: number) => void;
  addTeamMember: (pokemonId: number) => void;
  changeDetails: (
    encounterId: number,
    level: number,
    metLevel: number,
    gender: Gender,
    ability: string,
    nature: string,
    item: string,
    faint: string,
    moveOne: number,
    moveTwo: number,
    moveThree: number,
    moveFour: number,
    shiny: boolean,
    ivhp: number,
    ivatk: number,
    ivdef: number,
    ivspatk: number,
    ivspdef: number,
    ivspeed: number,
    evhp: number,
    evatk: number,
    evdef: number,
    evspatk: number,
    evspdef: number,
    evspeed: number,
    soulink: number
  ) => void;
  changeDupe: () => void;
  changeLevel: (encounterId: number, increase: boolean) => void;
  changeNature: (encounterId: number, nature: string) => void;
  changeNickname: (encounterId: number, nickname: string) => void;
  changeNotes: (text: string) => void;
  changePokemon: (encounterId: number, pokemonId: number) => void;
  changePreviousStatus: (encounterId: number, status: TStatus) => void;
  changeRuleset: (rulesetId: string) => void;
  changeStatus: (encounterId: number, status: TStatus) => void;
  changeSummaryDescription: (desc: string) => void;
  changeSummaryStatus: (status: number) => void;
  changeSummaryTitle: (title: string) => void;
  changeTeamMember: (teamIndex: number, detail: PokemonDetail) => void;
  clearEncounter: (encounterId: number) => void;
  closeTypeModal: () => void;
  deleteCustomBadge: (index: number) => void;
  deleteCustomStatus: (index: number) => void;
  deleteGame: () => void;
  deleteEncounter: (encounterId: number) => void;
  deleteRule: (ruleIndex: number) => void;
  deleteRuleset: () => void;
  deleteSkipped: (index: number) => void;
  deleteTeamMember: (teamIndex: number) => void;
  editBadge: (newBadge: string, i: number) => void;
  editCustomBadge: (newBadge: string, i: number) => void;
  editRule: (newRule: TRuleContent, i: number) => void;
  exportTeamMember: (detail: PokemonDetail) => void;
  exportToGame: (encounter: TEncounter, game: string, location: string) => void;
  importState: (newAppState: Partial<AppState>) => void;
  massImport: (encounters: TEncounter[]) => void;
  removeNew: () => void;
  reorderRule: (destinationId: number, rule: TRuleEntry, sourceId: number) => void;
  resetAll: () => void;
  resetBadges: (gameKey?: string) => void;
  search: (text: string) => void;
  selectGame: (game: TGame) => void;
  selectBadge: (badgeIndex: number) => void;
  setDefaultCalculator: () => void;
  setDefaultSummary: () => void;
  setGens: (genId: number) => void;
  setLanguage: (language: TLanguage) => void;
  setTypes: (typeId: Type) => void;
  showTypeModal: (type: Type) => void;
  summary: TSummaryDictionary;
  toggleMissing: () => void;
  toggleMode: () => void;
  toggleNickname: () => void;
  toggleShowAll: () => void;
  toggleShowAllTooltip: () => void;
  toggleSoulink: () => void;
  toggleSuggestions: () => void;
  toggleSummarySetting: (property: keyof TSummaryBasic) => void;
  updateDefaultValues: (values: Partial<TCalculatorForm>) => void;
}

export type Games = { [key: string]: TrackData };

export type TrackData = {
  badge: number[];
  encounters: TEncounter[];
};

export type TGame = {
  value: string;
  text: string;
  key: string;
};

export type TLevelCaps = { [key: string]: LevelCap[] };

export type LevelCap = {
  value: string;
  text: string;
  key: string;
};

export type TLevelCapDictionary = {
  [key: string]: string[];
};

export type TBadgeDictionary = {
  [key: string]: TBadge[];
};

export type TBadgeImages = {
  [key: string]: { src: string }[];
};

export type TCustomBadgeDictionary = {
  [key: string]: (number | string)[];
};

export type TTeamDictionary = {
  [key: string]: PokemonDetail[];
};

export type TSummaryDictionary = {
  [key: string]: TSummary;
};

export type TCalcState = {
  form: TCalculatorForm;
};

export type TCalcDictionary = {
  [key: string]: TCalcState;
};

export type TBadge = {
  id: number;
  levelCap: number | string;
  name: string;
};

export type TEncounter = {
  details?: PokemonDetail;
  filter?: string[];
  filterKey?: string;
  id: number;
  location: string;
  nickname?: string;
  pokemon: number;
  previousStatus?: TStatus;
  status: TStatus;
  zoneID: number[];
};

export interface TPokemon {
  dualtype?: Type;
  evolve?: number[];
  generation: number;
  key?: string;
  previousDualType?: Type;
  previousType?: Type;
  text: string;
  type: Type;
  value: number;
  abilities?: string[];
  dexNum?: number;
  form?: number;
}

export type TStatus = {
  icon: string;
  key: string;
  text: string;
  value: number;
};

export type TLocation = {
  name: string;
};
export type TNotesDictionary = { [key: string]: string };

export type TRulesetDictionary = { [key: string]: TRuleEntry[] };

export type TSkippedDictionary = { [key: string]: number[] };

export type TRuleset = {
  key: string;
  text: string;
  value: string;
};

export type TRuleEntry = {
  content: TRuleContent;
  default: boolean;
  type: TRule;
};

export type TRuleContent = string | string[] | number | number[];

export type TRule = 'TEXT' | 'TYPE' | 'GENERATION' | 'LEVEL';

type TDetailClassification =
  | 'GYM'
  | 'TRIAL'
  | 'DYNAMAX'
  | 'REMATCH'
  | 'RIVAL'
  | 'EVIL_ORGANIZATION';

export interface TSummary extends TSummaryBasic {
  description: string;
  status: number;
  title: string;
}

export interface TSummaryBasic {
  boxed: boolean;
  encounters: boolean;
  fainted: boolean;
  rules: boolean;
  stats: boolean;
  showDescription: boolean;
}

export type TDetail = {
  content: PokemonDetail[];
  name: string;
  game: string;
  rematch?: PokemonDetail[];
  type: TDetailClassification;
  route?: string;
  zoneId?: number;
  trainerType?: string;
};

export type Type =
  | 'NORMAL'
  | 'FIRE'
  | 'WATER'
  | 'GRASS'
  | 'ELECTRIC'
  | 'ICE'
  | 'POISON'
  | 'FIGHTING'
  | 'GROUND'
  | 'FLYING'
  | 'PSYCHIC'
  | 'BUG'
  | 'ROCK'
  | 'GHOST'
  | 'DARK'
  | 'DRAGON'
  | 'STEEL'
  | 'FAIRY';

export type TLanguage = 'en' | 'es' | 'de';

type Category = 'Physical' | 'Special' | 'Status' | '???';

export type TypeColor = {
  [key in Type]: string;
};

export type TypeIcon = {
  [key in Type]: React.ReactNode;
};

export type CategoryColor = {
  [key in Category]: string;
};

export type Gender = 'MALE' | 'FEMALE' | 'NEUTRAL';

export type TNature = {
  decreased: string;
  increased: string;
  key: string;
  nature: string;
  value: string;
  text: string;
};

export type TMove = {
  accuracy: string;
  category: Category;
  contest: string;
  gen: number;
  name: string;
  id: number;
  power: string;
  pp: string;
  type: Type;
};

export interface PokemonDetail {
  ability?: string;
  faint?: string;
  gender?: Gender;
  id: number;
  item?: string;
  level: number;
  metLevel?: number;
  moves: number[];
  nature?: string;
  shiny?: boolean;
  soulink?: number;
  ivatk?: number;
  ivdef?: number;
  ivhp?: number;
  ivspatk?: number;
  ivspdef?: number;
  ivspeed?: number;
  evhp?: number;
  evatk?: number;
  evdef?: number;
  evspatk?: number;
  evspdef?: number;
  evspeed?: number;
}

export type TReleaseNotes = { name: string; date: number; notes: TReleaseNote[] }[];

export type TReleaseNote = {
  description: string;
  type: TReleaseGroup;
};

export type TReleaseGroup = 'UPDATE' | 'FEATURE' | 'FIX';

export type TEffectiveness = {
  [key in Type]: {
    'Has no effect on': Type[];
    'Immune to': Type[];
    'Super effective against': Type[];
    'Not very effective against': Type[];
    'Weak against': Type[];
    'Resists': Type[];
  };
};

export type TGenerationEffects = {
  [key: string]: TEffectiveness;
};

export interface TCalculatorFields {
  cannonade: boolean;
  isAuroraVeil: boolean;
  isBattery: boolean;
  isDynamaxed: boolean;
  isForesight: boolean;
  isFriendGuard: boolean;
  isHelpingHand: boolean;
  isLightScreen: boolean;
  isProtected: boolean;
  isReflect: boolean;
  isSeeded: boolean;
  isSR: boolean;
  isSwitching: boolean;
  isTailwind: boolean;
  spikes: number;
  steelsurge: boolean;
  vinelash: boolean;
  volcalith: boolean;
  wildfire: boolean;
}

export interface TCalculatorMoves {
  move1_: number;
  move1_crit: boolean;
  move1_z: boolean;
  move2_: number;
  move2_crit: boolean;
  move2_z: boolean;
  move3_: number;
  move3_crit: boolean;
  move3_z: boolean;
  move4_: number;
  move4_crit: boolean;
  move4_z: boolean;
}

interface TCalculatorStats extends TCalculatorFields, TCalculatorMoves {
  ability: string;
  currenthp: number;
  dvatk: number;
  dvdef: number;
  dvspc: number;
  dvspeed: number;
  evatk: number;
  evdef: number;
  evhp: number;
  evspatk: number;
  evspdef: number;
  evspeed: number;
  gender: Gender;
  item: string;
  ivatk: number;
  ivdef: number;
  ivhp: number;
  ivspatk: number;
  ivspdef: number;
  ivspeed: number;
  level: number;
  modatk: number;
  moddef: number;
  modspatk: number;
  modspdef: number;
  modspeed: number;
  pokemon: number;
  nature: string;
  status: StatusName | 'none';
}

type TSplitCalculator<T> = {
  [Property in keyof T as `${Property & string}${1 | 2}`]: T[Property];
};

export type TFirstSplit = {
  [Property in keyof TCalculatorStats as `${Property & string}1`]: TCalculatorStats[Property];
};

export type TSecondSplit = {
  [Property in keyof TCalculatorStats as `${Property & string}2`]: TCalculatorStats[Property];
};

export type TCalculatorMain = {
  calculatorGen: GenerationNum;
  gameType: 'Singles' | 'Doubles';
  isGravity: boolean;
  terrain: 'Electric' | 'Grassy' | 'Misty' | 'Psychic' | 'None';
  weather:
    | 'None'
    | 'Hail'
    | 'Harsh Sunshine'
    | 'Heavy Rain'
    | 'Rain'
    | 'Sand'
    | 'Strong Winds'
    | 'Sun'
    | undefined;
};

export type TCalculatorForm = TSplitCalculator<TCalculatorStats> & TCalculatorMain;

export type TProfile = {
  id: string;
  username: string;
  updated_at: string | Date;
  nuzlocke: string;
};

type SharedProperties = {
  m_GameObject: {
    m_FileID: number;
    m_PathID: number;
  };
  m_Enabled: number;
  m_Script: {
    m_FileID: number;
    m_PathID: number;
  };
  m_Name: string;
};

type LabelStyleInfo = {
  styleIndex: number;
  colorIndex: number;
  fontSize: number;
  maxWidth: number;
  controlID: number;
};

type LabelData = {
  labelIndex: number;
  arrayIndex: number;
  labelName: string;
  styleInfo: LabelStyleInfo;
  attributeValueArray: number[];
  tagDataArray: any[];
  wordDataArray: {
    patternID: number;
    eventID: number;
    tagIndex: number;
    tagValue: number;
    str: string;
    strWidth: number;
  }[];
};

export type TLumiNameFiles = SharedProperties & {
  hash: number;
  langID: number;
  isResident: number;
  isKanji: number;
  labelDataArray: LabelData[];
};

export type TLearnset = SharedProperties & {
  WazaOboe: {
    id: number;
    ar: number[];
  }[];
};

export type TEggLearnset = SharedProperties & {
  Data: {
    no: number,
    formNo: number,
    wazaNo: number[],
  }[];
};

type MoveInfoDetails = {
  wazaNo: number;
  isValid: number;
  type: number;
  category: number;
  damageType: number;
  power: number;
  hitPer: number;
  basePP: number;
  priority: number;
  hitCountMax: number;
  hitCountMin: number;
  sickID: number;
  sickPer: number;
  sickCont: number;
  sickTurnMin: number;
  sickTurnMax: number;
  criticalRank: number;
  shrinkPer: number;
  aiSeqNo: number;
  damageRecoverRatio: number;
  hpRecoverRatio: number;
  target: number;
  rankEffType1: number;
  rankEffType2: number;
  rankEffType3: number;
  rankEffValue1: number;
  rankEffValue2: number;
  rankEffValue3: number;
  rankEffPer1: number;
  rankEffPer2: number;
  rankEffPer3: number;
  flags: number;
  contestWazaNo: number;
}

export type TMoveInfo = SharedProperties & {
  Waza: MoveInfoDetails[];
}

type TItem = {
  no: number;
  type: number;
  iconid: number;
  price: number;
  bp_price: number;
  eqp: number;
  atc: number;
  nage_atc: number;
  sizen_atc: number;
  sizen_type: number;
  tuibamu_eff: number;
  sort: number;
  group: number;
  group_id: number;
  fld_pocket: number;
  field_func: number;
  battle_func: number;
  wk_cmn: number;
  wk_critical_up: number;
  wk_atc_up: number;
  wk_def_up: number;
  wk_agi_up: number;
  wk_hit_up: number;
  wk_spa_up: number;
  wk_spd_up: number;
  wk_prm_pp_rcv: number;
  wk_prm_hp_exp: number;
  wk_prm_pow_exp: number;
  wk_prm_def_exp: number;
  wk_prm_agi_exp: number;
  wk_prm_spa_exp: number;
  wk_prm_spd_exp: number;
  wk_friend1: number;
  wk_friend2: number;
  wk_friend3: number;
  wk_prm_hp_rcv: number;
  flags0: number;
}

type TWazaMachine = {
  itemNo: number;
  machineNo: number;
  wazaNo: number;
}

export type TItemTable = SharedProperties & {
  Item: TItem[];
  WazaMachine: TWazaMachine[];
}

export type TPersonalData = {
  valid_flag: number;
  id: number;
  monsno: number;
  form_index: number;
  form_max: number;
  color: number;
  gra_no: number;
  basic_hp: number;
  basic_atk: number;
  basic_def: number;
  basic_agi: number;
  basic_spatk: number;
  basic_spdef: number;
  type1: number;
  type2: number;
  get_rate: number;
  rank: number;
  exp_value: number;
  item1: number;
  item2: number;
  item3: number;
  sex: number;
  egg_birth: number;
  initial_friendship: number;
  egg_group1: number;
  egg_group2: number;
  grow: number;
  tokusei1: number;
  tokusei2: number;
  tokusei3: number;
  give_exp: number;
  height: number;
  weight: number;
  chihou_zukan_no: number;
  machine1: number;
  machine2: number;
  machine3: number;
  machine4: number;
  hiden_machine: number;
  egg_monsno: number;
  egg_formno: number;
  egg_formno_kawarazunoishi: number;
  egg_form_inherit_kawarazunoishi: number;
}

export type TPersonalTable = SharedProperties & {
  Personal: TPersonalData[];
}

export type TTutorTable = {
  [key: string]: {
    [index: string]: number[];
  };
}

export type TFormMap = {
  [key: number]: number[];
}