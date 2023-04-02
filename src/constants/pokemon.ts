import type { TPokemon } from 'constants/types';
import data from 'tasks/output/pokedex_info.json'

const POKEMON: TPokemon[] = data as TPokemon[];
const ExtraPokemon: TPokemon[] = [
    {
        "value": 412,
        "text": "Burmy",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1061, 1062, 1063, 1064 ],
        "generation": 8
    },
    {
        "value": 413,
        "text": "Wormadam",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 412, 413, 1061, 1062, 1063, 1064 ],
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
        "value": 1061,
        "text": "Burmy Sandy Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1061, 1062, 1063, 1064 ],
        "generation": 8
    },
    {
        "value": 1062,
        "text": "Burmy Trash Cloak",
        "type": "BUG",
        "evolve": [ 412, 413, 414, 1061, 1062, 1063, 1064 ],
        "generation": 8
    },
    {
        "value": 1063,
        "text": "Wormadam Sandy Cloak",
        "type": "BUG",
        "dualtype": "GROUND",
        "evolve": [ 412, 413, 1061, 1062, 1063, 1064 ],
        "generation": 8
    },
    {
        "value": 1064,
        "text": "Wormadam Trash Cloak",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 412, 413, 1061, 1062, 1063, 1064 ],
        "generation": 8
    },
    {
        "value": 1066,
        "text": "Shellos (East)",
        "type": "WATER",
        "evolve": [ 422, 423, 1066, 1067 ],
        "generation": 8
    },
    {
        "value": 1067,
        "text": "Gastrodon (East)",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 422, 423, 1066, 1067 ],
        "generation": 8
    },
    {
        "value": 95,
        "text": "Onix",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1023 ],
        "generation": 8
    },
    {
        "value": 969,
        "text": "Crystal Onix",
        "type": "ROCK",
        "dualtype": "ICE",
        "evolve": [ 969 ],
        "generation": 8
    },
    {
        "value": 208,
        "text": "Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1023 ],
        "generation": 8
    },
    {
        "value": 1023,
        "text": "Mega Steelix",
        "type": "STEEL",
        "dualtype": "GROUND",
        "evolve": [ 95, 208, 1023 ],
        "generation": 8
    },
    {
        "value": 1104,
        "text": "Galarian Darumaka",
        "type": "ICE",
        "evolve": [ 1104, 1106, 1107 ],
        "generation": 8
    },
    {
        "value": 1105,
        "text": "Zen Mode",
        "type": "FIRE",
        "dualtype": "PSYCHIC",
        "evolve": [ 554, 555, 1105 ],
        "generation": 8
    },
    {
        "value": 1106,
        "text": "Galarian Standard Mode",
        "type": "ICE",
        "evolve": [ 1104, 1106, 1107 ],
        "generation": 8
    },
    {
        "value": 1107,
        "text": "Galarian Zen Mode",
        "type": "FIRE",
        "dualtype": "ICE",
        "evolve": [ 1104, 1106, 1107 ],
        "generation": 8
    },
    {
        "value": 554,
        "text": "Darumaka",
        "type": "FIRE",
        "evolve": [ 554, 555, 1105 ],
        "generation": 8
    },
    {
        "value": 555,
        "text": "Darmanitan",
        "type": "FIRE",
        "evolve": [ 554, 555, 1105 ],
        "generation": 8
    },
    {
        "value": 905,
        "text": "Enamorus",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 905, 1344 ],
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
