import re
import json
import os
from pokemonUtils import get_ability_string, get_pokemon_name, get_form_name, get_item_string, get_pokemon_name_dictionary

def load_json_from_file(filepath):
    with open(filepath, "r") as f:
        return json.load(f)

# Get the repo file path for cleaner path generating
repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
input_file_path = os.path.join(repo_file_path, 'input')
POKEMON_NAMES = get_pokemon_name_dictionary()

def get_lumi_data(raw_data, callback):
    data = {}
    for (idx, _) in enumerate(raw_data["labelDataArray"]):
        data[str(idx)] = callback(idx)
    return data

"""
    Each monsno will have an array of all the Pokemon names and forms.
    Add the current index to the name of the first object in the list as the key
    Find out why the number is what it is
    Add the current value as the second value in the array
    Add the slugged current value as the third value in the array
"""
def create_diff_forms_dictionary(form_data):
    return
def load_data():
    data = {}
    files = {
        "raw_encounters": os.path.join(input_file_path, "FieldEncountTable_d.json"),
        "raw_trainer_data": os.path.join(input_file_path, "TrainerTable.json"),
        "raw_abilities": os.path.join(input_file_path, "english_ss_tokusei.json"),
        "raw_pokedex": os.path.join(input_file_path, "english_ss_monsname.json"),
        "diff_forms": os.path.join(input_file_path, "english_ss_zkn_form.json"),
        "raw_items": os.path.join(input_file_path, "english_ss_itemname.json"),
        "routes": "src/tasks/Resources/Routes.json",
        "gym_leaders": "src/tasks/Resources/NewGymLeaders.json",
        "honey_routes": "src/tasks/Resources/honeyroutes.json"
    }
    for name, filepath in files.items():
        data[name] = load_json_from_file(filepath)

    print(POKEMON_NAMES['3'])
    data["abilities"] = get_lumi_data(data["raw_abilities"], get_ability_string)
    data["pokedex"] = get_lumi_data(data["raw_pokedex"], get_pokemon_name)
    data["items"] = get_lumi_data(data["raw_items"], get_item_string)
    
    return data

def GetTrainerData():
    full_data = load_data()
    data, abilityList, pokedex, itemList, diff_forms, gymLeaderList = (
        full_data["raw_trainer_data"],
        full_data["abilities"],
        full_data["pokedex"],
        full_data["items"],
        full_data["diff_forms"],
        full_data["gym_leaders"]
    )
    gender = {"0": "MALE", "1": "FEMALE", "2": "NEUTRAL"}

    with open("src/tasks/output/Trainer_output.json", "w") as output:
        full_list = []
        for battle_type, battles in gymLeaderList.items():
            for gym_leaders in battles:
                for gym_leader, trainer_ids in gym_leaders.items():
                    trainers_list = []
                    for trainer_id in trainer_ids:
                        fights = {}
                        trainer = next((t for t in data["TrainerPoke"] if t["ID"] == trainer_id), None)
                        if trainer:
                            for poke_num in range(1,7):
                                level = trainer[f"P{poke_num}Level"]
                                if level > 0:
                                    form = trainer[f"P{poke_num}FormNo"]
                                    pokemon = {
                                        "ability": abilityList[str(trainer[f"P{poke_num}Tokusei"])],
                                        "gender": gender[str(trainer[f"P{poke_num}Sex"])] if trainer[f"P{poke_num}Sex"] != 3 else 'FEMALE',
                                        "id": diff_forms[pokedex[str(trainer[f"P{poke_num}MonsNo"])] + str(form)][0] if form > 0 else trainer[f"P{poke_num}MonsNo"],
                                        "item": itemList[str(trainer[f"P{poke_num}Item"])] if trainer[f"P{poke_num}Item"] != 0 else None,
                                        "level": level,
                                        "moves": [trainer[f"P{poke_num}Waza{j+1}"] for j in range(4)],
                                        "nature": trainer[f"P{poke_num}Seikaku"],
                                        "ivatk": trainer[f"P{poke_num}TalentAtk"],
                                        "ivdef": trainer[f"P{poke_num}TalentDef"],
                                        "ivhp": trainer[f"P{poke_num}TalentHp"],
                                        "ivspatk": trainer[f"P{poke_num}TalentSpAtk"],
                                        "ivspdef": trainer[f"P{poke_num}TalentSpDef"],
                                        "ivspeed": trainer[f"P{poke_num}TalentAgi"],
                                        "evhp": trainer[f"P{poke_num}EffortHp"],
                                        "evatk": trainer[f"P{poke_num}EffortAtk"],
                                        "evdef": trainer[f"P{poke_num}EffortDef"],
                                        "evspatk": trainer[f"P{poke_num}EffortSpAtk"],
                                        "evspdef": trainer[f"P{poke_num}EffortSpDef"],
                                        "evspeed": trainer[f"P{poke_num}EffortAgi"]
                                    }
                                    if gym_leader not in fights:
                                        fights[gym_leader] = [pokemon]
                                        fights["game"] = gym_leader + " Team " + str(trainer_ids.index(trainer_id) + 1)
                                        fights["name"] = gym_leader
                                        fights["type"] = battle_type
                                    else:
                                        fights[gym_leader].append(pokemon)
                        trainers_list.append(fights)
                    full_list.append(trainers_list)
        output.write(json.dumps(full_list))

