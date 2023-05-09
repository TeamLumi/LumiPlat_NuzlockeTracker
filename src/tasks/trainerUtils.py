import os
import json
import re
from operator import itemgetter

repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
parent_file_path = os.path.abspath(os.path.dirname(__file__))
input_file_path = os.path.join(repo_file_path, 'input')
output_file_path =os.path.join(parent_file_path, "output")
resources_file_path = os.path.join(parent_file_path, "Resources")
name_routes_file_path = os.path.join(resources_file_path, "NameRoutes.json")

trainers_file_path = os.path.join(input_file_path, 'english_dp_trainers_name.json')
map_info_file_path = os.path.join(input_file_path, 'MapInfo.json')
area_name_file_path = os.path.join(input_file_path, 'english_dp_fld_areaname.json')
area_display_file_path = os.path.join(input_file_path, 'english_dp_fld_areaname_display.json')
trainer_labels_file_path = os.path.join(input_file_path, 'english_dp_trainers_type.json')
trainer_table_file_path = os.path.join(input_file_path, "TrainerTable.json")

areas_file_path = os.path.join(input_file_path, 'areas.csv')

scripts_file_path = os.path.join(repo_file_path, 'scripts')
bdsp_location_files_path = os.path.join(repo_file_path, 'placedatas')
bdsp_location_files = os.listdir(bdsp_location_files_path)

trainer_labels = 0
trainer_names = 0
areas = 0

ldval_pattern = r"_LDVAL\(@(.*),\s?([1-9][0-9]*)\)"
trainer_pattern = r"_TRAINER_BTL_SET\s*\(\s*('?[^']+'?|@\w+|\d+)\s*,\s*('?[^']+'?|@\w+|\d+)\s*\)"
multi_trainer_pattern = r"_TRAINER_MULTI_BTL_SET\s*\(\s*((?:'[^']*'|@\w+|\d+)\s*(?:,\s*(?:'[^']*'|@\w+|\d+)\s*)*)\)"

TRAINER_BATTLE = '_TRAINER_BTL_SET'
MULTI_TRAINER_BATTLE = '_TRAINER_MULTI_BTL_SET'
GYM_AREA_NAME = "GYM"
E4_AREA_NAME = "C10"
ROOM_AREA_NAME = "R0101"
SINGLE_FORMAT = "Single"
DOUBLE_FORMAT = "Double"
GALACTIC_HQ = "Galactic HQ"
GALACTIC_HQ_TRACKER_VAR = "lmpt-33"
STARTERS = ["piplup", "turtwig", "chimchar"]
MASTER_TRAINER_TYPES = ["fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]
CELEBI = "Celebi"
PLACE_DATA_METHOD = "Place Data"
SCRIPTED_METHOD = "Scripted"
MULTI_FORMAT = "Multi"
EVIL_TYPE = "Evil"
MALE = "male"
FEMALE = "female"
MASTER_TRAINER = "Master"
BAD_SUPPORT_LOOKUP1 = "ev_r207_func_17" ### These bad lookups are for Lucas and Dawn on Route 207
BAD_SUPPORT_LOOKUP2 = "ev_r207_func_20"
SUPPORT_LINK = "Support"
LDVAL_LOOKUP = "LDVAL"
MASTER_TRAINER_LOOKUP = "_LDVAL(@SCWK_PARAM1"
CELEBI_LOOKUP = "_LDVAL(@CON_TEMP05"
EVIL_LOOKUP = "LDVAL(@SCWK_TEMP"
REMATCH_SUBSTRING = "rematch"
DESIRED_ORDER = [ 'areaName', 'zoneName', 'zoneId', 'trainerId', 'rematch', 'name', 'type', 'method', 'format', 'link' ]
STARTER = ["piplup", "turtwig", "chimchar"]
BARRY = "barry"

class UnsupportedTrainer(Exception):
    pass

class InvalidArg(Exception):
    pass

class MissingData(Exception):
    pass

class MultiTrainerError(Exception):
    pass

class SupportTrainerError(Exception):
    pass

with open(areas_file_path, encoding="utf-8") as f:
    areas = [line.strip().split(',') for line in f.readlines()]

with open(trainer_table_file_path, mode='r', encoding="utf-8") as f:
    TRAINER_TABLE = json.load(f)

with open(name_routes_file_path, mode='r', encoding="utf-8") as f:
    name_routes = json.load(f)

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

def get_trainer_id_from_partial(label_name):
    label_data_array = trainer_names['labelDataArray']
    for e in label_data_array:
        if e['labelName'].endswith(str(label_name.strip("'"))):
            return e['labelIndex']
    return None

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
    trainers = []
    for bdsp_location_file in bdsp_location_files:
        with open(os.path.join(repo_file_path, 'placedatas', bdsp_location_file), 'r') as f:
            data = json.load(f)
        for event in data['Data']:
            trainerID = event['TrainerID']
            zoneID = event['zoneID']
            if trainerID > 0 and trainerID < 10000 and zoneID != -1:
                trainer = diff_trainer_data(event, None, None)
                trainers.append(trainer)
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

def get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, lookup, team_num):
    trainers = []

    def add_trainers(zoneID, trainer_ids, team_types=None):
        for trainer_id, team_type in zip(trainer_ids, team_types or []):
            trainer = get_single_trainer(zoneID, trainer_id, trainer_ids, team_type)
            trainers.append(trainer)
        return trainers

    if MASTER_TRAINER == lookup:
        temp_master_IDs = parse_randomized_teams(file_path, "", len(team_num), lookup)
        add_trainers(zoneID, temp_master_IDs, team_num)
        return trainers

    elif CELEBI == lookup:
        temp_celebi_IDs = parse_randomized_teams(file_path, "", team_num, lookup)
        add_trainers(zoneID, temp_celebi_IDs, [lookup] * len(temp_celebi_IDs))
        return trainers
        
    else:
        if BARRY in lookup:
            temp_trainer_IDs = parse_randomized_teams(file_path, lookup, team_num, None)
            for ID in temp_trainer_IDs:
                team_type = lookup.split("_")[-1].strip('"')
                trainer = get_single_trainer(zoneID, ID, temp_trainer_IDs, team_type)
                trainers.append(trainer)
            return trainers
        temp_trainer_IDs = parse_randomized_teams(file_path, lookup, team_num, None)
        add_trainers(zoneID, temp_trainer_IDs)
        for ID in temp_trainer_IDs:
            trainer = get_single_trainer(zoneID, ID, temp_trainer_IDs, None)
            trainers.append(trainer)
        return trainers

