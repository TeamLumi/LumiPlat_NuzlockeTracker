import os
import json
from convert_lmpt_data import load_data, load_json_from_file

parent_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
trainers_file_path = os.path.join(parent_file_path, 'input', 'english_dp_trainers_name.json')
map_info_file_path = os.path.join(parent_file_path, 'input', 'MapInfo.json')
area_name_file_path = os.path.join(parent_file_path, 'input', 'english_dp_fld_areaname.json')
area_display_file_path = os.path.join(parent_file_path, 'input', 'english_dp_fld_areaname_display.json')
areas_file_path = os.path.join(parent_file_path, 'input', 'areas.csv')
bdsp_location_files_path = os.path.join(parent_file_path, 'placedatas')
trainer_labels_file_path = os.path.join(parent_file_path, 'input', 'english_dp_trainers_type.json')
bdsp_location_files = os.listdir(bdsp_location_files_path)
input_file_path = os.path.join(parent_file_path, 'input')
output_file_path =os.path.join(parent_file_path, "src", "tasks", "output")
trainer_labels = 0
trainer_names = 0
areas = 0

with open(trainer_labels_file_path, mode='r', encoding="utf-8") as f:
    trainer_labels = json.load(f)

with open(trainers_file_path, mode='r', encoding="utf-8") as f:
    trainer_names = json.load(f)

with open(map_info_file_path, mode='r', encoding="utf-8") as f:
    map_info = json.load(f)

with open(area_display_file_path, mode='r', encoding="utf-8") as f:
    area_display_names = json.load(f)

with open(area_name_file_path, mode='r', encoding="utf-8") as f:
    area_names = json.load(f)

def get_trainer_name(label_name):
    label_data_array = trainer_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_trainer_label(label_name):
    label_data_array = trainer_labels['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None
    
def get_area_name(label_name):
    label_data_array = area_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_area_display_name(label_name):
    label_data_array = area_display_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_map_info(label_name):
    zone_data = map_info['ZoneData']
    match = next((e for e in zone_data if e['ZoneID'] == label_name), None)
    return get_area_display_name(match['MSLabel']) if match and len(match['MSLabel']) > 0 else get_area_name(match['PokePlaceName'])

def get_trainer_data_from_place_datas():
    full_data = load_data()
    full_routes, name_routes, trainer_ids, TRAINER_TABLE = (
        full_data["routes"],
        full_data["name_routes"],
        full_data["trainer_ids"],
        full_data["raw_trainer_data"]
    )    
    trainers = []
    bad_data = {}
    for bdsp_location_file in bdsp_location_files:
        with open(os.path.join(parent_file_path, 'placedatas', bdsp_location_file), 'r') as f:
            data = json.load(f)
        for event in data['Data']:
            if event['TrainerID'] > 0 and event['TrainerID'] < 10000 and event['zoneID'] != -1:
                trainer_data = TRAINER_TABLE['TrainerData'][event['TrainerID']]
                trainer_type = TRAINER_TABLE['TrainerType'][trainer_data['TypeID']]
                trainer_label = get_trainer_label(trainer_type['LabelTrType'])
                trainer_name = get_trainer_name(trainer_data['NameLabel'])
                zoneName = get_map_info(event['zoneID'])
                for name, route in name_routes.items():
                    if zoneName in route:
                        zoneName = name
                if zoneName == "Galactic HQ":
                    zoneName = "lmpt-33"
                    
                trainers.append({
                    'zoneName': zoneName,
                    'zoneId': int(event['zoneID']),
                    'trainerId': event['TrainerID'],
                    'rematch': 0,
                    'name': trainer_name,
                    'type': trainer_label
                })
    with open(os.path.join(output_file_path, "trainer_info.json"), "w", encoding="utf-8") as output:
        json.dump(trainers, output, ensure_ascii=False)
    return trainers

def generate_trainer_name(raw_trainer_name, pokemon1_level):
    level = int(pokemon1_level)
    if level is None:
        return None

    i1 = raw_trainer_name.find('[')
    i2 = raw_trainer_name.find(']')

    bad_section = raw_trainer_name[i1:i2+1]
    is_boss_trainer = ('City' in bad_section or 'League' in bad_section)
    if not is_boss_trainer or 'Master' in raw_trainer_name:
        return raw_trainer_name

    trainer_substring = raw_trainer_name[:i1-1] + raw_trainer_name[i2+1:]
    if level == 100:
        return trainer_substring + ' Rematch'
    return trainer_substring

    
get_trainer_data_from_place_datas()
