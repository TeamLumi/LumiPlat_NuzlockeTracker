import re
import json
import os
import csv
import unicodedata
from pokemonUtils import get_ability_string, get_pokemon_name, get_form_name, get_item_string, get_pokemon_name_dictionary, get_pokemon_info, get_nature_name, GenForms, get_form_pokemon_personal_id, create_diff_forms_dictionary, isSpecialPokemon, get_pokemon_from_trainer_info

# Get the repo file path for cleaner path generating
repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
input_file_path = os.path.join(repo_file_path, 'input')
resources_filepath = os.path.join(repo_file_path, "src", "tasks", "Resources")
honeywork_cpp_filepath = os.path.join(input_file_path, "honeywork.cpp")
honeyroutes_filepath = os.path.join(repo_file_path, "src", "tasks", "Resources", "honeyroutes.json")
output_file_path = os.path.join(repo_file_path, "src", "tasks", "output")
gym_leader_file_path = os.path.join(resources_filepath, "NewGymLeaders.json")
POKEMON_NAMES = get_pokemon_name_dictionary()
bad_encounters = []

with open(gym_leader_file_path, mode='r', encoding="utf-8") as f:
    gym_leader_data = json.load(f)

def get_lumi_data(raw_data, callback):
    data = {}
    for (idx, _) in enumerate(raw_data["labelDataArray"]):
        data[str(idx)] = callback(idx)
    return data

def getTrainerIdsFromDocumentation():
    doc_filepath = os.path.join(input_file_path, "docs.csv")
    trainer_IDs = []
    with open(doc_filepath, "r")as doc_csv:
        csvreader = csv.reader(doc_csv)
        for row in csvreader:
            if row[0].isdigit():
                trainer_IDs.append(int(row[0]))
        return trainer_IDs

def load_json_from_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def load_data():
    data = {}
    files = {
        "raw_encounters": os.path.join(input_file_path, "FieldEncountTable_d.json"),
        "raw_trainer_data": os.path.join(input_file_path, "TrainerTable.json"),
        "raw_abilities": os.path.join(input_file_path, "english_ss_tokusei.json"),
        "raw_pokedex": os.path.join(input_file_path, "english_ss_monsname.json"),
        "raw_items": os.path.join(input_file_path, "english_ss_itemname.json"),
        "routes": os.path.join(resources_filepath, "Routes.json"),
        "name_routes": os.path.join(resources_filepath, "NameRoutes.json"),
        "honey_routes": os.path.join(resources_filepath, "honeyroutes.json"),
        "trainer_names": os.path.join(input_file_path, 'english_dp_trainers_name.json'),
        "trainer_labels": os.path.join(input_file_path, 'english_dp_trainers_type.json')

    }
    for name, filepath in files.items():
        data[name] = load_json_from_file(filepath)

    data["abilities"] = get_lumi_data(data["raw_abilities"], get_ability_string)
    data["pokedex"] = get_lumi_data(data["raw_pokedex"], get_pokemon_name)
    data["items"] = get_lumi_data(data["raw_items"], get_item_string)
    data["diff_forms"] = create_diff_forms_dictionary(POKEMON_NAMES)
    data["trainer_ids"] = getTrainerIdsFromDocumentation()

    return data

def getTrainerData(gymLeaderList):
    full_data = load_data()
    trainer_data, abilityList, pokedex, itemList, diff_forms = (
        full_data["raw_trainer_data"],
        full_data["abilities"],
        full_data["pokedex"],
        full_data["items"],
        full_data["diff_forms"]
    )
    gender = {"0": "MALE", "1": "FEMALE", "2": "NEUTRAL"}

    dic = {}
    full_list = []
    for battle_type, battles in gymLeaderList.items():
        for gym_leaders in battles:
            for gym_leader, trainer_ids in gym_leaders.items():
                trainers_list = []
                for trainer_id in trainer_ids:
                    fights = {}
                    trainer = next((t for t in trainer_data["TrainerPoke"] if t["ID"] == trainer_id), None)
                    output_format = "Tracker"
                    if trainer:
                        pokemon_list = get_pokemon_from_trainer_info(trainer, output_format)
                        fights["content"] = pokemon_list
                        fights["game"] = f"{gym_leader} Team {str(trainer_ids.index(trainer_id) + 1)}"
                        fights["name"] = gym_leader.split("(")[0].strip()
                        fights["type"] = battle_type
                        fights["route"] = f'{gym_leader.split("(")[1].strip(")")} Gym Leader' if len(gym_leader.split("(")) > 1 else "Elite Four Trainers"
                        fights["zoneId"] = None
                    trainers_list.append(fights)
                full_list.append(trainers_list)
    dic['1'] = full_list
    return dic

def HoneyTreeData():
    const_regex = r"const\s+int32_t\s+HONEY_TREES\[\s*NUM_ZONE_ID\s*\]\[\s*10\s*\]\s*=\s*\{\s*([\s\S]*?)\};"
    array_regex = r"\[(.*?)\]\s*=\s*\{(.*?)\}"

    with open(honeywork_cpp_filepath, "r") as file, open(honeyroutes_filepath, "r") as honey:
        honey_data = file.read()
        honey_routes = json.load(honey)

    # Extract honey trees data
    match = re.search(const_regex, honey_data)
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

