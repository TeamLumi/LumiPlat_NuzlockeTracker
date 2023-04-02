import type { TDetail } from 'constants/types';
import data from 'tasks/output/Trainer_output.json'


const DETAILS: { [key: string]: TDetail[][] } = data as { [key: string]: TDetail[][] };

export default DETAILS;
