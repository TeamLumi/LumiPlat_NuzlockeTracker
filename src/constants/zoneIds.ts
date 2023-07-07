import trainer_data from './generated_files/Trainer_output.json';

const ALL_ZONE_IDS: number[][] = [];

for (const trainers of trainer_data["1"]) {
  const groupZoneIds: number[] = []; // Create a temporary array to store zoneIds within the current group
  for (const trainer of trainers) {
    const zoneId = trainer.zoneId;
    if (zoneId !== null && !groupZoneIds.includes(zoneId)) {
      groupZoneIds.push(zoneId);
    }
  }
  if (groupZoneIds.length > 0) {
    ALL_ZONE_IDS.push(groupZoneIds); // Push the group's zoneIds to the main array
  }
}
export default ALL_ZONE_IDS;