def HoneyTreeData():
    const_regex = r"const\s+int32_t\s+HONEY_TREES\[\s*NUM_ZONE_ID\s*\]\[\s*10\s*\]\s*=\s*\{\s*([\s\S]*?)\};"
    array_regex = r"\[(.*?)\]\s*=\s*\{(.*?)\}"

    with open("Resources/UPDATE_THIS/honeywork.cpp", "r") as file, open("Resources/honeyroutes.json", "r") as honey:
        data = file.read()
        honey_routes = json.load(honey)

    # Extract honey trees data
    match = re.search(const_regex, data)
    if match:
        values_str = match.group(1)
        honey_trees = {}
        for line in values_str.split("\n"):
            line = line.strip()
            if not line:
                continue
            submatch = re.search(array_regex, line)
            if submatch:
                key = submatch.group(1)
                values = [v.strip() for v in submatch.group(2).split(",")]
                if "AMPHAROS" not in values:
                    honey_trees[honey_routes[key]] = values
    return(honey_trees)


def getEncounterData():
    full_data = load_data()
    data, pokedex, diff_forms, routeNames = (
        full_data["raw_encounters"],
        full_data["pokedex"],
        full_data["diff_forms"],
        full_data["routes"]
    )

    with open('src/tasks/output/Encounter_output.json', 'w') as output:
        routes = {}
        for area in data['table']:
            for key in area.keys():
                if type(area[key]) != int:
                    if type(area[key][0]) == dict:
                        for mon in area[key]:
                            if mon['monsNo'] < 2000 and mon['monsNo'] != 29 and mon['monsNo'] != 32:
                                if mon['monsNo'] != 0:
                                    for key1 in routeNames.keys():
                                        for route in routeNames[key1]:
                                            if str(area['zoneID']) == route:
                                                if str(key1) not in routes.keys():
                                                    routes[key1] = [pokedex[str(mon['monsNo'])]]
                                                else:
                                                    routes[key1].append(pokedex[str(mon['monsNo'])])
                                                    routes[key1] = list(set(routes[key1]))
                            elif mon['monsNo'] > 0:
                                for dexNum in pokedex.keys():
                                    formNo = int(mon['monsNo'])//(2**16)
                                    if (int(mon['monsNo']) - (formNo * (2**16))) == int(dexNum):
                                        for key1 in routeNames.keys():
                                            for route in routeNames[key1]:
                                                if str(area['zoneID']) == route:
                                                    if str(key1) not in routes.keys():
                                                        '''
                                                        Here's what this variable does:
                                                        Takes the Pokedex Number from the pokedex dictionary's keys ("19")
                                                        Returns the Pokemon Name associated with that key ("Rattta")
                                                        Adds the formNo ("1")
                                                        Uses the Pokemon Name + the formNo ("Rattata1")
                                                        Looks this key up in the diff_forms dictionary 
                                                        Returns that value ("Alolan Rattata")
                                                        '''

                                                        routes[key1] = [diff_forms[pokedex[str(dexNum)]+str(formNo)][1]]
                                                    else:
                                                        if dexNum == "29" or dexNum == "32": #This is specifically for the nidorans -_-
                                                            print(dexNum)
                                                            routes[key1].append(diff_forms[dexNum][2])
                                                            print(routes[key1])
                                                        else:
                                                            routes[key1].append(diff_forms[pokedex[str(dexNum)]+str(formNo)][1])
                                                            routes[key1] = list(set(routes[key1]))
                                    else:
                                        continue            
        ##This is for adding the Trophy Garden daily mons
        for mon in data['urayama']:
            routes['lmpt-39'].append(pokedex[str(mon['monsNo'])])

        ##This is for adding all of the Honey Tree encounters to the list
        honey_data = HoneyTreeData()
    
        for key in honey_data.keys():
            for mon in honey_data[key]:
                if str(key) not in routes.keys():
                    routes[key] = [mon.capitalize()]
                if mon.capitalize() not in routes[key]:
                    if mon == "FARFETCHD":
                        routes[key].append("Farfetch'd")
                    else:
                        routes[key].append(mon.capitalize())

        my_keys = list(routes.keys())
        my_keys.sort(key = lambda x: int(x.split('-')[1]))
        sorted_routes = {i: routes[i] for i in my_keys}
        output.write(json.dumps(sorted_routes))

getEncounterData()
GetTrainerData()