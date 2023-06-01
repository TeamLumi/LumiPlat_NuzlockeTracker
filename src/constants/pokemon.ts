import type { TPokemon } from 'constants/types';
import data from './generated_files/pokedex_info.json'

const POKEMON: TPokemon[] = data as TPokemon[];
const ExtraPokemon: TPokemon[] = [
    {
        "value": 412,
        "text": "Burmy",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Shed Skin", "Overcoat"],
        "dexNum": 412,
        "form": 0,
    },
    {
        "value": 413,
        "text": "Wormadam",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Anticipation", "Overcoat"],
        "dexNum": 413,
        "form": 0,
    },
    {
        "value": 414,
        "text": "Mothim",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 412, 414 ],
        "generation": 8,
        "abilities": ["Tinted Lens", "Swarm", "Sweet Veil"],
        "dexNum": 414,
        "form": 0,
    },
    {
        "value": 1172,
        "text": "Burmy Sandy Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Shed Skin", "Overcoat"],
        "dexNum": 412,
        "form": 1,
    },
    {
        "value": 1173,
        "text": "Burmy Trash Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Shed Skin", "Overcoat"],
        "dexNum": 412,
        "form": 2,
    },
    {
        "value": 1174,
        "text": "Wormadam Sandy Cloak",
        "type": "BUG",
        "dualtype": "GROUND",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Anticipation", "Overcoat"],
        "dexNum": 413,
        "form": 1,
    },
    {
        "value": 1175,
        "text": "Wormadam Trash Cloak",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8,
        "abilities": ["Battle Armor", "Anticipation", "Overcoat"],
        "dexNum": 413,
        "form": 2,
    },
    {
        "value": 95,
        "text": "Onix",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8,
        "abilities": ["Rock Head", "Sturdy", "Weak Armor"],
        "dexNum": 95,
        "form": 0,
    },
    {
        "value": 1074,
        "text": "Crystal Onix",
        "type": "ROCK",
        "dualtype": "ICE",
        "evolve": [ 1074 ],
        "generation": 8,
        "abilities": ["Water Absorb", "Clear Body", "Ice Body"],
        "dexNum": 95,
        "form": 1,
    },
    {
        "value": 208,
        "text": "Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8,
        "abilities": ["Sand Force", "Sturdy", "Sheer Force"],
        "dexNum": 208,
        "form": 0,
    },
    {
        "value": 1134,
        "text": "Mega Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8,
        "abilities": ["Sand Force", "Sand Force", "Sand Force"],
        "dexNum": 208,
        "form": 1,
    },
    {
        "value": 1215,
        "text": "Galarian Darumaka",
        "type": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8,
        "abilities": ["Hustle", "Hustle", "Inner Focus"],
        "dexNum": 554,
        "form": 1,
    },
    {
        "value": 1217,
        "text": "Darmanitan Galarian Standard Mode",
        "type": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8,
        "abilities": ["Gorilla Tactics", "Gorilla Tactics", "Zen Mode"],
        "dexNum": 555,
        "form": 1,
    },
    {
        "value": 1218,
        "text": "Darmanitan Galarian Zen Mode",
        "type": "FIRE",
        "dualtype": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8,
        "abilities": ["Gorilla Tactics", "Gorilla Tactics", "Zen Mode"],
        "dexNum": 555,
        "form": 2,
    }
]

ExtraPokemon.forEach((mon2) => {
  const index = POKEMON.findIndex((mon1) => mon1.value === mon2.value);
  if (index !== -1) {
    POKEMON[index] = mon2;
  } else {
    POKEMON.push(mon2);
  }
});

export const POKEMAP = new Map(POKEMON.map((poke) => [poke.value, poke]));

export default POKEMON;
