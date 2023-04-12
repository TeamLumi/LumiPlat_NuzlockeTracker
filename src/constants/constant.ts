import { GenerationNum, ITEMS } from '@smogon/calc';
import BADGES from 'constants/badges';
import { DEFAULT_VALUES } from 'constants/calculator';
import LMPT from 'constants/locations/LMPT';
import {
  AppState,
  TEncounter,
  TGame,
  TLanguage,
  TRule,
  TRuleContent,
  TRuleEntry,
  TRulesetDictionary,
  Type,
} from 'constants/types';

export const GAMES: TGame[] = [
  {
    value: '1',
    text: 'Luminescent Platinum',
    key: '1',
  },
];

const DEFAULT_RULESET: TRuleEntry[] = [
  {
    content:
      'Any Pokémon that faints is considered dead, and must be released or put in the Pokémon Storage System permanently',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      'The player may only catch the first wild Pokémon encountered in each area, and none else. If the first wild Pokémon encountered faints or flees, there are no second chances. If the first encounter in the area is a double battle, the player is free to choose which of the two wild Pokémon they would like to catch but may only catch one of them.',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      'The player must nickname all of their Pokémon, for the sake of forming stronger emotional bonds',
    default: true,
    type: 'TEXT',
  },
];

const HARDCORE_RULESET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content: 'Set mode must be enabled',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      "A pokemon's level may not exceed the highest level pokemon of the current gym leader/champion",
    default: true,
    type: 'TEXT',
  },
  {
    content: 'No items are allowed in battles',
    default: true,
    type: 'TEXT',
  },
];

const EGGLOCKE_RULESET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content: 'Any Pokemon you capture must be traded with user-generated eggs',
    default: true,
    type: 'TEXT',
  },
];

const WONDERLOCKE_RULESET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content: 'Any Pokemon you capture must be traded with the Wonder Trade feature',
    default: true,
    type: 'TEXT',
  },
];

const GENERATION_RULESET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content: 'You must complete a run of all 7 generations in any order you choose',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      'At the end of every game, you must take the offspring of the survivors of the Elite 4 into the next one. A brand new Nuzlocke will begin with the offspring of your pokémon from your old party',
    default: true,
    type: 'TEXT',
  },
];

export const SOULLINK_RULESET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content:
      "Pokémon captured in one player's game are linked to another player's Pokémon. This means that each players' Pokémon are Soul Linked. For example, starter Pokémon are considered linked, and both players' encounter in each area is considered linked.",
    default: true,
    type: 'TEXT',
  },
  {
    content:
      "Once a Pokémon faints, the Soul Link Pokémon in the other player's game is also considered fainted and cannot be used.",
    default: true,
    type: 'TEXT',
  },
  {
    content:
      'If one player is unsuccessful in capturing a Pokémon on a specific route, the linked player must release a Pokémon captured on that route or not catch one.',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      "If a Pokémon is placed in the PC, the linked Pokémon in the other player's game must also be placed in the PC.",
    default: true,
    type: 'TEXT',
  },
];

export const WEDLOCKE_RULESSET: TRuleEntry[] = [
  ...DEFAULT_RULESET,
  {
    content:
      'The player may have three male Pokémon and three female Pokémon in their party at any time. Each male Pokémon forms a pair with a female Pokémon, and the two may only switch with each other in battle',
    default: true,
    type: 'TEXT',
  },
  {
    content:
      'Genderless Pokémon can not be caught. If they must be caught for any reason, they must not be used.',
    default: true,
    type: 'TEXT',
  },
];

export const DEFAULT_RULES: TRulesetDictionary = {
  'Nuzlocke': DEFAULT_RULESET,
  'Hardcore': HARDCORE_RULESET,
  'Egglocke': EGGLOCKE_RULESET,
  'Wonderlocke': WONDERLOCKE_RULESET,
  'Genlocke': GENERATION_RULESET,
  'Soulocke': SOULLINK_RULESET,
  'Wedlocke': WEDLOCKE_RULESSET,
};

export const INITIAL_SUMMARY = {
  boxed: true,
  description: '',
  encounters: true,
  fainted: true,
  rules: true,
  showDescription: true,
  stats: true,
  status: 0,
  title: 'Nuzlocke Run',
};

export const GAME_GENERATION: Record<string, GenerationNum> = {
  '1': 8,
};