def bad_encounter_data(pkmn_name, routeName, route):
    print('BAD ENCOUNTER', pkmn_name, routeName, route)
    bad_encounters.append({pkmn_name, routeName, route})
    return

def getEncounterData():
    full_data = load_data()
    encounter_data, pokedex, routeNames, diff_forms, name_routes = (
        full_data["raw_encounters"],
        full_data["pokedex"],
        full_data["routes"],
        full_data["diff_forms"],
        full_data["name_routes"]
    )

    routes = {}
    for area in encounter_data['table']:
        for key in area.keys():
            if type(area[key]) != int:
                if type(area[key][0]) == dict:
                    for mon in area[key]:
                        if mon['monsNo'] < 2000:
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
                                                    pkmn_key = pokedex[str(dexNum)] + str(formNo)
                                                    temp_form_no = formNo
                                                    if isSpecialPokemon(get_pokemon_name(int(dexNum))):
                                                        temp_form_no = 0
                                                    
                                                    pokemonPersonalId = get_form_pokemon_personal_id(dexNum, temp_form_no)

                                                    if pokemonPersonalId is not None and ("Gigantamax" in get_form_name(pokemonPersonalId) or "Eternamax" in get_form_name(pokemonPersonalId) or "Mega " in get_form_name(pokemonPersonalId) or "Totem " in get_form_name(pokemonPersonalId)):
                                                        bad_encounter_data(get_form_name(pokemonPersonalId), name_routes[key1], route)
                                                    elif pkmn_key not in diff_forms.keys():
                                                        bad_encounter_data(pokedex[str(dexNum)], name_routes[key1], route)
                                                    else:
                                                        routes[key1].append(diff_forms[pkmn_key][1])
                                                        routes[key1] = list(set(routes[key1]))
                                else:
                                    continue            
    ##This is for adding the Trophy Garden daily mons
    for mon in encounter_data['urayama']:
        routes['lmpt-39'].append(pokedex[str(mon['monsNo'])])

    ##This is for adding all of the Honey Tree encounters to the list
    honey_encounter_data = HoneyTreeData()

    for key in honey_encounter_data.keys():
        for mon in honey_encounter_data[key]:
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

    with open(os.path.join(output_file_path, 'bad_encounters.json'), 'w') as output:
        output.write(json.dumps(bad_encounters, default=tuple))
    with open(os.path.join(output_file_path, 'Encounter_output.json'), 'w') as output:
        output.write(json.dumps(sorted_routes))