def get_assorted_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args):
    count_keeper = []
    trainers = []
    cyrus_lookup = f"ev_{areaName.lower()}_randomteam_cyrus"
    for starter in STARTER:
        rival_lookup = f"ev_{areaName.lower()}_randomteam_barry_{starter}"
        rival_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, rival_lookup, 4)
        trainers.extend(rival_teams)
    if rival_teams:
        return trainers
    if count_keeper == []:
        cyrus_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, cyrus_lookup, 4)
        if cyrus_teams:
            trainers.extend(cyrus_teams)
            return trainers
    if count_keeper == []:
        master_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, MASTER_TRAINER, MASTER_TRAINER_TYPES)
        if master_teams:
            trainers.extend(master_teams)
            return trainers
    if count_keeper == []:
        celebi_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, CELEBI, 7)
        if celebi_teams:
            trainers.extend(celebi_teams)
            return trainers
    if count_keeper == []:
        print("Lucas and Dawn's Single Battles are not yet supported:", areaName, args)
        return trainers

def get_single_trainer(zoneID, ID, temp_IDs, name):
    trainer = diff_trainer_data(None, zoneID, int(ID))
    if name in STARTERS:
        # This is for Rival Battles for right now, it may have Lucas/Dawn battles eventually?
        trainer["name"] = f"{trainer['name']} {name.capitalize()} Team {str(temp_IDs.index(ID) + 1)}"
        trainer['method'] = SCRIPTED_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer
    elif name in MASTER_TRAINER_TYPES:
        trainer["name"] = f"{name.capitalize()} Master Trainer {trainer['name']}"
        trainer['method'] = SCRIPTED_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer
    elif name == CELEBI:
        trainer['method'] = SCRIPTED_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer
    elif len(temp_IDs) > 1:
        trainer["name"] = f"{trainer['name']} Team {str(temp_IDs.index(ID) + 1)}"
        trainer['method'] = SCRIPTED_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer

    trainer["name"] = f"{trainer['name']}"
    trainer["format"] = SINGLE_FORMAT
    trainer["link"] = ""
    
    return trainer

