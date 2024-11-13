import COR_ENC from './encounters/COR_ENC';
import LMPT_ENC from './encounters/LMPT_ENC';

type EncounterTable = {[key in string]: string[]}

const FILTERS: EncounterTable = {
  ...LMPT_ENC,
  ...COR_ENC
}

export default FILTERS;