def pathfinding():

    with open(os.path.join(input_file_path, 'EvolveTable.json'), "r", encoding="utf-8") as f:
        graphing = json.load(f)
    graph = graphing["Evolve"]
    forms = GenForms()
    evolve = {}
    for node in graph:
        evolve[node["id"]] = {"path": [], "method": [], "ar": []}

    for pokemon in evolve.keys():
        queue = []
        queue.append(pokemon)
        queue.append(0)
        new_queue = []

        if pokemon not in evolve[pokemon]["path"]:
            evolve[pokemon]["path"].append(pokemon)
        
        while queue:
            current_mon = queue.pop(0)
            current_form = queue.pop(0)
            mon_zeros = 3 - len(str(current_mon))
            form_zeros = 3 - len(str(current_form))
            if f"ZKN_FORM_{mon_zeros*'0'}{current_mon}_{form_zeros*'0'}{current_form}" in forms.keys():
                current_mon = forms[f"ZKN_FORM_{mon_zeros*'0'}{current_mon}_{form_zeros*'0'}{current_form}"]
            adjacent_nodes = graph[current_mon]["ar"]
            if len(adjacent_nodes) != 0:
                next_mon = adjacent_nodes[2]
                next_form = adjacent_nodes[3]
                mon_zeros = 3 - len(str(next_mon))
                form_zeros = 3 - len(str(next_form))
                if f"ZKN_FORM_{mon_zeros*'0'}{next_mon}_{form_zeros*'0'}{next_form}" in forms.keys():
                    next_mon = forms[f"ZKN_FORM_{mon_zeros*'0'}{next_mon}_{form_zeros*'0'}{next_form}"]

                evolve[next_mon]["path"] = evolve[current_mon]["path"] + [next_mon]
                for i in range(2, len(adjacent_nodes), 5):
                    new_queue.append(adjacent_nodes[i])
                    new_queue.append(adjacent_nodes[i + 1])
                    while new_queue:
                        curr_mon = new_queue.pop(0)
                        curr_form = new_queue.pop(0)

                        mon_zeros = 3 - len(str(curr_mon))
                        form_zeros = 3 - len(str(curr_form))
                        if f"ZKN_FORM_{mon_zeros*'0'}{curr_mon}_{form_zeros*'0'}{curr_form}" in forms.keys():
                            curr_mon = forms[f"ZKN_FORM_{mon_zeros*'0'}{curr_mon}_{form_zeros*'0'}{curr_form}"]

                        ### This section is for the current pokemon
                        evolve[curr_mon]["path"].append(pokemon)
                        evolve[curr_mon]["path"].append(curr_mon)
                        evolve[curr_mon]["path"] = list(dict.fromkeys(evolve[curr_mon]["path"]))

                        ### This section is for the first pokemon in the chain
                        evolve[evolve[curr_mon]["path"][0]]["path"].append(curr_mon)
                        evolve[evolve[curr_mon]["path"][0]]["path"] = [x for i, x in enumerate(evolve[evolve[curr_mon]["path"][0]]["path"]) if x not in evolve[evolve[curr_mon]["path"][0]]["path"][:i]]

                        ### This section is for the second pokemon in the chain
                        if len(evolve[curr_mon]["path"]) > 1:
                            evolve[evolve[curr_mon]["path"][1]]["path"].append(curr_mon)
                            evolve[evolve[curr_mon]["path"][1]]["path"] = [x for i, x in enumerate(evolve[evolve[curr_mon]["path"][1]]["path"]) if x not in evolve[evolve[curr_mon]["path"][1]]["path"][:i]]

                        if len(evolve[curr_mon]["path"]) > 2:
                            evolve[evolve[curr_mon]["path"][2]]["path"].append(curr_mon)
                            evolve[evolve[curr_mon]["path"][2]]["path"] = [x for i, x in enumerate(evolve[evolve[curr_mon]["path"][2]]["path"]) if x not in evolve[evolve[curr_mon]["path"][2]]["path"][:i]]

                    ### Dewpider (751) currently evolves into Dewpider and creates an infinite loop
                    ### These can be taken away once that is fixed
                    if current_mon != 751:
                        new_queue.append(adjacent_nodes[i])
                        new_queue.append(adjacent_nodes[i + 1])

                if current_mon != 751:
                    queue.append(next_mon)
                    queue.append(next_form)

            if not queue:
                queue = new_queue
                new_queue = []
        for extra in evolve[pokemon]["path"]:
            for i in range(0, len(graph[extra]["ar"]), 5):
                evolve[pokemon]["method"].append(graph[extra]["ar"][i])
            evolve[pokemon]["ar"].append(graph[extra]["ar"])
    
    for form in forms:
        for pokemon in evolve.keys():
            if int(pokemon) == int(form[-7:-4]):
                for evolution in evolve[pokemon]["path"]:
                    if len(graph[forms[form]]["ar"]) == 0:
                        if evolution in evolve[evolve[forms[form]]["path"][0]]["path"]:
                            evolve[evolution]["path"].append(forms[form])
                        if len(evolve[forms[form]]["path"]) < 2:
                            evolution_path = evolve[evolution]["path"] + evolve[forms[form]]["path"]
                            new_path = []
                            for path_element in evolution_path:
                                if path_element not in new_path:
                                    new_path.append(path_element)
                            evolve[forms[form]]["path"] = new_path
                            evolve[evolution]["path"] = new_path

    for pokemon in evolve.keys():
        new_path = []
        for path_element in evolve[pokemon]["path"]:
            if path_element not in new_path:
                new_path.append(path_element)
        evolve[pokemon]["path"] = new_path
    with open(os.path.join(output_file_path, "evolution.json"), "w", encoding = "utf-8") as output:
        json.dump(evolve, output, ensure_ascii=False)
    return evolve

def getPokedexInfo():
    pokedex = []
    evolutions = pathfinding()
    diff_forms = create_diff_forms_dictionary(POKEMON_NAMES)
    for pokemon in evolutions.keys():
        if pokemon < 1456:
            if pokemon < 906:
                poke_info = get_pokemon_info(pokemon)
                poke_name = get_pokemon_name(pokemon)
                dex_info = {
                    "value": pokemon,
                    "text": poke_name,
                    "type": poke_info["type"].upper()
                    }
                if "dualtype" in poke_info.keys() and poke_info["dualtype"] != 0:
                    dex_info["dualtype"] = poke_info["dualtype"].upper()
                dex_info["evolve"] = evolutions[pokemon]["path"]
                dex_info["generation"] = 8
                dex_info["evolve"] = evolutions[pokemon]["path"]
                dex_info["generation"] = 8
                dex_info["abilities"] = [poke_info['ability1'], poke_info['ability2'], poke_info['abilityH']]
            if pokemon > 1010:
                poke_info = get_pokemon_info(pokemon)
                poke_name = get_pokemon_name(pokemon)
                dex_info = {
                    "value": pokemon,
                    "text": poke_name,
                    "type": poke_info["type"].upper()
                    }
                if "dualtype" in poke_info.keys() and poke_info["dualtype"] != 0:
                    dex_info["dualtype"] = poke_info["dualtype"].upper()
                dex_info["evolve"] = evolutions[pokemon]["path"]
                dex_info["generation"] = 8
                dex_info["abilities"] = [poke_info['ability1'], poke_info['ability2'], poke_info['abilityH']]


            pokedex.append(dex_info)
    with open(os.path.join(output_file_path, "pokedex_info.json"), "w", encoding="utf-8") as output:
        json.dump(pokedex, output, ensure_ascii=False)
    return pokedex