def get_trainer_data(zoneID, trainerID, method):
    trainer_data = TRAINER_TABLE['TrainerData'][trainerID]
    trainer_type = TRAINER_TABLE['TrainerType'][trainer_data['TypeID']]
    trainer_label = get_trainer_label(trainer_type['LabelTrType'])
    if not trainer_label:
        print("This trainer doesn't have a label in game:", trainer_type['LabelTrType'], trainerID)        
    trainer_name = get_trainer_name(trainer_data['NameLabel'])
    if not trainer_name:
        trainer_name = trainer_data['NameLabel'].split("_")[-1].capitalize()
        print("This trainer doesn't have a name in game:", trainer_data['NameLabel'], trainerID)
    areaName = get_map_info(zoneID)
    zones = areas[zoneID + 1]
    zoneName = zones[3] if zones[3] != '' else zones[4]
    if zoneName == '':
        zoneName = areaName
    for name, route in name_routes.items():
        if areaName in route:
            areaName = name
    if areaName == GALACTIC_HQ:
        areaName = GALACTIC_HQ_TRACKER_VAR
    trainer = {
        'areaName': areaName,
        'zoneName': zoneName,
        'zoneId': int(zoneID),
        'trainerId': trainerID,
        'rematch': 0,
        'name': trainer_name,
        'type': trainer_label,
        'method': "",
        'format': "",
        'link': ""
    }
    return trainer

def parse_randomized_teams(file_path, lookup, count, type):
    '''
    count will be how many trainers are expected to be found
    lookup will be the randomteam that you are trying to find.
    it will always be in this format: ev_{LOCATION}_randomteam_{NAME of trainer} with optional _{STARTER Name} then _rematch
    i.e.:
    ev_c03gym0101_randomteam_roark
    ev_c03gym0101_randomteam_roark_rematch
    ev_c02_randomteam_barry_turtwig
    ev_c02_randomteam_barry_turtwig_rematch
    '''
    regex_lookup_dict = {
        MASTER_TRAINER: MASTER_TRAINER_LOOKUP,
        CELEBI: CELEBI_LOOKUP,
        EVIL_TYPE: EVIL_LOOKUP,
        None: LDVAL_LOOKUP,
    }
    regex_lookup = regex_lookup_dict.get(type)
    trainers = []
    found_lookup = False
    with open(file_path, 'r', encoding="utf-8") as f:
        for line in f:
            substrings = line.split('\n')
            for substring in substrings:
                if found_lookup and regex_lookup in substring:
                    match = re.split(ldval_pattern, substring)[2]
                    if match:
                        trainer_id = match.strip("'")
                        trainers.append(trainer_id)
                        if len(trainers) == count:
                            return trainers
                elif not found_lookup and substring.startswith(lookup) and REMATCH_SUBSTRING not in substring:
                    found_lookup = True
    return trainers

def get_support_trainers_data(file_path, area_name, support_name, zoneID):
    """
    The purpose of this function is to get the support trainers data for Multi Battles
    """
    def get_bad_support_IDs(support_name, file_path):
        '''
        The point of this is to have at least SOME Lucas/Dawn Battles rather than none
        Can probably be deleted and/or replaced after Scripting changes
        '''
        for support in [support_name]:
            if support == MALE:
                temp_support_IDs = parse_randomized_teams(file_path, BAD_SUPPORT_LOOKUP1, 3, None)
                return temp_support_IDs
            temp_support_IDs = parse_randomized_teams(file_path, BAD_SUPPORT_LOOKUP2, 3, None)
            return temp_support_IDs

    trainers = []
    temp_support_IDs = []
    rival_multi_lookup = f"{area_name.lower()}_rival_support"

    for support in [support_name]:
        current_support_lookup = f"{area_name.lower()}_{support}_100" ### This is for Lucas and Dawn in C01 and C07. Is this the most optimal? Maybe?
        temp_support_IDs = parse_randomized_teams(file_path, current_support_lookup, 3, None)
    if temp_support_IDs == [] and support_name != None:
        temp_support_IDs = get_bad_support_IDs(support_name, file_path)
    if temp_support_IDs == []:
        temp_support_IDs = parse_randomized_teams(file_path, rival_multi_lookup, 3, None)
    if temp_support_IDs == []:
        print("Support Trainers still needs more work", area_name, zoneID)
        raise SupportTrainerError
    for ID in temp_support_IDs:
        trainer = get_trainer_data(zoneID, int(ID), SCRIPTED_METHOD)
        trainer["method"] = SCRIPTED_METHOD
        trainer["format"] = MULTI_FORMAT
        trainer["link"] = SUPPORT_LINK
        trainers.append(trainer)
    return trainers