export const MAX_GAME = 1 as const;
export const FAIRY_GEN = 1 as const;
export const EN_LANGUAGE: TLanguage = 'en';

export const INITIAL_STATE: Partial<AppState> = {
  badges: BADGES,
  calcs: {
    '1': {
      form: { ...DEFAULT_VALUES, calculatorGen: GAME_GENERATION['1'], pokemon1: 1, pokemon2: 1 },
    },
  },
  darkMode: false,
  duplicates: false,
  games: {
    '1': { badge: [], encounters: LMPT },
  },
  gamesList: GAMES,
  missing: false,
  newVersion: '1',
  nicknames: false,
  notes: {},
  rules: DEFAULT_RULES,
  rulesets: null, // No longer used
  selectedGame: null,
  selectedRuleset: 'Nuzlocke',
  showAll: false,
  showAllTooltip: true,
  skipped: {},
  soulink: false,
  suggestions: true,
  summary: {
    '1': { ...INITIAL_SUMMARY },
  },
  team: {},
  text: null,
};

export const PHYS_SPEC_SPLIT: string[] = ['1', '2', '3'];

export const DEFAULT_RULESET_NAMES = [
  'Nuzlocke',
  'Hardcore',
  'Egglocke',
  'Wonderlocke',
  'Genlocke',
  'Hardcore Nuzlocke',
  'Soulocke',
];

export const getRuleContent = (content: TRuleContent, type: TRule): string => {
  switch (type) {
    case 'TYPE':
      return `Allowed types: ${(content as string[])?.join(', ')}`;
    case 'GENERATION':
      return `Allowed generations: ${(content as string[])?.join(', ')}`;
    case 'LEVEL':
      return `Max level ${content}`;
    case 'TEXT':
    default:
      return content as string;
  }
};

export const GAME_KEY_DICTIONARY: { [key in string]: TEncounter[] } = {
  '1': LMPT,
};

export const GENDERS = [
  { key: '1', text: 'MALE', value: 'MALE' },
  { key: '2', text: 'FEMALE', value: 'FEMALE' },
  { key: '3', text: 'NEUTRAL', value: 'NEUTRAL' },
];

export const TYPE_COUNT: { [key in Type]: number } = {
  'NORMAL': 0,
  'FIRE': 0,
  'WATER': 0,
  'GRASS': 0,
  'ELECTRIC': 0,
  'ICE': 0,
  'POISON': 0,
  'FIGHTING': 0,
  'GROUND': 0,
  'FLYING': 0,
  'PSYCHIC': 0,
  'BUG': 0,
  'ROCK': 0,
  'GHOST': 0,
  'DARK': 0,
  'DRAGON': 0,
  'STEEL': 0,
  'FAIRY': 0,
};

export const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8];

export const GENERATION_SELECT = [
  { key: '1', text: '1', value: 1 },
  { key: '2', text: '2', value: 2 },
  { key: '3', text: '3', value: 3 },
  { key: '4', text: '4', value: 4 },
  { key: '5', text: '5', value: 5 },
  { key: '6', text: '6', value: 6 },
  { key: '7', text: '7', value: 7 },
  { key: '8', text: '8', value: 8 },
];

export const TYPES: Type[] = [
  'NORMAL',
  'FIRE',
  'WATER',
  'GRASS',
  'ELECTRIC',
  'ICE',
  'POISON',
  'FIGHTING',
  'GROUND',
  'FLYING',
  'PSYCHIC',
  'BUG',
  'ROCK',
  'GHOST',
  'DARK',
  'DRAGON',
  'STEEL',
  'FAIRY',
];

export const LANGUAGES = [
  { text: 'English', value: 'en' },
  { text: 'Español', value: 'es' },
  { text: 'Deutsch', value: 'de' },
];

export const getTypeParams = (gameId: string): [types: Type[], genRange: string] => {
  let types = [...TYPES];
  let genRange = 'Gen 6 - 8';

  if (GAME_GENERATION[gameId] === 1) {
    genRange = 'Gen 1';
    types = types.filter((gen1) => gen1 !== 'DARK' && gen1 !== 'FAIRY' && gen1 !== 'STEEL');
  } else if (GAME_GENERATION[gameId] >= 2 && GAME_GENERATION[gameId] <= 5) {
    genRange = 'Gen 2 - 5';
    types = types.filter((gen2_5) => gen2_5 !== 'FAIRY');
  }
  return [types, genRange];
};

