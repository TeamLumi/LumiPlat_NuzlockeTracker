import trainer_data from 'tasks/output/Trainer_output.json';

const ALL_ZONE_IDS: number[] = [];

for (const trainer of trainer_data["1"]) {
  const zoneId = trainer[0].zoneId;
  if (zoneId !== null && !ALL_ZONE_IDS.includes(zoneId)) {
    ALL_ZONE_IDS.push(zoneId);
  }
}

export default ALL_ZONE_IDS;