def diff_trainer_data(event, zoneID, trainerID):
    '''
    The event variable is for the place_datas function
    The zoneID and trainerID is for the ev_script function
    Make sure that when you call one or the other that the opposite variable(s) is(are) None
    i.e: diff_trainer_data(event, None, None) or diff_trainer_data(None, zoneID, trainerID)
    '''
    trainer = {}
    if event is not None:
        zoneID = int(event['zoneID'])
        trainerID = int(event['TrainerID'])
        trainer = get_trainer_data(zoneID, trainerID, PLACE_DATA_METHOD)
        trainer['method'] = PLACE_DATA_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer
    else:
        trainer = get_trainer_data(zoneID, trainerID, SCRIPTED_METHOD)
        trainer['method'] = SCRIPTED_METHOD
        return trainer

def get_multi_trainers(trainerID1, trainerID2, zoneID, format):
    '''
    format can either be "Multi" or "Double" depending on which you choose
    '''
    trainers = []
    trainerID2_used = False

    for trainerID in [trainerID1, trainerID2]:
        trainer = diff_trainer_data(None, zoneID, int(trainerID))
        trainer["format"] = format
        if trainerID2_used == False or not trainerID2:
            trainer["link"] = trainerID2
            trainerID2_used = True
        else:
            trainer["link"] = trainerID1
        trainers.append(trainer)
    return trainers

def get_named_trainer_data(zoneID, trainerID1, trainerID2, args):

    trainers = []
    if len(trainerID2) > 0:
        ### This code is not being called at all.
        ### This either means that there is currently no double trainer battles with the named variables
        ### OR I'm missing it somewhere earlier down the line
        temp_trainerID1 = get_trainer_id_from_partial(trainerID1)
        temp_trainerID2 = get_trainer_id_from_partial(trainerID2)
        trainer1, trainer2 = get_multi_trainers(temp_trainerID1, temp_trainerID2, zoneID, DOUBLE_FORMAT)
        trainers.append(trainer1)
        trainers.append(trainer2)
        return trainers

    temp_trainerID1 = get_trainer_id_from_partial(trainerID1)
    trainer = diff_trainer_data(None, zoneID, int(temp_trainerID1))
    trainer["format"] = SINGLE_FORMAT
    trainer["link"] = ""
    trainers.append(trainer)
    if trainers == []:
        print("There's something wrong with the Named Trainer Data!!")
    return trainers

def get_multi_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, trainerID3, substring):

    def get_multi_support_trainers(file_path, areaName, zoneID):
        return [
            *get_support_trainers_data(file_path, areaName, MALE, zoneID),
            *get_support_trainers_data(file_path, areaName, FEMALE, zoneID),
        ]

    trainers = []

    if trainerID3.isnumeric():
        trainer2, trainer3 = get_multi_trainers(trainerID2, trainerID3, zoneID, MULTI_FORMAT)
        trainers.extend([
            trainer2,
            trainer3,
            *get_multi_support_trainers(file_path, areaName, zoneID),
        ])
        return trainers
    elif trainerID3[0] == "@":

        trainers.extend(get_multi_support_trainers(file_path, areaName, zoneID))
        team_galactic_lookup = f"pos_{areaName.lower()}_gingakanbu"

        temp_enemy_IDs = parse_randomized_teams(file_path, team_galactic_lookup, 2, EVIL_TYPE)
        if temp_enemy_IDs:
            trainerID2 = temp_enemy_IDs[0]
            trainerID3 = temp_enemy_IDs[1]
            trainer2, trainer3 = get_multi_trainers(trainerID2, trainerID3, zoneID, MULTI_FORMAT)
            trainers.append(trainer2)
            trainers.append(trainer3)
            return trainers
        else:
            print("Unable to find Multi Trainer (variable) opponent teams", areaName, substring)
            raise MultiTrainerError
    else:
        print("Unable to get enough trainers for Multi Trainers here:", areaName, substring)
        raise MultiTrainerError

def get_temp_var_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args):

    trainers = []
    gym_leader_lookup = f"ev_{areaName.lower()}_randomteam"
    if GYM_AREA_NAME in areaName:
        gym_leaders = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, gym_leader_lookup, 4)
        trainers.extend(gym_leaders)
        return trainers
    elif E4_AREA_NAME in areaName and ROOM_AREA_NAME not in areaName:
        e4_trainers = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, gym_leader_lookup, 4)
        trainers.extend(e4_trainers)
        return trainers
    assorted_trainers = get_assorted_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args)
    trainers.extend(assorted_trainers)
    return trainers

def get_standard_trainer_data(trainerID1, trainerID2, zoneID):

    trainers = []
    if trainerID2.isnumeric():
        trainer1, trainer2 = get_multi_trainers(trainerID1, trainerID2, zoneID, DOUBLE_FORMAT)
        trainers.append(trainer1)
        trainers.append(trainer2)
        return trainers
    trainer = diff_trainer_data(None, zoneID, int(trainerID1))
    trainer["format"] = SINGLE_FORMAT
    trainer["link"] = ""
    trainers.append(trainer)
    return trainers