export const getTypeCountParams = (
  gameId: string
): [types: { [key in Type]: number }, genRange: string] => {
  const types = { ...TYPE_COUNT };
  let genRange = 'Gen 6 - 8';

  if (GAME_GENERATION[gameId] === 1) {
    genRange = 'Gen 1';
    delete types.FAIRY;
    delete types.DARK;
    delete types.STEEL;
  } else if (GAME_GENERATION[gameId] >= 2 && GAME_GENERATION[gameId] <= 5) {
    genRange = 'Gen 2 - 5';
    delete types.FAIRY;
  }
  return [types, genRange];
};

export const D_STAT_COLOR: Record<string, string[]> = {
  'hp': ['#ffadad', '#A60000'],
  'atk': ['#ffb179', '#9C531F'],
  'def': ['#FAE078', '1px solid #A1871F'],
  'spa': ['#a8c2ff', '445E9C'],
  'spd': ['#81d756', '#4E8234'],
  'spe': ['#ffaac4', '#A13959'],
};

export const STAT_COLOR: Record<string, string[]> = {
  'hp': ['#940000', '#ffadad'],
  'atk': ['#6d3a16', '#ffb179'],
  'def': ['#4f4726', '#FAE078'],
  'spa': ['#334675', '445E9C'],
  'spd': ['#304f20', '#81d756'],
  'spe': ['#7a2b43', '#ffaac4'],
};

