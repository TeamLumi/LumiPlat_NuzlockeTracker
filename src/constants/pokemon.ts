import type { TPokemon } from 'constants/types';
import data from 'tasks/output/pokedex_info.json'

const POKEMON: TPokemon[] = data as TPokemon[];
const ExtraPokemon: TPokemon[] = [
    {
        "value": 412,
        "text": "Burmy",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 413,
        "text": "Wormadam",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 414,
        "text": "Mothim",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 412, 414 ],
        "generation": 8
    },
    {
        "value": 1172,
        "text": "Burmy Sandy Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 1173,
        "text": "Burmy Trash Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 1174,
        "text": "Wormadam Sandy Cloak",
        "type": "BUG",
        "dualtype": "GROUND",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 1175,
        "text": "Wormadam Trash Cloak",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 412, 413, 1172, 1173, 1174, 1175 ],
        "generation": 8
    },
    {
        "value": 95,
        "text": "Onix",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8
    },
    {
        "value": 1074,
        "text": "Crystal Onix",
        "type": "ROCK",
        "dualtype": "ICE",
        "evolve": [ 1074 ],
        "generation": 8
    },
    {
        "value": 208,
        "text": "Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8
    },
    {
        "value": 1134,
        "text": "Mega Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1134 ],
        "generation": 8
    },
    {
        "value": 1215,
        "text": "Darumaka Galarian Darumaka",
        "type": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8
    },
    {
        "value": 1217,
        "text": "Darmanitan Galarian Standard Mode",
        "type": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8
    },
    {
        "value": 1218,
        "text": "Darmanitan Galarian Zen Mode",
        "type": "FIRE",
        "dualtype": "ICE",
        "evolve": [ 1215, 1217, 1218 ],
        "generation": 8
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