def get_all_trainer_data(file_path, areaName, zoneID, args, substring):

    trainers = []
    trainerID1 = args[0]
    trainerID2, trainerID3 = "", ""
    if len(args) >= 2:
        trainerID2 = args[1].strip()
    if len(args) > 2:
        trainerID3 = args[2].strip()

    ### Multi trainer data here
    if len(trainerID3) > 0:
        trainers.extend(get_multi_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, trainerID3, substring))
        return trainers

    # This second section is for if the trainerID is bog standard just calling a number from the TTable
    elif trainerID1.isnumeric():
        trainers.extend(get_standard_trainer_data(trainerID1, trainerID2, zoneID))
        return trainers
    # This next section is for the temp variables that are called like @SCWK_TEMP3
    elif trainerID1[0] == "@":
        trainers.extend(get_temp_var_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args))
        return trainers
    # This last section is for the trainers that are called by name in the scripts like BATTLEG_01 or something like that.
    elif not trainerID1.isnumeric():
        trainers.extend(get_named_trainer_data(zoneID, trainerID1, trainerID2, args))
        return trainers
    else:
        print("There is Missing Data here:", areaName, trainerID1, trainerID2)
        raise MissingData

def parse_trainer_btl_set(substring):
    match = re.search(trainer_pattern, substring)
    match2 = re.split(multi_trainer_pattern, substring)
    if match:
        arg1, arg2 = match.groups()
        if len(arg2) > 1:
            args = [arg1.strip("'"), arg2.strip("'")]
            return args
        return[arg1]
    elif "MORIMOTO" in substring:
        return ['MORIMOTO_01']
    elif match2:
        print(match2)
        arg1 = match2[1].split(",")[0].strip("'")
        arg2 = match2[1].split(",")[1].strip("'")
        arg3 = match2[1].split(",")[2].strip("'")
        args = [arg1, arg2, arg3]
        return args
    else:
        return substring

def parse_ev_script_file(file_path):
    """
    The purpose of this function is to parse a text file and find every instance of the substring _TRAINER_BTL_SET or _TRAINER_MULTI_BTL_SET.
    """

    def get_zoneID(areaName):
        for places in areas:
            if areaName in places:
                zoneID = int(areas.index(places) - 1)
                return zoneID

    trainers = []

    with open(file_path, 'r', encoding="utf-8") as f:
        for line in f:
            substrings = line.split('\n')
            for substring in substrings:
                areaName = file_path.split("/")[-1].split(".")[0].upper()
                zoneID = get_zoneID(areaName)
                if areaName == "SODATEYA":
                    zoneID = 446
                
                if TRAINER_BATTLE in substring or MULTI_TRAINER_BATTLE in substring:
                    args = parse_trainer_btl_set(substring.strip())
                else:
                    continue

                if zoneID is None or zoneID < 0:
                    print("The trainers in this area are currently not supported:", zoneID, areaName, args[0])
                    raise UnsupportedTrainer

                if substring in args:
                    print("There is something wrong with the args from this area", zoneID, areaName, args[0])
                    raise InvalidArg

                trainers.extend(get_all_trainer_data(file_path, areaName, zoneID, args, substring))
                
    return trainers

def process_files(folder_path, callback):
    """
    Calls the provided callback function on every file in the specified folder.
    
    :param folder_path: The path to the folder containing the files to be processed.
    :param callback: A function that takes a file path as its only argument and performs some action on it.
    """
    trainers_list = []
    trainers = []
    trainers_set = set()
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        try:
            trainers = callback(file_path)
        except (FileNotFoundError, IsADirectoryError):
            print(f"{file_path} is not a valid file path or does not exist")
            return
        except (MissingData, SupportTrainerError):
            return
        except UnsupportedTrainer:
            continue
        trainers_set.update([frozenset(d.items()) for d in trainers])
    trainers_list = [dict(s) for s in trainers_set]

    trainer_data = get_trainer_data_from_place_datas()
    for battle in trainers_list:
        ordered_battle = {key: battle[key] for key in DESIRED_ORDER}
        trainer_data.append(ordered_battle)
    sorted_data = sorted(trainer_data, key=itemgetter('zoneId', 'trainerId'))
    with open(os.path.join(output_file_path, 'trainer_info.json'), 'w', encoding='utf-8') as f:
        json.dump(sorted_data, f)
    return sorted_data