export const SPECIAL_NAMES: Record<string, string> = {
  'Nidoran-F': 'nidoran-f',
  'Nidoran-M': 'nidoran-m',
  "Farfetch’d": 'farfetchd',
  'Mr. Mime': 'mr-mime',
  'Mime Jr.': 'mime-jr',
  "Sirfetch'd": 'sirfetchd',
  'Mr. Rime': 'mr-rime',
  'Flabébé': 'flabébé',
  'Burmy Sandy Cloak': 'burmy-sandy',
  'Burmy Trash Cloak': 'burmy-trash',
  'Wormadam Sandy Cloak': 'wormadam-sandy',
  'Wormadam Trash Cloak': 'wormadam-trash',
  'Type: Null': 'type-null',
  'Tapu Koko': 'tapu-koko',
  'Tapu Lele': 'tapu-lele',
  'Tapu Bulu': 'tapu-bulu',
  'Tapu Fini': 'tapu-fini',
  'Shellos East Sea': 'shellos-east',
  'Gastrodon East Sea': 'gastrodon-east',
  'Heat Rotom': 'rotom-heat',
  'Wash Rotom': 'rotom-wash',
  'Frost Rotom': 'rotom-frost',
  'Fan Rotom': 'rotom-fan',
  'Mow Rotom': 'rotom-mow',
  'Cherrim Sunshine Form': 'cherrim-sunshine',
  'Castform Rainy Form': 'castform-rain',
  'Castform Snowy Form': 'castform-hail',
  'Castform Sunny Form': 'castform-sun',
  'Wishiwashi School Form': 'wishiwashi-school',  
  
  'Alolan Rattata': 'rattata-alola',
  'Alolan Raticate': 'raticate-alola',
  'Alolan Raichu': 'raichu-alola',
  'Alolan Sandshrew': 'sandshrew-alola',
  'Alolan Sandslash': 'sandslash-alola',
  'Alolan Vulpix': 'vulpix-alola',
  'Alolan Ninetales': 'ninetales-alola',
  'Alolan Diglett': 'diglett-alola',
  'Alolan Dugtrio': 'dugtrio-alola',
  'Alolan Meowth': 'meowth-alola',
  'Alolan Persian': 'persian-alola',
  'Alolan Geodude': 'geodude-alola',
  'Alolan Graveler': 'graveler-alola',
  'Alolan Golem': 'golem-alola',
  'Alolan Grimer': 'grimer-alola',
  'Alolan Muk': 'muk-alola',
  'Alolan Marowak': 'marowak-alola',
  'Alolan Exeggutor': 'exeggutor-alola',
  'Galarian Meowth': 'meowth-galar',
  'Galarian Persian': 'persian-galar',
  'Galarian Ponyta': 'ponyta-galar',
  'Galarian Rapidash': 'rapidash-galar',
  'Galarian Slowpoke': 'slowpoke-galar',
  'Galarian Slowbro': 'slowbro-galar',
  "Galarian Farfetch'd": 'farfetchd-galar',
  'Galarian Weezing': 'weezing-galar',
  'Galarian Mr. Mime': 'mr-mime-galar',
  'Galarian Articuno': 'articuno-galar',
  'Galarian Zapdos': 'zapdos-galar',
  'Galarian Moltres': 'moltres-galar',
  'Galarian Slowking': 'slowking-galar',
  'Galarian Corsola': 'corsola-galar',
  'Galarian Zigzagoon': 'zigzagoon-galar',
  'Galarian Linoone': 'linoone-galar',
  'Galarian Darumaka': 'darumaka-galar',
  'Darmanitan Galarian Standard Mode': 'darmanitan-galar',
  'Darmanitan Galarian Zen Mode': 'darmanitan-galar-zen',
  'Darmanitan Zen Mode': 'darmanitan-zen',
  'Galarian Stunfisk': 'stunfisk-galar',
  'Galarian Yamask': 'yamask-galar',
  'Hisuian Growlithe': 'growlithe-hisui',
  'Hisuian Arcanine': 'arcanine-hisui',
  'Hisuian Voltorb': 'voltorb-hisui',
  'Hisuian Electrode': 'electrode-hisui',
  'Hisuian Typhlosion': 'typhlosion-hisui',
  'Hisuian Qwilfish': 'qwilfish-hisui',
  'Hisuian Sneasel': 'sneasel-hisui',
  'Hisuian Samurott': 'samurott-hisui',
  'Hisuian Decidueye': 'decidueye-hisui',
  'Hisuian Lilligant': 'lilligant-hisui',
  'Hisuian Zorua': 'zorua-hisui',
  'Hisuian Zoroark': 'zoroark-hisui',
  'Hisuian Braviary': 'braviary-hisui',
  'Hisuian Sliggoo': 'sliggoo-hisui',
  'Hisuian Goodra': 'goodra-hisui',
  'Hisuian Avalugg': 'avalugg-hisui',

  "Mega Venusaur": "venusaur-mega",
  "Gigantamax Venusaur": "venusaur-gmax",
  "Clone Venusaur": "venusaur-clone",
  "Mega Charizard X": "charizard-megax",
  "Mega Charizard Y": "charizard-megay",
  "Gigantamax Charizard": "charizard-gmax",
  "Clone Charizard": "charizard-clone",
  "Mega Blastoise": "blastoise-mega",
  "Gigantamax Blastoise": "blastoise-gmax",
  "Clone Blastoise": "blastoise-clone",
  "Gigantamax Butterfree": "butterfree-gmax",
  "Mega Beedrill": "beedrill-mega",
  "Mega Pidgeot": "pidgeot-mega",
  "Pikachu Belle": "pikachu-belle",
  "Pikachu Libre": "pikachu-libre",
  "Pikachu Original Cap": "pikachu-original",
  "Pikachu Hoenn Cap": "pikachu-hoenn",
  "Pikachu Sinnoh Cap": "pikachu-sinnoh",
  "Pikachu Unova Cap": "pikachu-unova",
  "Pikachu Kalos Cap": "pikachu-kalos",
  "Pikachu Alola Cap": "pikachu-alola",
  "Pikachu Partner Cap": "pikachu-partner",
  "Pikachu World Cap": "pikachu-world",
  "Partner Pikachu": "pikachu-partner",
  "Gigantamax Pikachu": "pikachu-gmax",
  "Clone Pikachu": "pikachu-clone",
  "Gigantamax Meowth": "meowth-gmax",
  "Mega Alakazam": "alakazam-mega",
  "Gigantamax Machamp": "machamp-gmax",
  "Mega Slowbro": "slowbro-mega",
  "Mega Gengar": "gengar-mega",
  "Gigantamax Gengar": "gengar-gmax",
  "Stitched Gengar": "gengar-stitched",
  "Crystal Onix": "onix-crystal",
  "Gigantamax Kingler": "kingler-gmax",
  "Mega Kangaskhan": "kangaskhan-mega",
  "Mega Pinsir": "pinsir-mega",
  "Tauros Combat Breed": "tauros-combat",
  "Tauros Blaze Breed": "tauros-blaze",
  "Tauros Aqua Breed": "tauros-aqua",
  "Mega Gyarados": "gyarados-mega",
  "Gigantamax Lapras": "lapras-gmax",
  "Gigantamax Eevee": "eevee-gmax",
  "Bandana Partner Eevee": "eevee-bandana",
  "Mega Aerodactyl": "aerodactyl-mega",
  "Gigantamax Snorlax": "snorlax-gmax",
  "Mega Mewtwo X": "mewtwo-megax",
  "Mega Mewtwo Y": "mewtwo-megay",
  "MK2 Armored Mewtwo": "mewtwo-armored",
  "Spiky-eared Pichu": "pichu-spiky",
  "Mega Ampharos": "ampharos-mega",
  "Unown One form": "unown",
  "Mega Steelix": "steelix-mega",
  "Mega Scizor": "scizor-mega",
  "Mega Heracross": "heracross-mega",
  "Mega Houndoom": "houndoom-mega",
  "Mega Tyranitar": "tyranitar-mega",
  "Mega Sceptile": "sceptile-mega",
  "Mega Blaziken": "blaziken-mega",
  "Mega Swampert": "swampert-mega",
  "Mega Gardevoir": "gardevoir-mega",
  "Mega Sableye": "sableye-mega",
  "Mega Mawile": "mawile-mega",
  "Mega Aggron": "aggron-mega",
  "Mega Medicham": "medicham-mega",
  "Mega Manectric": "manectric-mega",
  "Mega Sharpedo": "sharpedo-mega",
  "Mega Camerupt": "camerupt-mega",
  "Mega Altaria": "altaria-mega",
  "Mega Banette": "banette-mega",
  "Mega Absol": "absol-mega",
  "Mega Glalie": "glalie-mega",
  "Mega Salamence": "salamence-mega",
  "Mega Metagross": "metagross-mega",
  "Mega Latias": "latias-mega",
  "Mega Latios": "latios-mega",
  "Primal Kyogre": "kyogre-primal",
  "Primal Groudon": "groudon-primal",
  "Mega Rayquaza": "rayquaza-mega",
  "Deoxys Attack Forme": "deoxys-attack",
  "Deoxys Defense Forme": "deoxys-defense",
  "Deoxys Speed Forme": "deoxys-speed",
  "Mega Lopunny": "lopunny-mega",
  "Mega Garchomp": "garchomp-mega",
  "Mega Lucario": "lucario-mega",
  "Mega Abomasnow": "abomasnow-mega",
  "Mega Gallade": "gallade-mega",
  "Dialga Origin Forme": "dialga-origin",
  "Palkia Origin Forme": "palkia-origin",
  "Giratina Origin Forme": "giratina-origin",
  "Shaymin Sky Forme": "shaymin-sky",
  "Mega Audino": "audino-mega",
  "Basculin Blue-Striped Form": "basculin-blue",
  "Basculin White-Striped Form": "basculin-white",
  "Darmanitan Zen Mode": "darmanitan-zen",
  "Gigantamax Garbodor": "garbodor-gmax",
  "Deerling Summer Form": "deerling-summer",
  "Deerling Autumn Form": "deerling-autumn",
  "Deerling Winter Form": "deerling-winter",
  "Sawsbuck Summer Form": "sawsbuck-summer",
  "Sawsbuck Autumn Form": "sawsbuck-autumn",
  "Sawsbuck Winter Form": "sawsbuck-winter",
  "Tornadus Therian Forme": "tornadus-t",
  "Thundurus Therian Forme": "thundurus-t",
  "Landorus Therian Forme": "landorus-t",
  "White Kyurem": "kyurem-white",
  "Black Kyurem": "kyurem-black",
  "Keldeo Resolute Form": "keldeo-resolute",
  "Meloetta Pirouette Forme": "meloetta-piro",
  "Shock Drive Genesect": "genesect-shock",
  "Burn Drive Genesect": "genesect-burn",
  "Chill Drive Genesect": "genesect-chill",
  "Douse Drive Genesect": "genesect-douse",
  "Ash-Greninja": "greninja-ash",
  "Vivillon Polar Pattern": "vivillon-polar",
  "Vivillon Tundra Pattern": "vivillon-tundra",
  "Vivillon Continental Pattern": "vivillon-continental",
  "Vivillon Garden Pattern": "vivillon-garden",
  "Vivillon Elegant Pattern": "vivillon-elegant",
  "Vivillon Icy Snow Pattern": "vivillon-icy-snow",
  "Vivillon Modern Pattern": "vivillon-modern",
  "Vivillon Marine Pattern": "vivillon-marine",
  "Vivillon Archipelago Pattern": "vivillon-archipelago",
  "Vivillon High Plains Pattern": "vivillon-high-plains",
  "Vivillon Sandstorm Pattern": "vivillon-sandstorm",
  "Vivillon River Pattern": "vivillon-river",
  "Vivillon Monsoon Pattern": "vivillon-monsoon",
  "Vivillon Savanna Pattern": "vivillon-savanna",
  "Vivillon Sun Pattern": "vivillon-sun",
  "Vivillon Ocean Pattern": "vivillon-ocean",
  "Vivillon Jungle Pattern": "vivillon-jungle",
  "Vivillon Fancy Pattern": "vivillon-fancy",
  "Vivillon Poké Ball Pattern": "vivillon-poke-ball",
  "Flabébé Yellow Flower": "flabébé-yellow",
  "Flabébé Orange Flower": "flabébé-orange",
  "Flabébé Blue Flower": "flabébé-blue",
  "Flabébé White Flower": "flabébé-white",
  "Floette Yellow Flower": "floette-yellow",
  "Floette Orange Flower": "floette-orange",
  "Floette Blue Flower": "floette-blue",
  "Floette White Flower": "floette-white",
  "Eternal Flower Floette": "floette-eternal-flower",
  "Florges Yellow Flower": "florges-yellow",
  "Florges Orange Flower": "florges-orange",
  "Florges Blue Flower": "florges-blue",
  "Florges White Flower": "florges-white",
  "Furfrou Heart Trim": "furfrou-heart",
  "Furfrou Star Trim": "furfrou-star",
  "Furfrou Diamond Trim": "furfrou-diamond",
  "Furfrou Debutante Trim": "furfrou-debutante",
  "Furfrou Matron Trim": "furfrou-matron",
  "Furfrou Dandy Trim": "furfrou-dandy",
  "Furfrou La Reine Trim": "furfrou-la-reine",
  "Furfrou Kabuki Trim": "furfrou-kabuki",
  "Furfrou Pharaoh Trim": "furfrou-pharaoh",
  "Aegislash Blade Forme": "aegislash-blade",
  "Pumpkaboo Small Size": "pumpkaboo-small",
  "Pumpkaboo Large Size": "pumpkaboo-medium",
  "Pumpkaboo Super Size": "pumpkaboo-large",
  "Gourgeist Small Size": "gourgeist-small",
  "Gourgeist Large Size": "gourgeist-medium",
  "Gourgeist Super Size": "gourgeist-large",
  "Xerneas Active Mode": "xerneas-active",
  "Zygarde 10% Forme": "zygarde-10",
  "Zygarde Complete Forme": "zygarde-complete",
  "Mega Diancie": "diancie-mega",
  "Hoopa Unbound": "hoopa-unbound",
  "Oricorio Pom-Pom Style": "oricorio-pom",
  "Oricorio Pa'u Style": "oricorio-pau",
  "Oricorio Sensu Style": "oricorio-sensu",
  "Rockruff Own-Tempo": "rockruff",
  "Lycanroc Midnight Form": "lycanroc-midnight",
  "Lycanroc Dusk Form": "lycanroc-dusk",
  "Type: Null": "typenull",
  "Silvally Type: Fighting": "silvally-fighting",
  "Silvally Type: Flying": "silvally-flying",
  "Silvally Type: Poison": "silvally-poison",
  "Silvally Type: Ground": "silvally-ground",
  "Silvally Type: Rock": "silvally-rock",
  "Silvally Type: Bug": "silvally-bug",
  "Silvally Type: Ghost": "silvally-ghost",
  "Silvally Type: Steel": "silvally-steel",
  "Silvally Type: Fire": "silvally-fire",
  "Silvally Type: Water": "silvally-water",
  "Silvally Type: Grass": "silvally-grass",
  "Silvally Type: Electric": "silvally-electric",
  "Silvally Type: Psychic": "silvally-psychic",
  "Silvally Type: Ice": "silvally-ice",
  "Silvally Type: Dragon": "silvally-dragon",
  "Silvally Type: Dark": "silvally-dark",
  "Silvally Type: Fairy": "silvally-fairy",
  "Minior Meteor Form": "minior",
  "Minior Red Core": "minior-red",
  "Minior Orange Core": "minior-orange",
  "Minior Yellow Core": "minior-yellow",
  "Minior Green Core": "minior-green",
  "Minior Blue Core": "minior-blue",
  "Minior Indigo Core": "minior-indigo",
  "Minior Violet Core": "minior-violet",
  "Mimikyu Busted Form": "mimikyu-busted",
  "Dusk Mane Necrozma": "necrozma-dusk",
  "Dawn Wings Necrozma": "necrozma-dawn",
  "Ultra Necrozma": "necrozma-ultra",
  "Original Color Magearna": "magearna-original",
  "Gigantamax Melmetal": "melmetal-gmax",
  "Gigantamax Rillaboom": "rillaboom-gmax",
  "Gigantamax Cinderace": "cinderace-gmax",
  "Gigantamax Inteleon": "inteleon-gmax",
  "Gigantamax Corviknight": "corviknight-gmax",
  "Gigantamax Orbeetle": "orbeetle-gmax",
  "Gigantamax Drednaw": "drednaw-gmax",
  "Gigantamax Coalossal": "coalossal-gmax",
  "Gigantamax Flapple": "flapple-gmax",
  "Gigantamax Appletun": "appletun-gmax",
  "Gigantamax Sandaconda": "sandaconda-gmax",
  "Cramorant Gulping Form": "cramorant-gulping",
  "Cramorant Gorging Form": "cramorant-gorging",
  "Toxtricity Low Key Form": "toxtricity-low",
  "Gigantamax Toxtricity": "toxtricity-gmax",
  "Gigantamax Toxtricity": "toxtricity-gmax",
  "Gigantamax Centiskorch": "centiskorch-gmax",
  "Sinistea Antique Form": "sinistea",
  "Polteageist Antique Form": "polteageist",
  "Gigantamax Hatterene": "hatterene-gmax",
  "Gigantamax Grimmsnarl": "grimmsnarl-gmax",
  "Alcremie Vanilla Cream": "alcremie-vanilla-cream-berry-sweet",
  "Alcremie Ruby Cream": "alcremie-ruby-cream-berry-sweet",
  "Alcremie Matcha Cream": "alcremie-matcha-cream-berry-sweet",
  "Alcremie Mint Cream": "alcremie-mint-cream-berry-sweet",
  "Alcremie Lemon Cream": "alcremie-lemon-cream-berry-sweet",
  "Alcremie Salted Cream": "alcremie-salted-cream-berry-sweet",
  "Alcremie Ruby Swirl": "alcremie-ruby-swirl-berry-sweet",
  "Alcremie Caramel Swirl": "alcremie-caramel-swirl-berry-sweet",
  "Alcremie Rainbow Swirl": "alcremie-rainbow-swirl-berry-sweet",
  "Gigantamax Alcremie": "alcremie-gmax",
  "Eiscue Noice Face": "eiscue-noice",
  "Morpeko Hangry Mode": "morpeko-hangry",
  "Gigantamax Copperajah": "copperajah-gmax",
  "Gigantamax Duraludon": "duraludon-gmax",
  "Zacian Crowned Sword": "zacian-crown",
  "Zamazenta Crowned Shield": "zamazenta-crown",
  "Urshifu Rapid Strike Style": "urshifu-rapid",
  "Gigantamax Urshifu": "urshifu-rapid-gmax",
  "Gigantamax Urshifu": "urshifu-single-gmax",
  "Dada Zarude": "zarude-dada",
  "Ice Rider Calyrex": "calyrex-ice",
  "Shadow Rider Calyrex": "calyrex-shadow",
  "Enamorus Therian Forme": "enamorus-t",
  "Basculegion-F": "basculegion-white"
  };

export const SMOGON_NAMES: Record<string, string> = {
  'Nidoran-F': 'Nidoran♀',
  'Nidoran-M': 'Nidoran♂'  
};

export const EXTRA_ITEMS = ['Amulet Coin', 'Soothe Bell', 'Exp. Share'];

export const MY_ITEMS = [
  ...[...new Set(ITEMS[8])].filter((smogonItem) => smogonItem.substring(0, 2) !== 'TR'),
  ...EXTRA_ITEMS,
];

export const getSmogonItemName = (item: string): string => {
  if (item === "King's Rock") {
    return 'kings-rock';
  }
  return item?.toLowerCase()?.replaceAll(' ', '-');
};
