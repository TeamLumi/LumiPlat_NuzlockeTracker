import re
import json
import os
import csv
import unicodedata
from collections import defaultdict
from pokemonUtils import get_ability_string, get_pokemon_name, get_form_name, get_item_string, get_pokemon_name_dictionary, get_pokemon_info, get_nature_name, GenForms, get_form_pokemon_personal_id, create_diff_forms_dictionary, isSpecialPokemon

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

with open(os.path.join(input_file_path, 'PersonalTable.json'), "r", encoding="utf-8") as f:
    ptable = json.load(f)
personal_table = ptable['Personal']

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
        "trainer_labels": os.path.join(input_file_path, 'english_dp_trainers_type.json'),
        "personal_table": os.path.join(input_file_path, 'PersonalTable.json'),
    }
    for name, filepath in files.items():
        data[name] = load_json_from_file(filepath)

    data["abilities"] = get_lumi_data(data["raw_abilities"], get_ability_string)
    data["pokedex"] = get_lumi_data(data["raw_pokedex"], get_pokemon_name)
    data["items"] = get_lumi_data(data["raw_items"], get_item_string)
    data["diff_forms"] = create_diff_forms_dictionary(POKEMON_NAMES)
    data["trainer_ids"] = getTrainerIdsFromDocumentation()

    return data

full_data = load_data()

def getTrainerData(gymLeaderList):
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
                                    "nature": get_nature_name(trainer[f"P{poke_num}Seikaku"]),
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
                                if "content" not in fights:
                                    fights["content"] = [pokemon]
                                    fights["game"] = f"{gym_leader} Team {str(trainer_ids.index(trainer_id) + 1)}"
                                    fights["name"] = gym_leader.split("(")[0].strip()
                                    fights["type"] = battle_type
                                    fights["route"] = f'{gym_leader.split("(")[1].strip(")")} Gym Leader' if len(gym_leader.split("(")) > 1 else "Elite Four Trainers"
                                else:
                                    fights["content"].append(pokemon)
                    trainers_list.append(fights)
                full_list.append(trainers_list)
        dic['1'] = full_list
    return dic


def match_honey_tree_data(match, honey_routes):
    array_regex = r"\[(.*?)\]\s*=\s*\{(.*?)\}"
    values_str = match.group(1)
    honey_trees = {}

    for line in values_str.split("\n"):
        line = line.strip()
        if not line:
            continue

        submatch = re.search(array_regex, line)
        if not submatch:
            continue
        
        key = submatch.group(1)
        values = [v.strip() for v in submatch.group(2).split(",")]
        if "AMPHAROS" not in values:
            honey_trees[honey_routes[key]] = values
    return honey_trees

def HoneyTreeData():
    const_regex = r"const\s+int32_t\s+HONEY_TREES\[\s*NUM_ZONE_ID\s*\]\[\s*10\s*\]\s*=\s*\{\s*([\s\S]*?)\};"

    with open(honeywork_cpp_filepath, "r") as file, open(honeyroutes_filepath, "r") as honey:
        honey_data = file.read()
        honey_routes = json.load(honey)

    # Extract honey trees data
    match = re.search(const_regex, honey_data)
    if match:
        return match_honey_tree_data(match, honey_routes)
    
def get_honey_tree_mons(routes):
    honey_encounter_data = HoneyTreeData()
    
    for key in honey_encounter_data.keys():
        for mon in honey_encounter_data[key]:
            if mon.capitalize() in routes[key]:
                continue
            if mon == "FARFETCHD":
                routes[key].append("Farfetch'd")
            else:
                routes[key].append(mon.capitalize())


def bad_encounter_data(pkmn_name, routeName=None, route=None):
    '''
    This is useful for checking whether there are bad encounters within the diff_forms
    '''
    bad_encounters = []
    if routeName == None and route == None:
        print("This is an invalid pokemon in the dex:", pkmn_name)
        bad_encounters.append([pkmn_name, "Pokedex"])
        return bad_encounters
    print('BAD ENCOUNTER', pkmn_name, routeName, route)
    bad_encounters.append({pkmn_name, routeName, route})
    return bad_encounters

def check_bad_dex_mon(pokemonID, invalid_pokemon):
    pokemonName = get_pokemon_name(pokemonID)
    is_valid = personal_table[pokemonID]['valid_flag']
    is_special_mon = isSpecialPokemon(pokemonName)
    if pokemonID is not None and is_valid == 0 and is_special_mon == False:
        invalid_pokemon.append(bad_encounter_data(pokemonName))
        return invalid_pokemon
    return 1

def check_bad_encounter(encounters, tracker_route, pkmn_key, lumi_formula_mon, temp_form_no, zoneID):
    bad_encounter_list = ["Gigantamax", "Eternamax", "Mega ", "Totem "]
    pokemonPersonalId = get_form_pokemon_personal_id(lumi_formula_mon, temp_form_no)
    pokedex, name_routes, diff_forms = ( full_data["pokedex"], full_data['name_routes'], full_data['diff_forms'])

    if pokemonPersonalId is not None and any(substring in get_form_name(pokemonPersonalId) for substring in bad_encounter_list):
        bad_encounter_data(get_form_name(pokemonPersonalId), name_routes[tracker_route], zoneID)
    elif pkmn_key not in diff_forms.keys():
        bad_encounter_data(pokedex[str(lumi_formula_mon)], name_routes[tracker_route], zoneID)
    else:
        encounters[str(tracker_route)].append(diff_forms[pkmn_key][1])


