import type {
  TBadgeDictionary,
  TBadgeImages,
  TLevelCapDictionary,
  TLevelCaps,
} from 'constants/types';
import champion from 'assets/img/badges/champion.png';
import coal from 'assets/img/badges/coal.png';
import cobble from 'assets/img/badges/cobble.png';
import fen from 'assets/img/badges/fen.png';
import forest from 'assets/img/badges/forest.png';
import icicle from 'assets/img/badges/icicle.png';
import mine from 'assets/img/badges/mine.png';
import relic from 'assets/img/badges/relic.png';

const BADGES: TBadgeDictionary = {
  '1': [
    {
      id: 1,
      levelCap: 16,
      name: 'Coal Badge',
    },
    {
      id: 2,
      levelCap: 26,
      name: 'Forest Badge',
    },
    {
      id: 3,
      levelCap: 33,
      name: 'Relic Badge',
    },
    {
      id: 4,
      levelCap: 39,
      name: 'Cobble Badge',
    },
    {
      id: 5,
      levelCap: 44,
      name: 'Fen Badge',
    },
    {
      id: 6,
      levelCap: 53,
      name: 'Mine Badge',
    },
    {
      id: 7,
      levelCap: 56,
      name: 'Icicle Badge',
    },
    {
      id: 8,
      levelCap: 62,
      name: 'Beacon Badge',
    },
    {
      id: 9,
      levelCap: 78,
      name: 'Elite 4',
    },
  ],
};

export const GAME_CAP_DICTIONARY: TLevelCapDictionary = {
  'LMPT': ['16', '26', '33', '39', '44', '53', '56', '62', '78'],
};

export const LEVEL_CAPS: TLevelCaps = {
  '1': [
    {
      key: 'Luminescent Platinum',
      text: 'Luminescent Platinum',
      value: 'LMPT',
    },
  ],
};

export const BADGE_IMAGES: TBadgeImages = {
  '1': [
    {
      src: coal,
    },
    {
      src: forest,
    },
    {
      src: relic,
    },
    {
      src: cobble,
    },
    {
      src: fen,
    },
    {
      src: mine,
    },
    {
      src: icicle,
    },
    {
      src: beacon,
    },
    {
      src: champion,
    },
  ],
};

export default BADGES;
