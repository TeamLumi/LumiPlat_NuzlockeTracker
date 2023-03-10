import type { TGenerationEffects } from 'constants/types';

const EFFECTIVENESS: TGenerationEffects = {
  'Gen 1': {
    'BUG': {
      'Super effective against': ['GRASS', 'PSYCHIC'],
      'Not very effective against': ['FIGHTING', 'FIRE', 'FLYING', 'GHOST'],
      'Weak against': ['FIRE', 'FLYING', 'POISON', 'ROCK'],
      'Resists': ['FIGHTING', 'GRASS', 'GROUND'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'DARK': null,
    'DRAGON': {
      'Super effective against': ['DRAGON'],
      'Not very effective against': [],
      'Weak against': ['DRAGON', 'ICE'],
      'Resists': ['ELECTRIC', 'FIRE', 'GRASS', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'ELECTRIC': {
      'Super effective against': ['FLYING', 'WATER'],
      'Not very effective against': ['DRAGON', 'ELECTRIC', 'GRASS'],
      'Weak against': ['GROUND'],
      'Resists': ['ELECTRIC', 'FLYING'],
      'Immune to': [],
      'Has no effect on': ['GROUND'],
    },
    'FAIRY': null,
    'FIGHTING': {
      'Super effective against': ['ICE', 'NORMAL', 'ROCK'],
      'Not very effective against': ['BUG', 'FLYING', 'POISON', 'PSYCHIC'],
      'Weak against': ['FLYING', 'PSYCHIC'],
      'Resists': ['BUG', 'ROCK'],
      'Immune to': [],
      'Has no effect on': ['GHOST'],
    },
    'FIRE': {
      'Super effective against': ['BUG', 'GRASS', 'ICE'],
      'Not very effective against': ['DRAGON', 'FIRE', 'GROUND', 'WATER'],
      'Weak against': ['GROUND', 'ROCK', 'WATER'],
      'Resists': ['BUG', 'FIRE', 'GRASS'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'FLYING': {
      'Super effective against': ['BUG', 'FIGHTING', 'GRASS'],
      'Not very effective against': ['ELECTRIC', 'ROCK'],
      'Weak against': ['ELECTRIC', 'ICE', 'ROCK'],
      'Resists': ['BUG', 'FIGHTING', 'GRASS'],
      'Immune to': ['GROUND'],
      'Has no effect on': [],
    },
    'GHOST': {
      'Super effective against': ['GHOST'],
      'Not very effective against': [],
      'Weak against': ['GHOST'],
      'Resists': ['BUG', 'POISON'],
      'Immune to': ['FIGHTING', 'NORMAL'],
      'Has no effect on': ['NORMAL', 'PSYCHIC'],
    },
    'GRASS': {
      'Super effective against': ['GROUND', 'ROCK', 'WATER'],
      'Not very effective against': ['BUG', 'DRAGON', 'FIRE', 'FLYING', 'GRASS', 'POISON'],
      'Weak against': ['BUG', 'FIRE', 'FLYING', 'ICE', 'POISON'],
      'Resists': ['ELECTRIC', 'GRASS', 'GROUND', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'GROUND': {
      'Super effective against': ['ELECTRIC', 'FIRE', 'POISON', 'ROCK'],
      'Not very effective against': ['BUG', 'GRASS'],
      'Weak against': ['GRASS', 'ICE', 'WATER'],
      'Resists': ['POISON', 'ROCK'],
      'Immune to': ['ELECTRIC'],
      'Has no effect on': ['FLYING'],
    },
    'ICE': {
      'Super effective against': ['DRAGON', 'FLYING', 'GRASS', 'GROUND'],
      'Not very effective against': ['ICE', 'WATER'],
      'Weak against': ['FIGHTING', 'FIRE', 'ROCK'],
      'Resists': ['ICE'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'NORMAL': {
      'Super effective against': [],
      'Not very effective against': ['ROCK'],
      'Weak against': ['FIGHTING'],
      'Resists': [],
      'Immune to': ['GHOST'],
      'Has no effect on': ['GHOST'],
    },
    'POISON': {
      'Super effective against': ['BUG', 'GRASS'],
      'Not very effective against': ['GHOST', 'GROUND', 'POISON', 'ROCK'],
      'Weak against': ['BUG', 'GROUND', 'PSYCHIC'],
      'Resists': ['FIGHTING', 'GRASS', 'POISON'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'PSYCHIC': {
      'Super effective against': ['FIGHTING', 'POISON'],
      'Not very effective against': ['PSYCHIC'],
      'Weak against': ['BUG'],
      'Resists': ['FIGHTING', 'PSYCHIC'],
      'Immune to': ['GHOST'],
      'Has no effect on': [],
    },
    'ROCK': {
      'Super effective against': ['BUG', 'FIRE', 'FLYING', 'ICE'],
      'Not very effective against': ['FIGHTING', 'GROUND'],
      'Weak against': ['FIGHTING', 'GRASS', 'GROUND', 'WATER'],
      'Resists': ['FIRE', 'FLYING', 'NORMAL', 'POISON'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'STEEL': null,
    'WATER': {
      'Super effective against': ['FIRE', 'GROUND', 'ROCK'],
      'Not very effective against': ['DRAGON', 'GRASS', 'WATER'],
      'Weak against': ['ELECTRIC', 'GRASS'],
      'Resists': ['FIRE', 'ICE', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
  },
  'Gen 2 - 5': {
    'BUG': {
      'Super effective against': ['DARK', 'GRASS', 'PSYCHIC'],
      'Not very effective against': ['FIGHTING', 'FIRE', 'FLYING', 'GHOST', 'POISON', 'STEEL'],
      'Weak against': ['FIRE', 'FLYING', 'ROCK'],
      'Resists': ['FIGHTING', 'GRASS', 'GROUND'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'DARK': {
      'Super effective against': ['GHOST', 'PSYCHIC'],
      'Not very effective against': ['DARK', 'FIGHTING', 'STEEL'],
      'Weak against': ['BUG', 'FIGHTING'],
      'Resists': ['DARK', 'GHOST'],
      'Immune to': ['PSYCHIC'],
      'Has no effect on': [],
    },
    'DRAGON': {
      'Super effective against': ['DRAGON'],
      'Not very effective against': ['STEEL'],
      'Weak against': ['DRAGON', 'ICE'],
      'Resists': ['ELECTRIC', 'FIRE', 'GRASS', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'ELECTRIC': {
      'Super effective against': ['FLYING', 'WATER'],
      'Not very effective against': ['DRAGON', 'ELECTRIC', 'GRASS'],
      'Weak against': ['GROUND'],
      'Resists': ['ELECTRIC', 'FLYING', 'STEEL'],
      'Immune to': [],
      'Has no effect on': ['GROUND'],
    },
    'FAIRY': null,
    'FIGHTING': {
      'Super effective against': ['DARK', 'ICE', 'NORMAL', 'ROCK', 'STEEL'],
      'Not very effective against': ['BUG', 'FLYING', 'POISON', 'PSYCHIC'],
      'Weak against': ['FLYING', 'PSYCHIC'],
      'Resists': ['BUG', 'DARK', 'ROCK'],
      'Immune to': [],
      'Has no effect on': ['GHOST'],
    },
    'FIRE': {
      'Super effective against': ['BUG', 'GRASS', 'ICE', 'STEEL'],
      'Not very effective against': ['DRAGON', 'FIRE', 'GROUND', 'WATER'],
      'Weak against': ['GROUND', 'ROCK', 'WATER'],
      'Resists': ['BUG', 'FIRE', 'GRASS', 'ICE', 'STEEL'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'FLYING': {
      'Super effective against': ['BUG', 'FIGHTING', 'GRASS'],
      'Not very effective against': ['ELECTRIC', 'ROCK'],
      'Weak against': ['ELECTRIC', 'ICE', 'ROCK'],
      'Resists': ['BUG', 'FIGHTING', 'GRASS'],
      'Immune to': ['GROUND'],
      'Has no effect on': [],
    },
    'GHOST': {
      'Super effective against': ['GHOST', 'PSYCHIC'],
      'Not very effective against': ['DARK', 'STEEL'],
      'Weak against': ['DARK', 'GHOST'],
      'Resists': ['BUG', 'POISON'],
      'Immune to': ['FIGHTING', 'NORMAL'],
      'Has no effect on': ['NORMAL'],
    },
    'GRASS': {
      'Super effective against': ['GROUND', 'ROCK', 'WATER'],
      'Not very effective against': ['BUG', 'DRAGON', 'FIRE', 'FLYING', 'GRASS', 'POISON', 'STEEL'],
      'Weak against': ['BUG', 'FIRE', 'FLYING', 'ICE', 'POISON'],
      'Resists': ['ELECTRIC', 'GRASS', 'GROUND', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'GROUND': {
      'Super effective against': ['ELECTRIC', 'FIRE', 'POISON', 'ROCK', 'STEEL'],
      'Not very effective against': ['BUG', 'GRASS'],
      'Weak against': ['GRASS', 'ICE', 'WATER'],
      'Resists': ['POISON', 'ROCK'],
      'Immune to': ['ELECTRIC'],
      'Has no effect on': ['FLYING'],
    },
    'ICE': {
      'Super effective against': ['DRAGON', 'FLYING', 'GRASS', 'GROUND'],
      'Not very effective against': ['FIRE', 'ICE', 'STEEL', 'WATER'],
      'Weak against': ['FIGHTING', 'FIRE', 'ROCK', 'STEEL'],
      'Resists': ['ICE'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'NORMAL': {
      'Super effective against': [],
      'Not very effective against': ['ROCK', 'STEEL'],
      'Weak against': ['FIGHTING'],
      'Resists': [],
      'Immune to': ['GHOST'],
      'Has no effect on': ['GHOST'],
    },
    'POISON': {
      'Super effective against': ['GRASS'],
      'Not very effective against': ['GHOST', 'GROUND', 'POISON', 'ROCK'],
      'Weak against': ['GROUND', 'PSYCHIC'],
      'Resists': ['BUG', 'FIGHTING', 'GRASS', 'POISON'],
      'Immune to': [],
      'Has no effect on': ['STEEL'],
    },
    'PSYCHIC': {
      'Super effective against': ['FIGHTING', 'POISON'],
      'Not very effective against': ['PSYCHIC', 'STEEL'],
      'Weak against': ['BUG', 'DARK', 'GHOST'],
      'Resists': ['FIGHTING', 'PSYCHIC'],
      'Immune to': [],
      'Has no effect on': ['DARK'],
    },
    'ROCK': {
      'Super effective against': ['BUG', 'FIRE', 'FLYING', 'ICE'],
      'Not very effective against': ['FIGHTING', 'GROUND', 'STEEL'],
      'Weak against': ['FIGHTING', 'GRASS', 'GROUND', 'STEEL', 'WATER'],
      'Resists': ['FIRE', 'FLYING', 'NORMAL', 'POISON'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'STEEL': {
      'Super effective against': ['ICE', 'ROCK'],
      'Not very effective against': ['ELECTRIC', 'FIRE', 'STEEL', 'WATER'],
      'Weak against': ['FIGHTING', 'FIRE', 'GROUND'],
      'Resists': [
        'BUG',
        'DARK',
        'DRAGON',
        'FLYING',
        'GHOST',
        'GRASS',
        'ICE',
        'NORMAL',
        'PSYCHIC',
        'ROCK',
        'STEEL',
      ],
      'Immune to': ['POISON'],
      'Has no effect on': [],
    },
    'WATER': {
      'Super effective against': ['FIRE', 'GROUND', 'ROCK'],
      'Not very effective against': ['DRAGON', 'GRASS', 'WATER'],
      'Weak against': ['ELECTRIC', 'GRASS'],
      'Resists': ['FIRE', 'ICE', 'WATER', 'STEEL'],
      'Immune to': [],
      'Has no effect on': [],
    },
  },
  'Gen 6 - 8': {
    'BUG': {
      'Super effective against': ['DARK', 'GRASS', 'PSYCHIC'],
      'Not very effective against': [
        'FAIRY',
        'FIGHTING',
        'FIRE',
        'FLYING',
        'GHOST',
        'POISON',
        'STEEL',
      ],

      'Weak against': ['FIRE', 'FLYING', 'ROCK'],
      'Resists': ['FIGHTING', 'GRASS', 'GROUND'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'DARK': {
      'Super effective against': ['GHOST', 'PSYCHIC'],
      'Not very effective against': ['DARK', 'FAIRY', 'FIGHTING'],
      'Weak against': ['BUG', 'FAIRY', 'FIGHTING'],
      'Resists': ['DARK', 'GHOST'],
      'Immune to': ['PSYCHIC'],
      'Has no effect on': [],
    },
    'DRAGON': {
      'Super effective against': ['DRAGON'],
      'Not very effective against': ['STEEL'],
      'Weak against': ['DRAGON', 'FAIRY', 'ICE'],
      'Resists': ['ELECTRIC', 'FIRE', 'GRASS', 'WATER'],
      'Immune to': [],
      'Has no effect on': ['FAIRY'],
    },
    'ELECTRIC': {
      'Super effective against': ['FLYING', 'WATER'],
      'Not very effective against': ['DRAGON', 'ELECTRIC', 'GRASS'],
      'Weak against': ['GROUND'],
      'Resists': ['ELECTRIC', 'FLYING', 'STEEL'],
      'Immune to': [],
      'Has no effect on': ['GROUND'],
    },
    'FAIRY': {
      'Super effective against': ['DARK', 'DRAGON', 'FIGHTING'],
      'Not very effective against': ['FIRE', 'POISON', 'STEEL'],
      'Weak against': ['POISON', 'STEEL'],
      'Resists': ['BUG', 'DARK', 'FIGHTING'],
      'Immune to': ['DRAGON'],
      'Has no effect on': [],
    },
    'FIGHTING': {
      'Super effective against': ['DARK', 'ICE', 'NORMAL', 'ROCK', 'STEEL'],
      'Not very effective against': ['BUG', 'FAIRY', 'FLYING', 'POISON', 'PSYCHIC'],
      'Weak against': ['FAIRY', 'FLYING', 'PSYCHIC'],
      'Resists': ['BUG', 'DARK', 'ROCK'],
      'Immune to': [],
      'Has no effect on': ['GHOST'],
    },
    'FIRE': {
      'Super effective against': ['BUG', 'GRASS', 'ICE', 'STEEL'],
      'Not very effective against': ['DRAGON', 'FIRE', 'GROUND', 'WATER'],
      'Weak against': ['GROUND', 'ROCK', 'WATER'],
      'Resists': ['BUG', 'FAIRY', 'FIRE', 'GRASS', 'ICE', 'STEEL'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'FLYING': {
      'Super effective against': ['BUG', 'FIGHTING', 'GRASS'],
      'Not very effective against': ['ELECTRIC', 'ROCK'],
      'Weak against': ['ELECTRIC', 'ICE', 'ROCK'],
      'Resists': ['BUG', 'FIGHTING', 'GRASS'],
      'Immune to': ['GROUND'],
      'Has no effect on': [],
    },
    'GHOST': {
      'Super effective against': ['GHOST', 'PSYCHIC'],
      'Not very effective against': ['DARK'],
      'Weak against': ['DARK', 'GHOST'],
      'Resists': ['BUG', 'POISON'],
      'Immune to': ['FIGHTING', 'NORMAL'],
      'Has no effect on': ['NORMAL'],
    },
    'GRASS': {
      'Super effective against': ['GROUND', 'ROCK', 'WATER'],
      'Not very effective against': ['BUG', 'DRAGON', 'FIRE', 'FLYING', 'GRASS', 'POISON', 'STEEL'],
      'Weak against': ['BUG', 'FIRE', 'FLYING', 'ICE', 'POISON'],
      'Resists': ['ELECTRIC', 'GRASS', 'GROUND', 'WATER'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'GROUND': {
      'Super effective against': ['ELECTRIC', 'FIRE', 'POISON', 'ROCK', 'STEEL'],
      'Not very effective against': ['BUG', 'GRASS'],
      'Weak against': ['GRASS', 'ICE', 'WATER'],
      'Resists': ['POISON', 'ROCK'],
      'Immune to': ['ELECTRIC'],
      'Has no effect on': ['FLYING'],
    },
    'ICE': {
      'Super effective against': ['DRAGON', 'FLYING', 'GRASS', 'GROUND'],
      'Not very effective against': ['FIRE', 'ICE', 'STEEL', 'WATER'],
      'Weak against': ['FIGHTING', 'FIRE', 'ROCK', 'STEEL'],
      'Resists': ['ICE'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'NORMAL': {
      'Super effective against': [],
      'Not very effective against': ['ROCK', 'STEEL'],
      'Weak against': ['FIGHTING'],
      'Resists': [],
      'Immune to': ['GHOST'],
      'Has no effect on': ['GHOST'],
    },
    'POISON': {
      'Super effective against': ['FAIRY', 'GRASS'],
      'Not very effective against': ['GHOST', 'GROUND', 'POISON', 'ROCK'],
      'Weak against': ['GROUND', 'PSYCHIC'],
      'Resists': ['BUG', 'FAIRY', 'FIGHTING', 'GRASS', 'POISON'],
      'Immune to': [],
      'Has no effect on': ['STEEL'],
    },
    'PSYCHIC': {
      'Super effective against': ['FIGHTING', 'POISON'],
      'Not very effective against': ['PSYCHIC', 'STEEL'],
      'Weak against': ['BUG', 'DARK', 'GHOST'],
      'Resists': ['FIGHTING', 'PSYCHIC'],
      'Immune to': [],
      'Has no effect on': ['DARK'],
    },
    'ROCK': {
      'Super effective against': ['BUG', 'FIRE', 'FLYING', 'ICE'],
      'Not very effective against': ['FIGHTING', 'GROUND', 'STEEL'],
      'Weak against': ['FIGHTING', 'GRASS', 'GROUND', 'STEEL', 'WATER'],
      'Resists': ['FIRE', 'FLYING', 'NORMAL', 'POISON'],
      'Immune to': [],
      'Has no effect on': [],
    },
    'STEEL': {
      'Super effective against': ['FAIRY', 'ICE', 'ROCK'],
      'Not very effective against': ['ELECTRIC', 'FIRE', 'STEEL', 'WATER'],
      'Weak against': ['FIGHTING', 'FIRE', 'GROUND'],
      'Resists': [
        'BUG',
        'DRAGON',
        'FAIRY',
        'FLYING',
        'GRASS',
        'ICE',
        'NORMAL',
        'PSYCHIC',
        'ROCK',
        'STEEL',
      ],
      'Immune to': ['POISON'],
      'Has no effect on': [],
    },
    'WATER': {
      'Super effective against': ['FIRE', 'GROUND', 'ROCK'],
      'Not very effective against': ['DRAGON', 'GRASS', 'WATER'],
      'Weak against': ['ELECTRIC', 'GRASS'],
      'Resists': ['FIRE', 'ICE', 'WATER', 'STEEL'],
      'Immune to': [],
      'Has no effect on': [],
    },
  },
};

export default EFFECTIVENESS;