def get_diff_form_mons(monsno, zoneID, encounters):
    pokedex, routeNames = ( full_data["pokedex"], full_data["routes"] )
    formNo = monsno//(2**16)
    lumi_formula_mon = monsno - (formNo * (2**16))
    for tracker_route, route in routeNames.items():

        if str(zoneID) not in route:
            continue
        pkmn_key = pokedex[str(lumi_formula_mon)] + str(formNo)

        temp_form_no = formNo
        if isSpecialPokemon(get_pokemon_name(int(lumi_formula_mon))):
            temp_form_no = 0

        check_bad_encounter(encounters, tracker_route, pkmn_key, lumi_formula_mon, temp_form_no, zoneID)

def get_standard_mons(monsno, zoneID, encounters):
    pokedex, routeNames = ( full_data["pokedex"], full_data["routes"] )
    if monsno == 0:
        return
    for tracker_route, route in routeNames.items():
        if str(zoneID) not in route:
            continue
        encounters[str(tracker_route)].append(pokedex[str(monsno)])

def update_routes_with_mons(monsno, zoneID, encounters):
    pokedex, routeNames = ( full_data["pokedex"], full_data["routes"] )

    if monsno < 2000:
        get_standard_mons(monsno, zoneID, encounters)

    else:
        get_diff_form_mons(monsno, zoneID, encounters)

def getEncounterData():
    encounter_data, pokedex = ( full_data["raw_encounters"], full_data['pokedex'] )

    encounter_list = defaultdict(list)
    for area in encounter_data['table']:
        for key in area.keys():
            if type(area[key]) == int:
                continue
            if type(area[key][0]) != dict:
                continue
            for mon in area[key]:
                monsno = mon['monsNo']
                zoneID = area['zoneID']
                update_routes_with_mons(monsno, zoneID, encounter_list)

    ##This is for adding the Trophy Garden daily mons
    for mon in encounter_data['urayama']:
        encounter_list['lmpt-39'].append(pokedex[str(mon['monsNo'])])

    ##This is for adding all of the Honey Tree encounters to the list
    get_honey_tree_mons(encounter_list)

    for key in encounter_list:
        encounter_list[key] = sorted(list(set(encounter_list[key])))

    my_keys = list(encounter_list.keys())
    my_keys.sort(key = lambda x: int(x.split('-')[1]))
    sorted_encounters = {i: encounter_list[i] for i in my_keys}

    with open(os.path.join(output_file_path, 'bad_encounters.json'), 'w') as output:
        output.write(json.dumps(bad_encounters, default=tuple))
    with open(os.path.join(output_file_path, 'Encounter_output.json'), 'w') as output:
        output.write(json.dumps(sorted_encounters))

def pathfinding():

    with open(os.path.join(input_file_path, 'EvolveTable.json'), "r", encoding="utf-8") as f:
        graphing = json.load(f)
    graph = graphing["Evolve"]
    forms = GenForms()
    evolve = {}
    invalid_pokemon = []
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
        is_invalid = check_bad_dex_mon(forms[form], invalid_pokemon)
        if is_invalid != 1:
            continue
        for pokemon in evolve.keys():
            if int(pokemon) != int(form[-7:-4]):
                continue
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

def get_mon_dex_info(pokemon, evolve):
    diff_forms = full_data['diff_forms']
    poke_info = get_pokemon_info(pokemon)
    poke_name = get_pokemon_name(pokemon)
    dex_info = {
        "value": pokemon,
        "text": poke_name,
        "type": poke_info["type"].upper()
        }
    if "dualtype" in poke_info.keys() and poke_info["dualtype"] != 0:
        dex_info["dualtype"] = poke_info["dualtype"].upper()
    dex_info["evolve"] = evolve
    dex_info["generation"] = 8
    dex_info["abilities"] = [poke_info['ability1'], poke_info['ability2'], poke_info['abilityH']]
    dex_info["dexNum"] = pokemon
    dex_info["form"] = 0
    if pokemon > 1010:
        for poke_form in diff_forms.keys():
            if poke_name in diff_forms[poke_form]:
                form_number = diff_forms[poke_form][4]
                og_num = diff_forms[poke_form][3]
        dex_info["dexNum"] = og_num
        dex_info["form"] = int(form_number)
        return dex_info

    return dex_info

def getPokedexInfo():
    pokedex = []
    evolutions = pathfinding()

    for pokemon in evolutions.keys():
        if pokemon >= 1456:
            continue
        evolve = evolutions[pokemon]["path"]
        if pokemon < 906 or pokemon > 1010:
            dex_info = get_mon_dex_info(pokemon, evolve)

        pokedex.append(dex_info)
    with open(os.path.join(output_file_path, "pokedex_info.json"), "w", encoding="utf-8") as output:
        json.dump(pokedex, output, ensure_ascii=False)
    return pokedex

getEncounterData()
getPokedexInfo()
getTrainerData(gym_leader_data)