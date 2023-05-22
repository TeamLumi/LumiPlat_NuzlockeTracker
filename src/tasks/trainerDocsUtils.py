import os
import re
import json
import math

from trainerUtils import process_files, parse_ev_script_file
from pokemonUtils import get_pokemon_from_trainer_info, get_pokemon_name
from convert_lmpt_data import getTrainerData
import constants

repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
input_file_path = os.path.join(repo_file_path, 'input')
output_file_path = os.path.join(repo_file_path, "src", "tasks", "output")
trainer_table_file_path = os.path.join(input_file_path, "TrainerTable.json")

resources_filepath = os.path.join(repo_file_path, "src", "tasks", "Resources")
gym_leader_file_path = os.path.join(resources_filepath, "NewGymLeaders.json")

with open(gym_leader_file_path, mode='r', encoding="utf-8") as f:
    gym_leader_data = json.load(f)

with open(trainer_table_file_path, mode='r', encoding="utf-8") as f:
    TRAINER_TABLE = json.load(f)

def get_trainer_pokemon(trainerId, output_format):
   
    pokemon_list = []
    trainer = next((t for t in TRAINER_TABLE["TrainerPoke"] if t["ID"] == trainerId), None)
    pokemon_list = get_pokemon_from_trainer_info(trainer, output_format)

    return pokemon_list

def sort_dicts_by_key(dicts_list, sort_key1, sort_key2, sort_key1_order):
    """
    Sorts a list of dictionaries by two given keys in ascending order.
    The sorting order of the first key is specified by a separate list.
    """
    return sorted(dicts_list, key=lambda x: (sort_key1_order.index(x[sort_key1]), x[sort_key2]))

def get_avg_trainer_level(trainer_team):
    mon_count = len(trainer_team)
    if len(trainer_team) == 0:
        print("Trainer is less than 1")
        return 0
    total_levels = 0
    for mon in trainer_team:
        total_levels += mon['level']
    trainer_avg = math.ceil(total_levels / mon_count)
    return trainer_avg

def sort_trainers_by_level(trainer_info):
    for trainer in trainer_info:
        zoneName = trainer['zoneName']
        trainerId = trainer['trainerId']
        trainer['team'] = get_trainer_pokemon(trainerId, "Docs")
        trainer['avg_lvl'] = get_avg_trainer_level(trainer['team'])
    sorted_trainers_by_level = sort_dicts_by_key(trainer_info, 'zoneName', 'avg_lvl', constants.ZONE_ORDER)
    return sorted_trainers_by_level

def sort_trainers_by_route(trainer_info):
    sorted_trainers_by_key = sort_dicts_by_key(trainer_info, 'zoneName', 'trainerId', constants.ZONE_ORDER)
    sorted_trainers_by_route = {}
    for trainer in sorted_trainers_by_key:
        areaName = trainer['areaName']
        trainerId = trainer['trainerId']
        trainer['team'] = get_trainer_pokemon(trainerId, "Tracker")
        if areaName not in sorted_trainers_by_route.keys():
            sorted_trainers_by_route[areaName] = [trainer]
        else:
            sorted_trainers_by_route[areaName].append(trainer)
    return sorted_trainers_by_route

def get_trainer_name(name, zone_name):
    if re.findall(constants.TEAM_REGEX, name):
        split_name = name.split()
        trainer_name = ' '.join(split_name[:-2])
        team_name = ' '.join(split_name[-2:])
        name = f"{trainer_name} ({zone_name}) [{team_name}]"
        return [name, team_name]
    name = f"{name} ({zone_name})"
    return [name, name]

def write_to_trainer_docs_file(trainer, trainer_name):
    trainerId = trainer['trainerId']
    rematch = trainer['rematch']
    format_ = f"Format: {trainer['format']}"
    link = trainer['link']
    team = trainer['team']
    level_cap = "Level Cap:"
    with open(os.path.join(output_file_path, "trainer_info.txt"), "a") as f:
        f.write(f"{trainerId}\n{trainer_name}\n{level_cap}\n{format_}\n")
        for mon in team:
            f.write(f"\n{get_pokemon_name(mon['id'])}\n{mon['level']}\n{mon['nature']}\n{mon['ability']}\n\n{mon['item']}\n")
            for index in range(0,4):
                f.write(f"{mon['moves'][index] if index < len(mon['moves']) else '(No Move)'}\n")
            f.write(f"{mon['ivhp']}/{mon['ivatk']}/{mon['ivdef']}/{mon['ivspatk']}/{mon['ivspdef']}/{mon['ivspeed']}\n")
            f.write(f"{mon['evhp']}/{mon['evatk']}/{mon['evdef']}/{mon['evspatk']}/{mon['evspdef']}/{mon['evspeed']}\n")
        if link != '':
            f.write(f"Paired with {link}\n\n")
        else:
            f.write(f"{link}\n\n")

def write_trainer_docs(sorted_trainers):
    for trainer in sorted_trainers:
        
        zone_name = trainer['zoneName']
        name = f"{trainer['type']} {trainer['name']}"
        full_trainer_name = get_trainer_name(name, zone_name)[0]

        write_to_trainer_docs_file(trainer, full_trainer_name)


def write_tracker_docs(sorted_tracker_trainers):
    all_trainers = []
    for zone in sorted_tracker_trainers.keys():
        zone_trainers = []
        for trainer in sorted_tracker_trainers[zone]:
            zone_trainer = {}
            zone_name = trainer['zoneName']
            name = f"{trainer['type']} {trainer['name']}"
            full_trainer_name = get_trainer_name(name, zone_name)
            trainer_name = full_trainer_name[0]
            team_name = full_trainer_name[1]
            trainer_team = trainer['team']
            zone_trainer = {
                "content": trainer_team,
                "game": team_name,
                "name": trainer_name,
                "type": "Trainer"
            }
            zone_trainers.append(zone_trainer)
        all_trainers.append(zone_trainers)
    return all_trainers

def get_trainer_doc_data():
    '''
    Sort the trainers by route and then ID and sort the routes by average trainer level on route
    Well if you'd like I can establish an order without boss trainers and rematches and then make everything align to that first established order.

    '''

    trainer_info = process_files(os.path.join(repo_file_path, "scripts"), parse_ev_script_file)
    print("Start trainer sorting by level")
    sorted_trainers = sort_trainers_by_level(trainer_info)
    print("Trainers have been sorted")
    write_trainer_docs(sorted_trainers)
    print("Done")

def get_tracker_trainer_data():

    original_teams = getTrainerData(gym_leader_data)
    trainer_info = process_files(os.path.join(repo_file_path, "scripts"), parse_ev_script_file)

    print("Start sorting trainers by zone")
    sorted_tracker_trainers = sort_trainers_by_route(trainer_info)
    print("Trainers have been sorted")
    new_trainers = write_tracker_docs(sorted_tracker_trainers)
    for route in new_trainers:
        original_teams["1"].append(route)
    with open(os.path.join(output_file_path, 'Trainer_output.json'), 'w', encoding='utf-8') as f:
        json.dump(original_teams, f)

get_trainer_doc_data()
get_tracker_trainer_data()