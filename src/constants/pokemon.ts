import type { TPokemon } from 'constants/types';

const POKEMON: TPokemon[] = [
    {
        "value": 0,
        "text": "Egg",
        "type": "NORMAL",
        "evolve": [ 0 ],
        "generation": 8
    },
    {
        "value": 1,
        "text": "Bulbasaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 2,
        "text": "Ivysaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 3,
        "text": "Venusaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 4,
        "text": "Charmander",
        "type": "FIRE",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 5,
        "text": "Charmeleon",
        "type": "FIRE",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 6,
        "text": "Charizard",
        "type": "FIRE",
        "dualtype": "DRAGON",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 7,
        "text": "Squirtle",
        "type": "WATER",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 8,
        "text": "Wartortle",
        "type": "WATER",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 9,
        "text": "Blastoise",
        "type": "WATER",
        "dualtype": "STEEL",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 10,
        "text": "Caterpie",
        "type": "BUG",
        "evolve": [ 10, 11, 12, 916 ],
        "generation": 8
    },
    {
        "value": 11,
        "text": "Metapod",
        "type": "BUG",
        "evolve": [ 10, 11, 12, 916 ],
        "generation": 8
    },
    {
        "value": 12,
        "text": "Butterfree",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 10, 11, 12, 916 ],
        "generation": 8
    },
    {
        "value": 13,
        "text": "Weedle",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 13, 14, 15, 917 ],
        "generation": 8
    },
    {
        "value": 14,
        "text": "Kakuna",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 13, 14, 15, 917 ],
        "generation": 8
    },
    {
        "value": 15,
        "text": "Beedrill",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 13, 14, 15, 917 ],
        "generation": 8
    },
    {
        "value": 16,
        "text": "Pidgey",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 16, 17, 18, 918 ],
        "generation": 8
    },
    {
        "value": 17,
        "text": "Pidgeotto",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 16, 17, 18, 918 ],
        "generation": 8
    },
    {
        "value": 18,
        "text": "Pidgeot",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 16, 17, 18, 918 ],
        "generation": 8
    },
    {
        "value": 19,
        "text": "Rattata",
        "type": "NORMAL",
        "evolve": [ 19, 20, 921 ],
        "generation": 8
    },
    {
        "value": 20,
        "text": "Raticate",
        "type": "NORMAL",
        "evolve": [ 19, 20, 921 ],
        "generation": 8
    },
    {
        "value": 21,
        "text": "Spearow",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 21, 22 ],
        "generation": 8
    },
    {
        "value": 22,
        "text": "Fearow",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 21, 22 ],
        "generation": 8
    },
    {
        "value": 23,
        "text": "Ekans",
        "type": "POISON",
        "evolve": [ 23, 24 ],
        "generation": 8
    },
    {
        "value": 24,
        "text": "Arbok",
        "type": "POISON",
        "evolve": [ 23, 24 ],
        "generation": 8
    },
    {
        "value": 25,
        "text": "Pikachu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 26,
        "text": "Raichu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 993 ],
        "generation": 8
    },
    {
        "value": 27,
        "text": "Sandshrew",
        "type": "GROUND",
        "evolve": [ 27, 28 ],
        "generation": 8
    },
    {
        "value": 28,
        "text": "Sandslash",
        "type": "GROUND",
        "evolve": [ 27, 28 ],
        "generation": 8
    },
    {
        "value": 29,
        "text": "Nidoran-F",
        "type": "POISON",
        "evolve": [ 29, 30, 31 ],
        "generation": 8
    },
    {
        "value": 30,
        "text": "Nidorina",
        "type": "POISON",
        "evolve": [ 29, 30, 31 ],
        "generation": 8
    },
    {
        "value": 31,
        "text": "Nidoqueen",
        "type": "POISON",
        "dualtype": "GROUND",
        "evolve": [ 29, 30, 31 ],
        "generation": 8
    },
    {
        "value": 32,
        "text": "Nidoran-M",
        "type": "POISON",
        "evolve": [ 32, 33, 34 ],
        "generation": 8
    },
    {
        "value": 33,
        "text": "Nidorino",
        "type": "POISON",
        "evolve": [ 32, 33, 34 ],
        "generation": 8
    },
    {
        "value": 34,
        "text": "Nidoking",
        "type": "POISON",
        "dualtype": "GROUND",
        "evolve": [ 32, 33, 34 ],
        "generation": 8
    },
    {
        "value": 35,
        "text": "Clefairy",
        "type": "FAIRY",
        "evolve": [ 173, 35, 36 ],
        "generation": 8
    },
    {
        "value": 36,
        "text": "Clefable",
        "type": "FAIRY",
        "evolve": [ 173, 35, 36 ],
        "generation": 8
    },
    {
        "value": 37,
        "text": "Vulpix",
        "type": "FIRE",
        "evolve": [ 37, 38 ],
        "generation": 8
    },
    {
        "value": 38,
        "text": "Ninetales",
        "type": "FIRE",
        "dualtype": "FAIRY",
        "evolve": [ 37, 38 ],
        "generation": 8
    },
    {
        "value": 39,
        "text": "Jigglypuff",
        "type": "NORMAL",
        "dualtype": "FAIRY",
        "evolve": [ 174, 39, 40 ],
        "generation": 8
    },
    {
        "value": 40,
        "text": "Wigglytuff",
        "type": "NORMAL",
        "dualtype": "FAIRY",
        "evolve": [ 174, 39, 40 ],
        "generation": 8
    },
    {
        "value": 41,
        "text": "Zubat",
        "type": "POISON",
        "dualtype": "FLYING",
        "evolve": [ 41, 42, 169 ],
        "generation": 8
    },
    {
        "value": 42,
        "text": "Golbat",
        "type": "POISON",
        "dualtype": "FLYING",
        "evolve": [ 41, 42, 169 ],
        "generation": 8
    },
    {
        "value": 43,
        "text": "Oddish",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 43, 44, 45, 182 ],
        "generation": 8
    },
    {
        "value": 44,
        "text": "Gloom",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 43, 44, 45, 182 ],
        "generation": 8
    },
    {
        "value": 45,
        "text": "Vileplume",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 43, 44, 45 ],
        "generation": 8
    },
    {
        "value": 46,
        "text": "Paras",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 46, 47 ],
        "generation": 8
    },
    {
        "value": 47,
        "text": "Parasect",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 46, 47 ],
        "generation": 8
    },
    {
        "value": 48,
        "text": "Venonat",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 48, 49 ],
        "generation": 8
    },
    {
        "value": 49,
        "text": "Venomoth",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 48, 49 ],
        "generation": 8
    },
    {
        "value": 50,
        "text": "Diglett",
        "type": "GROUND",
        "evolve": [ 50, 51 ],
        "generation": 8
    },
    {
        "value": 51,
        "text": "Dugtrio",
        "type": "GROUND",
        "evolve": [ 50, 51 ],
        "generation": 8
    },
    {
        "value": 52,
        "text": "Meowth",
        "type": "NORMAL",
        "evolve": [ 52, 53, 948 ],
        "generation": 8
    },
    {
        "value": 53,
        "text": "Persian",
        "type": "NORMAL",
        "evolve": [ 52, 53, 948 ],
        "generation": 8
    },
    {
        "value": 54,
        "text": "Psyduck",
        "type": "WATER",
        "evolve": [ 54, 55 ],
        "generation": 8
    },
    {
        "value": 55,
        "text": "Golduck",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 54, 55 ],
        "generation": 8
    },
    {
        "value": 56,
        "text": "Mankey",
        "type": "FIGHTING",
        "evolve": [ 56, 57 ],
        "generation": 8
    },
    {
        "value": 57,
        "text": "Primeape",
        "type": "FIGHTING",
        "evolve": [ 56, 57 ],
        "generation": 8
    },
    {
        "value": 58,
        "text": "Growlithe",
        "type": "FIRE",
        "evolve": [ 58, 59 ],
        "generation": 8
    },
    {
        "value": 59,
        "text": "Arcanine",
        "type": "FIRE",
        "evolve": [ 58, 59 ],
        "generation": 8
    },
    {
        "value": 60,
        "text": "Poliwag",
        "type": "WATER",
        "evolve": [ 60, 61, 62, 186 ],
        "generation": 8
    },
    {
        "value": 61,
        "text": "Poliwhirl",
        "type": "WATER",
        "evolve": [ 60, 61, 62, 186 ],
        "generation": 8
    },
    {
        "value": 62,
        "text": "Poliwrath",
        "type": "WATER",
        "dualtype": "FIGHTING",
        "evolve": [ 60, 61, 62 ],
        "generation": 8
    },
    {
        "value": 63,
        "text": "Abra",
        "type": "PSYCHIC",
        "evolve": [ 63, 64, 65, 952 ],
        "generation": 8
    },
    {
        "value": 64,
        "text": "Kadabra",
        "type": "PSYCHIC",
        "evolve": [ 63, 64, 65, 952 ],
        "generation": 8
    },
    {
        "value": 65,
        "text": "Alakazam",
        "type": "PSYCHIC",
        "evolve": [ 63, 64, 65, 952 ],
        "generation": 8
    },
    {
        "value": 66,
        "text": "Machop",
        "type": "FIGHTING",
        "evolve": [ 66, 67, 68, 953 ],
        "generation": 8
    },
    {
        "value": 67,
        "text": "Machoke",
        "type": "FIGHTING",
        "evolve": [ 66, 67, 68, 953 ],
        "generation": 8
    },
    {
        "value": 68,
        "text": "Machamp",
        "type": "FIGHTING",
        "evolve": [ 66, 67, 68, 953 ],
        "generation": 8
    },
    {
        "value": 69,
        "text": "Bellsprout",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 69, 70, 71 ],
        "generation": 8
    },
    {
        "value": 70,
        "text": "Weepinbell",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 69, 70, 71 ],
        "generation": 8
    },
    {
        "value": 71,
        "text": "Victreebel",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 69, 70, 71 ],
        "generation": 8
    },
    {
        "value": 72,
        "text": "Tentacool",
        "type": "WATER",
        "dualtype": "POISON",
        "evolve": [ 72, 73 ],
        "generation": 8
    },
    {
        "value": 73,
        "text": "Tentacruel",
        "type": "WATER",
        "dualtype": "POISON",
        "evolve": [ 72, 73 ],
        "generation": 8
    },
    {
        "value": 74,
        "text": "Geodude",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 74, 75, 76 ],
        "generation": 8
    },
    {
        "value": 75,
        "text": "Graveler",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 74, 75, 76 ],
        "generation": 8
    },
    {
        "value": 76,
        "text": "Golem",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 74, 75, 76 ],
        "generation": 8
    },
    {
        "value": 77,
        "text": "Ponyta",
        "type": "FIRE",
        "evolve": [ 77, 78 ],
        "generation": 8
    },
    {
        "value": 78,
        "text": "Rapidash",
        "type": "FIRE",
        "evolve": [ 77, 78 ],
        "generation": 8
    },
    {
        "value": 79,
        "text": "Slowpoke",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 79, 80, 199, 961 ],
        "generation": 8
    },
    {
        "value": 80,
        "text": "Slowbro",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 79, 80, 961 ],
        "generation": 8
    },
    {
        "value": 81,
        "text": "Magnemite",
        "type": "ELECTRIC",
        "dualtype": "STEEL",
        "evolve": [ 81, 82, 462 ],
        "generation": 8
    },
    {
        "value": 82,
        "text": "Magneton",
        "type": "ELECTRIC",
        "dualtype": "STEEL",
        "evolve": [ 81, 82, 462 ],
        "generation": 8
    },
    {
        "value": 83,
        "text": "Farfetch’d",
        "type": "FIGHTING",
        "dualtype": "FLYING",
        "evolve": [ 83 ],
        "generation": 8
    },
    {
        "value": 84,
        "text": "Doduo",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 84, 85 ],
        "generation": 8
    },
    {
        "value": 85,
        "text": "Dodrio",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 84, 85 ],
        "generation": 8
    },
    {
        "value": 86,
        "text": "Seel",
        "type": "WATER",
        "evolve": [ 86, 87, 963 ],
        "generation": 8
    },
    {
        "value": 87,
        "text": "Dewgong",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 86, 87, 963 ],
        "generation": 8
    },
    {
        "value": 88,
        "text": "Grimer",
        "type": "POISON",
        "evolve": [ 88, 89 ],
        "generation": 8
    },
    {
        "value": 89,
        "text": "Muk",
        "type": "POISON",
        "evolve": [ 88, 89 ],
        "generation": 8
    },
    {
        "value": 90,
        "text": "Shellder",
        "type": "WATER",
        "evolve": [ 90, 91 ],
        "generation": 8
    },
    {
        "value": 91,
        "text": "Cloyster",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 90, 91 ],
        "generation": 8
    },
    {
        "value": 92,
        "text": "Gastly",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
        "generation": 8
    },
    {
        "value": 93,
        "text": "Haunter",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
        "generation": 8
    },
    {
        "value": 94,
        "text": "Gengar",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
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
        "value": 96,
        "text": "Drowzee",
        "type": "PSYCHIC",
        "evolve": [ 96, 97 ],
        "generation": 8
    },
    {
        "value": 97,
        "text": "Hypno",
        "type": "PSYCHIC",
        "evolve": [ 96, 97 ],
        "generation": 8
    },
    {
        "value": 98,
        "text": "Krabby",
        "type": "WATER",
        "evolve": [ 98, 99, 970 ],
        "generation": 8
    },
    {
        "value": 99,
        "text": "Kingler",
        "type": "WATER",
        "evolve": [ 98, 99, 970 ],
        "generation": 8
    },
    {
        "value": 100,
        "text": "Voltorb",
        "type": "ELECTRIC",
        "evolve": [ 100, 101 ],
        "generation": 8
    },
    {
        "value": 101,
        "text": "Electrode",
        "type": "ELECTRIC",
        "evolve": [ 100, 101 ],
        "generation": 8
    },
    {
        "value": 102,
        "text": "Exeggcute",
        "type": "GRASS",
        "dualtype": "PSYCHIC",
        "evolve": [ 102, 103, 973 ],
        "generation": 8
    },
    {
        "value": 103,
        "text": "Exeggutor",
        "type": "GRASS",
        "dualtype": "PSYCHIC",
        "evolve": [ 102, 103, 973 ],
        "generation": 8
    },
    {
        "value": 104,
        "text": "Cubone",
        "type": "GROUND",
        "evolve": [ 104, 105, 974, 975 ],
        "generation": 8
    },
    {
        "value": 105,
        "text": "Marowak",
        "type": "GROUND",
        "evolve": [ 104, 105, 974, 975 ],
        "generation": 8
    },
    {
        "value": 106,
        "text": "Hitmonlee",
        "type": "FIGHTING",
        "evolve": [ 106, 236 ],
        "generation": 8
    },
    {
        "value": 107,
        "text": "Hitmonchan",
        "type": "FIGHTING",
        "evolve": [ 236, 107 ],
        "generation": 8
    },
    {
        "value": 108,
        "text": "Lickitung",
        "type": "NORMAL",
        "evolve": [ 108, 463 ],
        "generation": 8
    },
    {
        "value": 109,
        "text": "Koffing",
        "type": "POISON",
        "evolve": [ 109, 976, 110 ],
        "generation": 8
    },
    {
        "value": 110,
        "text": "Weezing",
        "type": "POISON",
        "evolve": [ 109, 110, 976 ],
        "generation": 8
    },
    {
        "value": 111,
        "text": "Rhyhorn",
        "type": "GROUND",
        "dualtype": "ROCK",
        "evolve": [ 111, 112, 464 ],
        "generation": 8
    },
    {
        "value": 112,
        "text": "Rhydon",
        "type": "GROUND",
        "dualtype": "ROCK",
        "evolve": [ 111, 112, 464 ],
        "generation": 8
    },
    {
        "value": 113,
        "text": "Chansey",
        "type": "NORMAL",
        "evolve": [ 440, 113, 242 ],
        "generation": 8
    },
    {
        "value": 114,
        "text": "Tangela",
        "type": "GRASS",
        "evolve": [ 114, 465 ],
        "generation": 8
    },
    {
        "value": 115,
        "text": "Kangaskhan",
        "type": "NORMAL",
        "evolve": [ 115, 977 ],
        "generation": 8
    },
    {
        "value": 116,
        "text": "Horsea",
        "type": "WATER",
        "evolve": [ 116, 117, 230 ],
        "generation": 8
    },
    {
        "value": 117,
        "text": "Seadra",
        "type": "WATER",
        "evolve": [ 116, 117, 230 ],
        "generation": 8
    },
    {
        "value": 118,
        "text": "Goldeen",
        "type": "WATER",
        "evolve": [ 118, 119 ],
        "generation": 8
    },
    {
        "value": 119,
        "text": "Seaking",
        "type": "WATER",
        "evolve": [ 118, 119 ],
        "generation": 8
    },
    {
        "value": 120,
        "text": "Staryu",
        "type": "WATER",
        "evolve": [ 120, 121 ],
        "generation": 8
    },
    {
        "value": 121,
        "text": "Starmie",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 120, 121 ],
        "generation": 8
    },
    {
        "value": 122,
        "text": "Mr. Mime",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 439, 122 ],
        "generation": 8
    },
    {
        "value": 123,
        "text": "Scyther",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 123, 212, 900, 1025 ],
        "generation": 8
    },
    {
        "value": 124,
        "text": "Jynx",
        "type": "ICE",
        "dualtype": "PSYCHIC",
        "evolve": [ 238, 124 ],
        "generation": 8
    },
    {
        "value": 125,
        "text": "Electabuzz",
        "type": "ELECTRIC",
        "evolve": [ 239, 125, 466 ],
        "generation": 8
    },
    {
        "value": 126,
        "text": "Magmar",
        "type": "FIRE",
        "evolve": [ 240, 126, 467 ],
        "generation": 8
    },
    {
        "value": 127,
        "text": "Pinsir",
        "type": "BUG",
        "evolve": [ 127, 979 ],
        "generation": 8
    },
    {
        "value": 128,
        "text": "Tauros",
        "type": "NORMAL",
        "evolve": [ 128 ],
        "generation": 8
    },
    {
        "value": 129,
        "text": "Magikarp",
        "type": "WATER",
        "evolve": [ 129, 130, 980 ],
        "generation": 8
    },
    {
        "value": 130,
        "text": "Gyarados",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 129, 130, 980 ],
        "generation": 8
    },
    {
        "value": 131,
        "text": "Lapras",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 131, 981 ],
        "generation": 8
    },
    {
        "value": 132,
        "text": "Ditto",
        "type": "NORMAL",
        "evolve": [ 132 ],
        "generation": 8
    },
    {
        "value": 133,
        "text": "Eevee",
        "type": "NORMAL",
        "evolve": [ 133, 470, 471, 135, 134, 136, 700, 196, 197, 982, 983 ],
        "generation": 8
    },
    {
        "value": 134,
        "text": "Vaporeon",
        "type": "WATER",
        "evolve": [ 133, 134, 982, 983 ],
        "generation": 8
    },
    {
        "value": 135,
        "text": "Jolteon",
        "type": "ELECTRIC",
        "evolve": [ 133, 135, 982, 983 ],
        "generation": 8
    },
    {
        "value": 136,
        "text": "Flareon",
        "type": "FIRE",
        "evolve": [ 133, 136, 982, 983 ],
        "generation": 8
    },
    {
        "value": 137,
        "text": "Porygon",
        "type": "NORMAL",
        "evolve": [ 137, 233, 474 ],
        "generation": 8
    },
    {
        "value": 138,
        "text": "Omanyte",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 138, 139 ],
        "generation": 8
    },
    {
        "value": 139,
        "text": "Omastar",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 138, 139 ],
        "generation": 8
    },
    {
        "value": 140,
        "text": "Kabuto",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 140, 141 ],
        "generation": 8
    },
    {
        "value": 141,
        "text": "Kabutops",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 140, 141 ],
        "generation": 8
    },
    {
        "value": 142,
        "text": "Aerodactyl",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 142, 984 ],
        "generation": 8
    },
    {
        "value": 143,
        "text": "Snorlax",
        "type": "NORMAL",
        "evolve": [ 446, 143, 985 ],
        "generation": 8
    },
    {
        "value": 144,
        "text": "Articuno",
        "type": "ICE",
        "dualtype": "FLYING",
        "evolve": [ 144, 986 ],
        "generation": 8
    },
    {
        "value": 145,
        "text": "Zapdos",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 145, 987 ],
        "generation": 8
    },
    {
        "value": 146,
        "text": "Moltres",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 146, 988 ],
        "generation": 8
    },
    {
        "value": 147,
        "text": "Dratini",
        "type": "DRAGON",
        "evolve": [ 147, 148, 149 ],
        "generation": 8
    },
    {
        "value": 148,
        "text": "Dragonair",
        "type": "DRAGON",
        "evolve": [ 147, 148, 149 ],
        "generation": 8
    },
    {
        "value": 149,
        "text": "Dragonite",
        "type": "DRAGON",
        "dualtype": "FLYING",
        "evolve": [ 147, 148, 149 ],
        "generation": 8
    },
    {
        "value": 150,
        "text": "Mewtwo",
        "type": "PSYCHIC",
        "evolve": [ 150, 989, 990, 991 ],
        "generation": 8
    },
    {
        "value": 151,
        "text": "Mew",
        "type": "PSYCHIC",
        "evolve": [ 151 ],
        "generation": 8
    },
    {
        "value": 152,
        "text": "Chikorita",
        "type": "GRASS",
        "evolve": [ 152, 153, 154 ],
        "generation": 8
    },
    {
        "value": 153,
        "text": "Bayleef",
        "type": "GRASS",
        "evolve": [ 152, 153, 154 ],
        "generation": 8
    },
    {
        "value": 154,
        "text": "Meganium",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 152, 153, 154 ],
        "generation": 8
    },
    {
        "value": 155,
        "text": "Cyndaquil",
        "type": "FIRE",
        "evolve": [ 155, 156, 992, 157 ],
        "generation": 8
    },
    {
        "value": 156,
        "text": "Quilava",
        "type": "FIRE",
        "evolve": [ 155, 156, 992, 157 ],
        "generation": 8
    },
    {
        "value": 157,
        "text": "Typhlosion",
        "type": "FIRE",
        "evolve": [ 155, 157, 156, 992 ],
        "generation": 8
    },
    {
        "value": 158,
        "text": "Totodile",
        "type": "WATER",
        "evolve": [ 158, 159, 160 ],
        "generation": 8
    },
    {
        "value": 159,
        "text": "Croconaw",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 158, 159, 160 ],
        "generation": 8
    },
    {
        "value": 160,
        "text": "Feraligatr",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 158, 159, 160 ],
        "generation": 8
    },
    {
        "value": 161,
        "text": "Sentret",
        "type": "NORMAL",
        "evolve": [ 161, 162 ],
        "generation": 8
    },
    {
        "value": 162,
        "text": "Furret",
        "type": "NORMAL",
        "evolve": [ 161, 162 ],
        "generation": 8
    },
    {
        "value": 163,
        "text": "Hoothoot",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 163, 164 ],
        "generation": 8
    },
    {
        "value": 164,
        "text": "Noctowl",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 163, 164 ],
        "generation": 8
    },
    {
        "value": 165,
        "text": "Ledyba",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 165, 166 ],
        "generation": 8
    },
    {
        "value": 166,
        "text": "Ledian",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 165, 166 ],
        "generation": 8
    },
    {
        "value": 167,
        "text": "Spinarak",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 167, 168 ],
        "generation": 8
    },
    {
        "value": 168,
        "text": "Ariados",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 167, 168 ],
        "generation": 8
    },
    {
        "value": 169,
        "text": "Crobat",
        "type": "POISON",
        "dualtype": "FLYING",
        "evolve": [ 41, 42, 169 ],
        "generation": 8
    },
    {
        "value": 170,
        "text": "Chinchou",
        "type": "WATER",
        "dualtype": "ELECTRIC",
        "evolve": [ 170, 171 ],
        "generation": 8
    },
    {
        "value": 171,
        "text": "Lanturn",
        "type": "WATER",
        "dualtype": "ELECTRIC",
        "evolve": [ 170, 171 ],
        "generation": 8
    },
    {
        "value": 172,
        "text": "Pichu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 173,
        "text": "Cleffa",
        "type": "FAIRY",
        "evolve": [ 173, 35, 36 ],
        "generation": 8
    },
    {
        "value": 174,
        "text": "Igglybuff",
        "type": "NORMAL",
        "dualtype": "FAIRY",
        "evolve": [ 174, 39, 40 ],
        "generation": 8
    },
    {
        "value": 175,
        "text": "Togepi",
        "type": "FAIRY",
        "evolve": [ 175, 176, 468 ],
        "generation": 8
    },
    {
        "value": 176,
        "text": "Togetic",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 175, 176, 468 ],
        "generation": 8
    },
    {
        "value": 177,
        "text": "Natu",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 177, 178 ],
        "generation": 8
    },
    {
        "value": 178,
        "text": "Xatu",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 177, 178 ],
        "generation": 8
    },
    {
        "value": 179,
        "text": "Mareep",
        "type": "ELECTRIC",
        "evolve": [ 179, 180, 181, 994 ],
        "generation": 8
    },
    {
        "value": 180,
        "text": "Flaaffy",
        "type": "ELECTRIC",
        "evolve": [ 179, 180, 181, 994 ],
        "generation": 8
    },
    {
        "value": 181,
        "text": "Ampharos",
        "type": "ELECTRIC",
        "dualtype": "DRAGON",
        "evolve": [ 179, 180, 181, 994 ],
        "generation": 8
    },
    {
        "value": 182,
        "text": "Bellossom",
        "type": "GRASS",
        "evolve": [ 43, 182, 44 ],
        "generation": 8
    },
    {
        "value": 183,
        "text": "Marill",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 298, 183, 184 ],
        "generation": 8
    },
    {
        "value": 184,
        "text": "Azumarill",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 298, 183, 184 ],
        "generation": 8
    },
    {
        "value": 185,
        "text": "Sudowoodo",
        "type": "ROCK",
        "evolve": [ 438, 185 ],
        "generation": 8
    },
    {
        "value": 186,
        "text": "Politoed",
        "type": "WATER",
        "evolve": [ 60, 186, 61 ],
        "generation": 8
    },
    {
        "value": 187,
        "text": "Hoppip",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 187, 188, 189 ],
        "generation": 8
    },
    {
        "value": 188,
        "text": "Skiploom",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 187, 188, 189 ],
        "generation": 8
    },
    {
        "value": 189,
        "text": "Jumpluff",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 187, 188, 189 ],
        "generation": 8
    },
    {
        "value": 190,
        "text": "Aipom",
        "type": "NORMAL",
        "evolve": [ 190, 424 ],
        "generation": 8
    },
    {
        "value": 191,
        "text": "Sunkern",
        "type": "GRASS",
        "evolve": [ 191, 192 ],
        "generation": 8
    },
    {
        "value": 192,
        "text": "Sunflora",
        "type": "GRASS",
        "evolve": [ 191, 192 ],
        "generation": 8
    },
    {
        "value": 193,
        "text": "Yanma",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 193, 469 ],
        "generation": 8
    },
    {
        "value": 194,
        "text": "Wooper",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 194, 195 ],
        "generation": 8
    },
    {
        "value": 195,
        "text": "Quagsire",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 194, 195 ],
        "generation": 8
    },
    {
        "value": 196,
        "text": "Espeon",
        "type": "PSYCHIC",
        "evolve": [ 133, 196, 982, 983 ],
        "generation": 8
    },
    {
        "value": 197,
        "text": "Umbreon",
        "type": "DARK",
        "evolve": [ 133, 197, 982, 983 ],
        "generation": 8
    },
    {
        "value": 198,
        "text": "Murkrow",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 198, 430 ],
        "generation": 8
    },
    {
        "value": 199,
        "text": "Slowking",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 79, 199 ],
        "generation": 8
    },
    {
        "value": 200,
        "text": "Misdreavus",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 200, 429 ],
        "generation": 8
    },
    {
        "value": 201,
        "text": "Unown",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 202,
        "text": "Wobbuffet",
        "type": "PSYCHIC",
        "evolve": [ 360, 202 ],
        "generation": 8
    },
    {
        "value": 203,
        "text": "Girafarig",
        "type": "NORMAL",
        "dualtype": "PSYCHIC",
        "evolve": [ 203 ],
        "generation": 8
    },
    {
        "value": 204,
        "text": "Pineco",
        "type": "BUG",
        "evolve": [ 204, 205 ],
        "generation": 8
    },
    {
        "value": 205,
        "text": "Forretress",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 204, 205 ],
        "generation": 8
    },
    {
        "value": 206,
        "text": "Dunsparce",
        "type": "NORMAL",
        "dualtype": "DRAGON",
        "evolve": [ 206 ],
        "generation": 8
    },
    {
        "value": 207,
        "text": "Gligar",
        "type": "GROUND",
        "dualtype": "FLYING",
        "evolve": [ 207, 472 ],
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
        "value": 209,
        "text": "Snubbull",
        "type": "FAIRY",
        "evolve": [ 209, 210 ],
        "generation": 8
    },
    {
        "value": 210,
        "text": "Granbull",
        "type": "FAIRY",
        "evolve": [ 209, 210 ],
        "generation": 8
    },
    {
        "value": 211,
        "text": "Qwilfish",
        "type": "WATER",
        "dualtype": "POISON",
        "evolve": [ 211 ],
        "generation": 8
    },
    {
        "value": 212,
        "text": "Scizor",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 123, 212, 1025 ],
        "generation": 8
    },
    {
        "value": 213,
        "text": "Shuckle",
        "type": "BUG",
        "dualtype": "ROCK",
        "evolve": [ 213 ],
        "generation": 8
    },
    {
        "value": 214,
        "text": "Heracross",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 214, 1026 ],
        "generation": 8
    },
    {
        "value": 215,
        "text": "Sneasel",
        "type": "DARK",
        "dualtype": "ICE",
        "evolve": [ 215, 461 ],
        "generation": 8
    },
    {
        "value": 216,
        "text": "Teddiursa",
        "type": "NORMAL",
        "evolve": [ 216, 217, 901 ],
        "generation": 8
    },
    {
        "value": 217,
        "text": "Ursaring",
        "type": "GROUND",
        "dualtype": "NORMAL",
        "evolve": [ 216, 217, 901 ],
        "generation": 8
    },
    {
        "value": 218,
        "text": "Slugma",
        "type": "FIRE",
        "evolve": [ 218, 219 ],
        "generation": 8
    },
    {
        "value": 219,
        "text": "Magcargo",
        "type": "FIRE",
        "dualtype": "ROCK",
        "evolve": [ 218, 219 ],
        "generation": 8
    },
    {
        "value": 220,
        "text": "Swinub",
        "type": "ICE",
        "dualtype": "GROUND",
        "evolve": [ 220, 221, 473 ],
        "generation": 8
    },
    {
        "value": 221,
        "text": "Piloswine",
        "type": "ICE",
        "dualtype": "GROUND",
        "evolve": [ 220, 221, 473 ],
        "generation": 8
    },
    {
        "value": 222,
        "text": "Corsola",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 222 ],
        "generation": 8
    },
    {
        "value": 223,
        "text": "Remoraid",
        "type": "WATER",
        "evolve": [ 223, 224 ],
        "generation": 8
    },
    {
        "value": 224,
        "text": "Octillery",
        "type": "WATER",
        "evolve": [ 223, 224 ],
        "generation": 8
    },
    {
        "value": 225,
        "text": "Delibird",
        "type": "ICE",
        "dualtype": "FLYING",
        "evolve": [ 225 ],
        "generation": 8
    },
    {
        "value": 226,
        "text": "Mantine",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 458, 226 ],
        "generation": 8
    },
    {
        "value": 227,
        "text": "Skarmory",
        "type": "STEEL",
        "dualtype": "FLYING",
        "evolve": [ 227 ],
        "generation": 8
    },
    {
        "value": 228,
        "text": "Houndour",
        "type": "DARK",
        "dualtype": "FIRE",
        "evolve": [ 228, 229, 1029 ],
        "generation": 8
    },
    {
        "value": 229,
        "text": "Houndoom",
        "type": "DARK",
        "dualtype": "FIRE",
        "evolve": [ 228, 229, 1029 ],
        "generation": 8
    },
    {
        "value": 230,
        "text": "Kingdra",
        "type": "WATER",
        "dualtype": "DRAGON",
        "evolve": [ 116, 117, 230 ],
        "generation": 8
    },
    {
        "value": 231,
        "text": "Phanpy",
        "type": "GROUND",
        "evolve": [ 231, 232 ],
        "generation": 8
    },
    {
        "value": 232,
        "text": "Donphan",
        "type": "GROUND",
        "evolve": [ 231, 232 ],
        "generation": 8
    },
    {
        "value": 233,
        "text": "Porygon2",
        "type": "NORMAL",
        "evolve": [ 137, 233, 474 ],
        "generation": 8
    },
    {
        "value": 234,
        "text": "Stantler",
        "type": "NORMAL",
        "evolve": [ 234, 899 ],
        "generation": 8
    },
    {
        "value": 235,
        "text": "Smeargle",
        "type": "NORMAL",
        "evolve": [ 235 ],
        "generation": 8
    },
    {
        "value": 236,
        "text": "Tyrogue",
        "type": "FIGHTING",
        "evolve": [ 236, 107, 106, 237 ],
        "generation": 8
    },
    {
        "value": 237,
        "text": "Hitmontop",
        "type": "FIGHTING",
        "evolve": [ 236, 237 ],
        "generation": 8
    },
    {
        "value": 238,
        "text": "Smoochum",
        "type": "ICE",
        "dualtype": "PSYCHIC",
        "evolve": [ 238, 124 ],
        "generation": 8
    },
    {
        "value": 239,
        "text": "Elekid",
        "type": "ELECTRIC",
        "evolve": [ 239, 125, 466 ],
        "generation": 8
    },
    {
        "value": 240,
        "text": "Magby",
        "type": "FIRE",
        "evolve": [ 240, 126, 467 ],
        "generation": 8
    },
    {
        "value": 241,
        "text": "Miltank",
        "type": "NORMAL",
        "evolve": [ 241 ],
        "generation": 8
    },
    {
        "value": 242,
        "text": "Blissey",
        "type": "NORMAL",
        "evolve": [ 440, 113, 242 ],
        "generation": 8
    },
    {
        "value": 243,
        "text": "Raikou",
        "type": "ELECTRIC",
        "evolve": [ 243 ],
        "generation": 8
    },
    {
        "value": 244,
        "text": "Entei",
        "type": "FIRE",
        "evolve": [ 244 ],
        "generation": 8
    },
    {
        "value": 245,
        "text": "Suicune",
        "type": "WATER",
        "evolve": [ 245 ],
        "generation": 8
    },
    {
        "value": 246,
        "text": "Larvitar",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 246, 247, 248, 1030 ],
        "generation": 8
    },
    {
        "value": 247,
        "text": "Pupitar",
        "type": "ROCK",
        "dualtype": "GROUND",
        "evolve": [ 246, 247, 248, 1030 ],
        "generation": 8
    },
    {
        "value": 248,
        "text": "Tyranitar",
        "type": "ROCK",
        "dualtype": "DARK",
        "evolve": [ 246, 247, 248, 1030 ],
        "generation": 8
    },
    {
        "value": 249,
        "text": "Lugia",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 249 ],
        "generation": 8
    },
    {
        "value": 250,
        "text": "Ho-Oh",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 250 ],
        "generation": 8
    },
    {
        "value": 251,
        "text": "Celebi",
        "type": "PSYCHIC",
        "dualtype": "GRASS",
        "evolve": [ 251 ],
        "generation": 8
    },
    {
        "value": 252,
        "text": "Treecko",
        "type": "GRASS",
        "evolve": [ 252, 253, 254, 1031 ],
        "generation": 8
    },
    {
        "value": 253,
        "text": "Grovyle",
        "type": "GRASS",
        "evolve": [ 252, 253, 254, 1031 ],
        "generation": 8
    },
    {
        "value": 254,
        "text": "Sceptile",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 252, 253, 254, 1031 ],
        "generation": 8
    },
    {
        "value": 255,
        "text": "Torchic",
        "type": "FIRE",
        "evolve": [ 255, 256, 257, 1032 ],
        "generation": 8
    },
    {
        "value": 256,
        "text": "Combusken",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 255, 256, 257, 1032 ],
        "generation": 8
    },
    {
        "value": 257,
        "text": "Blaziken",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 255, 256, 257, 1032 ],
        "generation": 8
    },
    {
        "value": 258,
        "text": "Mudkip",
        "type": "WATER",
        "evolve": [ 258, 259, 260, 1033 ],
        "generation": 8
    },
    {
        "value": 259,
        "text": "Marshtomp",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 258, 259, 260, 1033 ],
        "generation": 8
    },
    {
        "value": 260,
        "text": "Swampert",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 258, 259, 260, 1033 ],
        "generation": 8
    },
    {
        "value": 261,
        "text": "Poochyena",
        "type": "DARK",
        "evolve": [ 261, 262 ],
        "generation": 8
    },
    {
        "value": 262,
        "text": "Mightyena",
        "type": "DARK",
        "evolve": [ 261, 262 ],
        "generation": 8
    },
    {
        "value": 263,
        "text": "Zigzagoon",
        "type": "NORMAL",
        "evolve": [ 263, 264 ],
        "generation": 8
    },
    {
        "value": 264,
        "text": "Linoone",
        "type": "NORMAL",
        "evolve": [ 263, 264 ],
        "generation": 8
    },
    {
        "value": 265,
        "text": "Wurmple",
        "type": "BUG",
        "evolve": [ 265, 266, 268, 267, 269 ],
        "generation": 8
    },
    {
        "value": 266,
        "text": "Silcoon",
        "type": "BUG",
        "evolve": [ 265, 266, 267 ],
        "generation": 8
    },
    {
        "value": 267,
        "text": "Beautifly",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 265, 266, 267 ],
        "generation": 8
    },
    {
        "value": 268,
        "text": "Cascoon",
        "type": "BUG",
        "evolve": [ 265, 268, 269 ],
        "generation": 8
    },
    {
        "value": 269,
        "text": "Dustox",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 265, 268, 269 ],
        "generation": 8
    },
    {
        "value": 270,
        "text": "Lotad",
        "type": "WATER",
        "dualtype": "GRASS",
        "evolve": [ 270, 271, 272 ],
        "generation": 8
    },
    {
        "value": 271,
        "text": "Lombre",
        "type": "WATER",
        "dualtype": "GRASS",
        "evolve": [ 270, 271, 272 ],
        "generation": 8
    },
    {
        "value": 272,
        "text": "Ludicolo",
        "type": "WATER",
        "dualtype": "GRASS",
        "evolve": [ 270, 271, 272 ],
        "generation": 8
    },
    {
        "value": 273,
        "text": "Seedot",
        "type": "GRASS",
        "evolve": [ 273, 274, 275 ],
        "generation": 8
    },
    {
        "value": 274,
        "text": "Nuzleaf",
        "type": "GRASS",
        "dualtype": "DARK",
        "evolve": [ 273, 274, 275 ],
        "generation": 8
    },
    {
        "value": 275,
        "text": "Shiftry",
        "type": "GRASS",
        "dualtype": "DARK",
        "evolve": [ 273, 274, 275 ],
        "generation": 8
    },
    {
        "value": 276,
        "text": "Taillow",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 276, 277 ],
        "generation": 8
    },
    {
        "value": 277,
        "text": "Swellow",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 276, 277 ],
        "generation": 8
    },
    {
        "value": 278,
        "text": "Wingull",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 278, 279 ],
        "generation": 8
    },
    {
        "value": 279,
        "text": "Pelipper",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 278, 279 ],
        "generation": 8
    },
    {
        "value": 280,
        "text": "Ralts",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 280, 281, 282, 475, 1036, 1072 ],
        "generation": 8
    },
    {
        "value": 281,
        "text": "Kirlia",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 280, 281, 282, 475, 1036, 1072 ],
        "generation": 8
    },
    {
        "value": 282,
        "text": "Gardevoir",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 280, 281, 282, 1036 ],
        "generation": 8
    },
    {
        "value": 283,
        "text": "Surskit",
        "type": "BUG",
        "dualtype": "WATER",
        "evolve": [ 283, 284 ],
        "generation": 8
    },
    {
        "value": 284,
        "text": "Masquerain",
        "type": "BUG",
        "dualtype": "WATER",
        "evolve": [ 283, 284 ],
        "generation": 8
    },
    {
        "value": 285,
        "text": "Shroomish",
        "type": "GRASS",
        "evolve": [ 285, 286 ],
        "generation": 8
    },
    {
        "value": 286,
        "text": "Breloom",
        "type": "GRASS",
        "dualtype": "FIGHTING",
        "evolve": [ 285, 286 ],
        "generation": 8
    },
    {
        "value": 287,
        "text": "Slakoth",
        "type": "NORMAL",
        "evolve": [ 287, 288, 289 ],
        "generation": 8
    },
    {
        "value": 288,
        "text": "Vigoroth",
        "type": "NORMAL",
        "evolve": [ 287, 288, 289 ],
        "generation": 8
    },
    {
        "value": 289,
        "text": "Slaking",
        "type": "NORMAL",
        "evolve": [ 287, 288, 289 ],
        "generation": 8
    },
    {
        "value": 290,
        "text": "Nincada",
        "type": "BUG",
        "dualtype": "GROUND",
        "evolve": [ 290, 291 ],
        "generation": 8
    },
    {
        "value": 291,
        "text": "Ninjask",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 290, 291 ],
        "generation": 8
    },
    {
        "value": 292,
        "text": "Shedinja",
        "type": "BUG",
        "dualtype": "GHOST",
        "evolve": [ 292 ],
        "generation": 8
    },
    {
        "value": 293,
        "text": "Whismur",
        "type": "NORMAL",
        "evolve": [ 293, 294, 295 ],
        "generation": 8
    },
    {
        "value": 294,
        "text": "Loudred",
        "type": "NORMAL",
        "evolve": [ 293, 294, 295 ],
        "generation": 8
    },
    {
        "value": 295,
        "text": "Exploud",
        "type": "NORMAL",
        "evolve": [ 293, 294, 295 ],
        "generation": 8
    },
    {
        "value": 296,
        "text": "Makuhita",
        "type": "FIGHTING",
        "evolve": [ 296, 297 ],
        "generation": 8
    },
    {
        "value": 297,
        "text": "Hariyama",
        "type": "FIGHTING",
        "evolve": [ 296, 297 ],
        "generation": 8
    },
    {
        "value": 298,
        "text": "Azurill",
        "type": "NORMAL",
        "dualtype": "FAIRY",
        "evolve": [ 298, 183, 184 ],
        "generation": 8
    },
    {
        "value": 299,
        "text": "Nosepass",
        "type": "ROCK",
        "evolve": [ 299, 476 ],
        "generation": 8
    },
    {
        "value": 300,
        "text": "Skitty",
        "type": "NORMAL",
        "evolve": [ 300, 301 ],
        "generation": 8
    },
    {
        "value": 301,
        "text": "Delcatty",
        "type": "NORMAL",
        "evolve": [ 300, 301 ],
        "generation": 8
    },
    {
        "value": 302,
        "text": "Sableye",
        "type": "DARK",
        "dualtype": "GHOST",
        "evolve": [ 302, 1037 ],
        "generation": 8
    },
    {
        "value": 303,
        "text": "Mawile",
        "type": "STEEL",
        "dualtype": "FAIRY",
        "evolve": [ 303, 1038 ],
        "generation": 8
    },
    {
        "value": 304,
        "text": "Aron",
        "type": "STEEL",
        "evolve": [ 304, 305, 306, 1039 ],
        "generation": 8
    },
    {
        "value": 305,
        "text": "Lairon",
        "type": "STEEL",
        "evolve": [ 304, 305, 306, 1039 ],
        "generation": 8
    },
    {
        "value": 306,
        "text": "Aggron",
        "type": "STEEL",
        "evolve": [ 304, 305, 306, 1039 ],
        "generation": 8
    },
    {
        "value": 307,
        "text": "Meditite",
        "type": "FIGHTING",
        "dualtype": "PSYCHIC",
        "evolve": [ 307, 308, 1040 ],
        "generation": 8
    },
    {
        "value": 308,
        "text": "Medicham",
        "type": "FIGHTING",
        "dualtype": "PSYCHIC",
        "evolve": [ 307, 308, 1040 ],
        "generation": 8
    },
    {
        "value": 309,
        "text": "Electrike",
        "type": "ELECTRIC",
        "evolve": [ 309, 310, 1041 ],
        "generation": 8
    },
    {
        "value": 310,
        "text": "Manectric",
        "type": "ELECTRIC",
        "evolve": [ 309, 310, 1041 ],
        "generation": 8
    },
    {
        "value": 311,
        "text": "Plusle",
        "type": "ELECTRIC",
        "evolve": [ 311 ],
        "generation": 8
    },
    {
        "value": 312,
        "text": "Minun",
        "type": "ELECTRIC",
        "evolve": [ 312 ],
        "generation": 8
    },
    {
        "value": 313,
        "text": "Volbeat",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 313 ],
        "generation": 8
    },
    {
        "value": 314,
        "text": "Illumise",
        "type": "BUG",
        "dualtype": "FAIRY",
        "evolve": [ 314 ],
        "generation": 8
    },
    {
        "value": 315,
        "text": "Roselia",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 406, 315, 407 ],
        "generation": 8
    },
    {
        "value": 316,
        "text": "Gulpin",
        "type": "POISON",
        "evolve": [ 316, 317 ],
        "generation": 8
    },
    {
        "value": 317,
        "text": "Swalot",
        "type": "POISON",
        "evolve": [ 316, 317 ],
        "generation": 8
    },
    {
        "value": 318,
        "text": "Carvanha",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 318, 319, 1042 ],
        "generation": 8
    },
    {
        "value": 319,
        "text": "Sharpedo",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 318, 319, 1042 ],
        "generation": 8
    },
    {
        "value": 320,
        "text": "Wailmer",
        "type": "WATER",
        "evolve": [ 320, 321 ],
        "generation": 8
    },
    {
        "value": 321,
        "text": "Wailord",
        "type": "WATER",
        "evolve": [ 320, 321 ],
        "generation": 8
    },
    {
        "value": 322,
        "text": "Numel",
        "type": "FIRE",
        "dualtype": "GROUND",
        "evolve": [ 322, 323, 1043 ],
        "generation": 8
    },
    {
        "value": 323,
        "text": "Camerupt",
        "type": "FIRE",
        "dualtype": "GROUND",
        "evolve": [ 322, 323, 1043 ],
        "generation": 8
    },
    {
        "value": 324,
        "text": "Torkoal",
        "type": "FIRE",
        "evolve": [ 324 ],
        "generation": 8
    },
    {
        "value": 325,
        "text": "Spoink",
        "type": "PSYCHIC",
        "evolve": [ 325, 326 ],
        "generation": 8
    },
    {
        "value": 326,
        "text": "Grumpig",
        "type": "PSYCHIC",
        "evolve": [ 325, 326 ],
        "generation": 8
    },
    {
        "value": 327,
        "text": "Spinda",
        "type": "NORMAL",
        "evolve": [ 327 ],
        "generation": 8
    },
    {
        "value": 328,
        "text": "Trapinch",
        "type": "BUG",
        "dualtype": "GROUND",
        "evolve": [ 328, 329, 330 ],
        "generation": 8
    },
    {
        "value": 329,
        "text": "Vibrava",
        "type": "BUG",
        "dualtype": "DRAGON",
        "evolve": [ 328, 329, 330 ],
        "generation": 8
    },
    {
        "value": 330,
        "text": "Flygon",
        "type": "BUG",
        "dualtype": "DRAGON",
        "evolve": [ 328, 329, 330 ],
        "generation": 8
    },
    {
        "value": 331,
        "text": "Cacnea",
        "type": "GRASS",
        "evolve": [ 331, 332 ],
        "generation": 8
    },
    {
        "value": 332,
        "text": "Cacturne",
        "type": "GRASS",
        "dualtype": "DARK",
        "evolve": [ 331, 332 ],
        "generation": 8
    },
    {
        "value": 333,
        "text": "Swablu",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 333, 334, 1044 ],
        "generation": 8
    },
    {
        "value": 334,
        "text": "Altaria",
        "type": "DRAGON",
        "dualtype": "FAIRY",
        "evolve": [ 333, 334, 1044 ],
        "generation": 8
    },
    {
        "value": 335,
        "text": "Zangoose",
        "type": "NORMAL",
        "evolve": [ 335 ],
        "generation": 8
    },
    {
        "value": 336,
        "text": "Seviper",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 336 ],
        "generation": 8
    },
    {
        "value": 337,
        "text": "Lunatone",
        "type": "ROCK",
        "dualtype": "PSYCHIC",
        "evolve": [ 337 ],
        "generation": 8
    },
    {
        "value": 338,
        "text": "Solrock",
        "type": "ROCK",
        "dualtype": "PSYCHIC",
        "evolve": [ 338 ],
        "generation": 8
    },
    {
        "value": 339,
        "text": "Barboach",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 339, 340 ],
        "generation": 8
    },
    {
        "value": 340,
        "text": "Whiscash",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 339, 340 ],
        "generation": 8
    },
    {
        "value": 341,
        "text": "Corphish",
        "type": "WATER",
        "evolve": [ 341, 342 ],
        "generation": 8
    },
    {
        "value": 342,
        "text": "Crawdaunt",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 341, 342 ],
        "generation": 8
    },
    {
        "value": 343,
        "text": "Baltoy",
        "type": "GROUND",
        "dualtype": "PSYCHIC",
        "evolve": [ 343, 344 ],
        "generation": 8
    },
    {
        "value": 344,
        "text": "Claydol",
        "type": "GROUND",
        "dualtype": "PSYCHIC",
        "evolve": [ 343, 344 ],
        "generation": 8
    },
    {
        "value": 345,
        "text": "Lileep",
        "type": "ROCK",
        "dualtype": "GRASS",
        "evolve": [ 345, 346 ],
        "generation": 8
    },
    {
        "value": 346,
        "text": "Cradily",
        "type": "ROCK",
        "dualtype": "GRASS",
        "evolve": [ 345, 346 ],
        "generation": 8
    },
    {
        "value": 347,
        "text": "Anorith",
        "type": "ROCK",
        "dualtype": "BUG",
        "evolve": [ 347, 348 ],
        "generation": 8
    },
    {
        "value": 348,
        "text": "Armaldo",
        "type": "ROCK",
        "dualtype": "BUG",
        "evolve": [ 347, 348 ],
        "generation": 8
    },
    {
        "value": 349,
        "text": "Feebas",
        "type": "WATER",
        "evolve": [ 349, 350 ],
        "generation": 8
    },
    {
        "value": 350,
        "text": "Milotic",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 349, 350 ],
        "generation": 8
    },
    {
        "value": 351,
        "text": "Castform",
        "type": "NORMAL",
        "evolve": [ 351, 1045, 1046, 1047 ],
        "generation": 8
    },
    {
        "value": 352,
        "text": "Kecleon",
        "type": "NORMAL",
        "evolve": [ 352 ],
        "generation": 8
    },
    {
        "value": 353,
        "text": "Shuppet",
        "type": "GHOST",
        "evolve": [ 353, 354, 1048 ],
        "generation": 8
    },
    {
        "value": 354,
        "text": "Banette",
        "type": "GHOST",
        "dualtype": "NORMAL",
        "evolve": [ 353, 354, 1048 ],
        "generation": 8
    },
    {
        "value": 355,
        "text": "Duskull",
        "type": "GHOST",
        "evolve": [ 355, 356, 477 ],
        "generation": 8
    },
    {
        "value": 356,
        "text": "Dusclops",
        "type": "GHOST",
        "evolve": [ 355, 356, 477 ],
        "generation": 8
    },
    {
        "value": 357,
        "text": "Tropius",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 357 ],
        "generation": 8
    },
    {
        "value": 358,
        "text": "Chimecho",
        "type": "PSYCHIC",
        "evolve": [ 433, 358 ],
        "generation": 8
    },
    {
        "value": 359,
        "text": "Absol",
        "type": "DARK",
        "evolve": [ 359, 1049 ],
        "generation": 8
    },
    {
        "value": 360,
        "text": "Wynaut",
        "type": "PSYCHIC",
        "evolve": [ 360, 202 ],
        "generation": 8
    },
    {
        "value": 361,
        "text": "Snorunt",
        "type": "ICE",
        "evolve": [ 361, 362, 478, 1050 ],
        "generation": 8
    },
    {
        "value": 362,
        "text": "Glalie",
        "type": "ICE",
        "dualtype": "ROCK",
        "evolve": [ 361, 362, 1050 ],
        "generation": 8
    },
    {
        "value": 363,
        "text": "Spheal",
        "type": "ICE",
        "dualtype": "WATER",
        "evolve": [ 363, 364, 365 ],
        "generation": 8
    },
    {
        "value": 364,
        "text": "Sealeo",
        "type": "ICE",
        "dualtype": "WATER",
        "evolve": [ 363, 364, 365 ],
        "generation": 8
    },
    {
        "value": 365,
        "text": "Walrein",
        "type": "ICE",
        "dualtype": "WATER",
        "evolve": [ 363, 364, 365 ],
        "generation": 8
    },
    {
        "value": 366,
        "text": "Clamperl",
        "type": "WATER",
        "evolve": [ 366, 367, 368 ],
        "generation": 8
    },
    {
        "value": 367,
        "text": "Huntail",
        "type": "WATER",
        "evolve": [ 366, 367 ],
        "generation": 8
    },
    {
        "value": 368,
        "text": "Gorebyss",
        "type": "WATER",
        "evolve": [ 366, 368 ],
        "generation": 8
    },
    {
        "value": 369,
        "text": "Relicanth",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 369 ],
        "generation": 8
    },
    {
        "value": 370,
        "text": "Luvdisc",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 370 ],
        "generation": 8
    },
    {
        "value": 371,
        "text": "Bagon",
        "type": "DRAGON",
        "evolve": [ 371, 372, 373, 1051 ],
        "generation": 8
    },
    {
        "value": 372,
        "text": "Shelgon",
        "type": "DRAGON",
        "evolve": [ 371, 372, 373, 1051 ],
        "generation": 8
    },
    {
        "value": 373,
        "text": "Salamence",
        "type": "DRAGON",
        "dualtype": "FLYING",
        "evolve": [ 371, 372, 373, 1051 ],
        "generation": 8
    },
    {
        "value": 374,
        "text": "Beldum",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 374, 375, 376, 1052 ],
        "generation": 8
    },
    {
        "value": 375,
        "text": "Metang",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 374, 375, 376, 1052 ],
        "generation": 8
    },
    {
        "value": 376,
        "text": "Metagross",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 374, 375, 376, 1052 ],
        "generation": 8
    },
    {
        "value": 377,
        "text": "Regirock",
        "type": "ROCK",
        "evolve": [ 377 ],
        "generation": 8
    },
    {
        "value": 378,
        "text": "Regice",
        "type": "ICE",
        "evolve": [ 378 ],
        "generation": 8
    },
    {
        "value": 379,
        "text": "Registeel",
        "type": "STEEL",
        "evolve": [ 379 ],
        "generation": 8
    },
    {
        "value": 380,
        "text": "Latias",
        "type": "DRAGON",
        "dualtype": "PSYCHIC",
        "evolve": [ 380, 1053 ],
        "generation": 8
    },
    {
        "value": 381,
        "text": "Latios",
        "type": "DRAGON",
        "dualtype": "PSYCHIC",
        "evolve": [ 381, 1054 ],
        "generation": 8
    },
    {
        "value": 382,
        "text": "Kyogre",
        "type": "WATER",
        "evolve": [ 382, 1055 ],
        "generation": 8
    },
    {
        "value": 383,
        "text": "Groudon",
        "type": "GROUND",
        "evolve": [ 383, 1056 ],
        "generation": 8
    },
    {
        "value": 384,
        "text": "Rayquaza",
        "type": "DRAGON",
        "dualtype": "FLYING",
        "evolve": [ 384, 1057 ],
        "generation": 8
    },
    {
        "value": 385,
        "text": "Jirachi",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 385 ],
        "generation": 8
    },
    {
        "value": 386,
        "text": "Deoxys",
        "type": "PSYCHIC",
        "evolve": [ 386, 1058, 1059, 1060 ],
        "generation": 8
    },
    {
        "value": 387,
        "text": "Turtwig",
        "type": "GRASS",
        "evolve": [ 387, 388, 389 ],
        "generation": 8
    },
    {
        "value": 388,
        "text": "Grotle",
        "type": "GRASS",
        "evolve": [ 387, 388, 389 ],
        "generation": 8
    },
    {
        "value": 389,
        "text": "Torterra",
        "type": "GRASS",
        "dualtype": "GROUND",
        "evolve": [ 387, 388, 389 ],
        "generation": 8
    },
    {
        "value": 390,
        "text": "Chimchar",
        "type": "FIRE",
        "evolve": [ 390, 391, 392 ],
        "generation": 8
    },
    {
        "value": 391,
        "text": "Monferno",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 390, 391, 392 ],
        "generation": 8
    },
    {
        "value": 392,
        "text": "Infernape",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 390, 391, 392 ],
        "generation": 8
    },
    {
        "value": 393,
        "text": "Piplup",
        "type": "WATER",
        "evolve": [ 393, 394, 395 ],
        "generation": 8
    },
    {
        "value": 394,
        "text": "Prinplup",
        "type": "WATER",
        "evolve": [ 393, 394, 395 ],
        "generation": 8
    },
    {
        "value": 395,
        "text": "Empoleon",
        "type": "WATER",
        "dualtype": "STEEL",
        "evolve": [ 393, 394, 395 ],
        "generation": 8
    },
    {
        "value": 396,
        "text": "Starly",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 396, 397, 398 ],
        "generation": 8
    },
    {
        "value": 397,
        "text": "Staravia",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 396, 397, 398 ],
        "generation": 8
    },
    {
        "value": 398,
        "text": "Staraptor",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 396, 397, 398 ],
        "generation": 8
    },
    {
        "value": 399,
        "text": "Bidoof",
        "type": "NORMAL",
        "evolve": [ 399, 400 ],
        "generation": 8
    },
    {
        "value": 400,
        "text": "Bibarel",
        "type": "NORMAL",
        "dualtype": "WATER",
        "evolve": [ 399, 400 ],
        "generation": 8
    },
    {
        "value": 401,
        "text": "Kricketot",
        "type": "BUG",
        "evolve": [ 401, 402 ],
        "generation": 8
    },
    {
        "value": 402,
        "text": "Kricketune",
        "type": "BUG",
        "evolve": [ 401, 402 ],
        "generation": 8
    },
    {
        "value": 403,
        "text": "Shinx",
        "type": "ELECTRIC",
        "evolve": [ 403, 404, 405 ],
        "generation": 8
    },
    {
        "value": 404,
        "text": "Luxio",
        "type": "ELECTRIC",
        "evolve": [ 403, 404, 405 ],
        "generation": 8
    },
    {
        "value": 405,
        "text": "Luxray",
        "type": "ELECTRIC",
        "dualtype": "DARK",
        "evolve": [ 403, 404, 405 ],
        "generation": 8
    },
    {
        "value": 406,
        "text": "Budew",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 406, 315, 407 ],
        "generation": 8
    },
    {
        "value": 407,
        "text": "Roserade",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 406, 315, 407 ],
        "generation": 8
    },
    {
        "value": 408,
        "text": "Cranidos",
        "type": "ROCK",
        "evolve": [ 408, 409 ],
        "generation": 8
    },
    {
        "value": 409,
        "text": "Rampardos",
        "type": "ROCK",
        "evolve": [ 408, 409 ],
        "generation": 8
    },
    {
        "value": 410,
        "text": "Shieldon",
        "type": "ROCK",
        "dualtype": "STEEL",
        "evolve": [ 410, 411 ],
        "generation": 8
    },
    {
        "value": 411,
        "text": "Bastiodon",
        "type": "ROCK",
        "dualtype": "STEEL",
        "evolve": [ 410, 411 ],
        "generation": 8
    },
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
        "value": 415,
        "text": "Combee",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 415, 416 ],
        "generation": 8
    },
    {
        "value": 416,
        "text": "Vespiquen",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 415, 416 ],
        "generation": 8
    },
    {
        "value": 417,
        "text": "Pachirisu",
        "type": "ELECTRIC",
        "evolve": [ 417 ],
        "generation": 8
    },
    {
        "value": 418,
        "text": "Buizel",
        "type": "WATER",
        "evolve": [ 418, 419 ],
        "generation": 8
    },
    {
        "value": 419,
        "text": "Floatzel",
        "type": "WATER",
        "evolve": [ 418, 419 ],
        "generation": 8
    },
    {
        "value": 420,
        "text": "Cherubi",
        "type": "GRASS",
        "evolve": [ 420, 421, 1065 ],
        "generation": 8
    },
    {
        "value": 421,
        "text": "Cherrim",
        "type": "GRASS",
        "evolve": [ 420, 421, 1065 ],
        "generation": 8
    },
    {
        "value": 422,
        "text": "Shellos",
        "type": "WATER",
        "evolve": [ 422, 423, 1066, 1067 ],
        "generation": 8
    },
    {
        "value": 423,
        "text": "Gastrodon",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 422, 423, 1066, 1067 ],
        "generation": 8
    },
    {
        "value": 424,
        "text": "Ambipom",
        "type": "NORMAL",
        "evolve": [ 190, 424 ],
        "generation": 8
    },
    {
        "value": 425,
        "text": "Drifloon",
        "type": "GHOST",
        "dualtype": "FLYING",
        "evolve": [ 425, 426 ],
        "generation": 8
    },
    {
        "value": 426,
        "text": "Drifblim",
        "type": "GHOST",
        "dualtype": "FLYING",
        "evolve": [ 425, 426 ],
        "generation": 8
    },
    {
        "value": 427,
        "text": "Buneary",
        "type": "NORMAL",
        "evolve": [ 427, 428, 1068 ],
        "generation": 8
    },
    {
        "value": 428,
        "text": "Lopunny",
        "type": "NORMAL",
        "dualtype": "FIGHTING",
        "evolve": [ 427, 428, 1068 ],
        "generation": 8
    },
    {
        "value": 429,
        "text": "Mismagius",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 200, 429 ],
        "generation": 8
    },
    {
        "value": 430,
        "text": "Honchkrow",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 198, 430 ],
        "generation": 8
    },
    {
        "value": 431,
        "text": "Glameow",
        "type": "NORMAL",
        "evolve": [ 431, 432 ],
        "generation": 8
    },
    {
        "value": 432,
        "text": "Purugly",
        "type": "NORMAL",
        "evolve": [ 431, 432 ],
        "generation": 8
    },
    {
        "value": 433,
        "text": "Chingling",
        "type": "PSYCHIC",
        "evolve": [ 433, 358 ],
        "generation": 8
    },
    {
        "value": 434,
        "text": "Stunky",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 434, 435 ],
        "generation": 8
    },
    {
        "value": 435,
        "text": "Skuntank",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 434, 435 ],
        "generation": 8
    },
    {
        "value": 436,
        "text": "Bronzor",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 436, 437 ],
        "generation": 8
    },
    {
        "value": 437,
        "text": "Bronzong",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 436, 437 ],
        "generation": 8
    },
    {
        "value": 438,
        "text": "Bonsly",
        "type": "ROCK",
        "evolve": [ 438, 185 ],
        "generation": 8
    },
    {
        "value": 439,
        "text": "Mime Jr.",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 439, 122, 978, 866 ],
        "generation": 8
    },
    {
        "value": 440,
        "text": "Happiny",
        "type": "NORMAL",
        "evolve": [ 440, 113, 242 ],
        "generation": 8
    },
    {
        "value": 441,
        "text": "Chatot",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 441 ],
        "generation": 8
    },
    {
        "value": 442,
        "text": "Spiritomb",
        "type": "GHOST",
        "dualtype": "DARK",
        "evolve": [ 442 ],
        "generation": 8
    },
    {
        "value": 443,
        "text": "Gible",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 443, 444, 445, 1069 ],
        "generation": 8
    },
    {
        "value": 444,
        "text": "Gabite",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 443, 444, 445, 1069 ],
        "generation": 8
    },
    {
        "value": 445,
        "text": "Garchomp",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 443, 444, 445, 1069 ],
        "generation": 8
    },
    {
        "value": 446,
        "text": "Munchlax",
        "type": "NORMAL",
        "evolve": [ 446, 143, 985 ],
        "generation": 8
    },
    {
        "value": 447,
        "text": "Riolu",
        "type": "FIGHTING",
        "evolve": [ 447, 448, 1070 ],
        "generation": 8
    },
    {
        "value": 448,
        "text": "Lucario",
        "type": "FIGHTING",
        "dualtype": "STEEL",
        "evolve": [ 447, 448, 1070 ],
        "generation": 8
    },
    {
        "value": 449,
        "text": "Hippopotas",
        "type": "GROUND",
        "evolve": [ 449, 450 ],
        "generation": 8
    },
    {
        "value": 450,
        "text": "Hippowdon",
        "type": "GROUND",
        "evolve": [ 449, 450 ],
        "generation": 8
    },
    {
        "value": 451,
        "text": "Skorupi",
        "type": "POISON",
        "dualtype": "BUG",
        "evolve": [ 451, 452 ],
        "generation": 8
    },
    {
        "value": 452,
        "text": "Drapion",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 451, 452 ],
        "generation": 8
    },
    {
        "value": 453,
        "text": "Croagunk",
        "type": "POISON",
        "dualtype": "FIGHTING",
        "evolve": [ 453, 454 ],
        "generation": 8
    },
    {
        "value": 454,
        "text": "Toxicroak",
        "type": "POISON",
        "dualtype": "FIGHTING",
        "evolve": [ 453, 454 ],
        "generation": 8
    },
    {
        "value": 455,
        "text": "Carnivine",
        "type": "GRASS",
        "dualtype": "STEEL",
        "evolve": [ 455 ],
        "generation": 8
    },
    {
        "value": 456,
        "text": "Finneon",
        "type": "WATER",
        "evolve": [ 456, 457 ],
        "generation": 8
    },
    {
        "value": 457,
        "text": "Lumineon",
        "type": "WATER",
        "evolve": [ 456, 457 ],
        "generation": 8
    },
    {
        "value": 458,
        "text": "Mantyke",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 458, 226 ],
        "generation": 8
    },
    {
        "value": 459,
        "text": "Snover",
        "type": "GRASS",
        "dualtype": "ICE",
        "evolve": [ 459, 460, 1071 ],
        "generation": 8
    },
    {
        "value": 460,
        "text": "Abomasnow",
        "type": "GRASS",
        "dualtype": "ICE",
        "evolve": [ 459, 460, 1071 ],
        "generation": 8
    },
    {
        "value": 461,
        "text": "Weavile",
        "type": "DARK",
        "dualtype": "ICE",
        "evolve": [ 215, 461 ],
        "generation": 8
    },
    {
        "value": 462,
        "text": "Magnezone",
        "type": "ELECTRIC",
        "dualtype": "STEEL",
        "evolve": [ 81, 82, 462 ],
        "generation": 8
    },
    {
        "value": 463,
        "text": "Lickilicky",
        "type": "NORMAL",
        "evolve": [ 108, 463 ],
        "generation": 8
    },
    {
        "value": 464,
        "text": "Rhyperior",
        "type": "GROUND",
        "dualtype": "ROCK",
        "evolve": [ 111, 112, 464 ],
        "generation": 8
    },
    {
        "value": 465,
        "text": "Tangrowth",
        "type": "GRASS",
        "evolve": [ 114, 465 ],
        "generation": 8
    },
    {
        "value": 466,
        "text": "Electivire",
        "type": "ELECTRIC",
        "dualtype": "FIGHTING",
        "evolve": [ 239, 125, 466 ],
        "generation": 8
    },
    {
        "value": 467,
        "text": "Magmortar",
        "type": "FIRE",
        "evolve": [ 240, 126, 467 ],
        "generation": 8
    },
    {
        "value": 468,
        "text": "Togekiss",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 175, 176, 468 ],
        "generation": 8
    },
    {
        "value": 469,
        "text": "Yanmega",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 193, 469 ],
        "generation": 8
    },
    {
        "value": 470,
        "text": "Leafeon",
        "type": "GRASS",
        "evolve": [ 133, 470, 982, 983 ],
        "generation": 8
    },
    {
        "value": 471,
        "text": "Glaceon",
        "type": "ICE",
        "evolve": [ 133, 471, 982, 983 ],
        "generation": 8
    },
    {
        "value": 472,
        "text": "Gliscor",
        "type": "GROUND",
        "dualtype": "FLYING",
        "evolve": [ 207, 472 ],
        "generation": 8
    },
    {
        "value": 473,
        "text": "Mamoswine",
        "type": "ICE",
        "dualtype": "GROUND",
        "evolve": [ 220, 221, 473 ],
        "generation": 8
    },
    {
        "value": 474,
        "text": "Porygon-Z",
        "type": "NORMAL",
        "evolve": [ 137, 233, 474 ],
        "generation": 8
    },
    {
        "value": 475,
        "text": "Gallade",
        "type": "PSYCHIC",
        "dualtype": "FIGHTING",
        "evolve": [ 280, 475, 281, 1072 ],
        "generation": 8
    },
    {
        "value": 476,
        "text": "Probopass",
        "type": "ROCK",
        "dualtype": "STEEL",
        "evolve": [ 299, 476 ],
        "generation": 8
    },
    {
        "value": 477,
        "text": "Dusknoir",
        "type": "GHOST",
        "evolve": [ 355, 356, 477 ],
        "generation": 8
    },
    {
        "value": 478,
        "text": "Froslass",
        "type": "ICE",
        "dualtype": "GHOST",
        "evolve": [ 361, 478 ],
        "generation": 8
    },
    {
        "value": 479,
        "text": "Rotom",
        "type": "ELECTRIC",
        "dualtype": "GHOST",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 480,
        "text": "Uxie",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 480 ],
        "generation": 8
    },
    {
        "value": 481,
        "text": "Mesprit",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 481 ],
        "generation": 8
    },
    {
        "value": 482,
        "text": "Azelf",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 482 ],
        "generation": 8
    },
    {
        "value": 483,
        "text": "Dialga",
        "type": "STEEL",
        "dualtype": "DRAGON",
        "evolve": [ 483, 1078 ],
        "generation": 8
    },
    {
        "value": 484,
        "text": "Palkia",
        "type": "WATER",
        "dualtype": "DRAGON",
        "evolve": [ 484, 1079 ],
        "generation": 8
    },
    {
        "value": 485,
        "text": "Heatran",
        "type": "FIRE",
        "dualtype": "STEEL",
        "evolve": [ 485 ],
        "generation": 8
    },
    {
        "value": 486,
        "text": "Regigigas",
        "type": "NORMAL",
        "evolve": [ 486 ],
        "generation": 8
    },
    {
        "value": 487,
        "text": "Giratina",
        "type": "GHOST",
        "dualtype": "DRAGON",
        "evolve": [ 487, 1080 ],
        "generation": 8
    },
    {
        "value": 488,
        "text": "Cresselia",
        "type": "PSYCHIC",
        "evolve": [ 488 ],
        "generation": 8
    },
    {
        "value": 489,
        "text": "Phione",
        "type": "WATER",
        "evolve": [ 489 ],
        "generation": 8
    },
    {
        "value": 490,
        "text": "Manaphy",
        "type": "WATER",
        "evolve": [ 490 ],
        "generation": 8
    },
    {
        "value": 491,
        "text": "Darkrai",
        "type": "DARK",
        "evolve": [ 491 ],
        "generation": 8
    },
    {
        "value": 492,
        "text": "Shaymin",
        "type": "GRASS",
        "evolve": [ 492, 1081 ],
        "generation": 8
    },
    {
        "value": 493,
        "text": "Arceus",
        "type": "NORMAL",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 494,
        "text": "Victini",
        "type": "PSYCHIC",
        "dualtype": "FIRE",
        "evolve": [ 494 ],
        "generation": 8
    },
    {
        "value": 495,
        "text": "Snivy",
        "type": "GRASS",
        "evolve": [ 495, 496, 497 ],
        "generation": 8
    },
    {
        "value": 496,
        "text": "Servine",
        "type": "GRASS",
        "evolve": [ 495, 496, 497 ],
        "generation": 8
    },
    {
        "value": 497,
        "text": "Serperior",
        "type": "GRASS",
        "evolve": [ 495, 496, 497 ],
        "generation": 8
    },
    {
        "value": 498,
        "text": "Tepig",
        "type": "FIRE",
        "evolve": [ 498, 499, 500 ],
        "generation": 8
    },
    {
        "value": 499,
        "text": "Pignite",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 498, 499, 500 ],
        "generation": 8
    },
    {
        "value": 500,
        "text": "Emboar",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 498, 499, 500 ],
        "generation": 8
    },
    {
        "value": 501,
        "text": "Oshawott",
        "type": "WATER",
        "evolve": [ 501, 502, 503, 1099 ],
        "generation": 8
    },
    {
        "value": 502,
        "text": "Dewott",
        "type": "WATER",
        "evolve": [ 501, 502, 503, 1099 ],
        "generation": 8
    },
    {
        "value": 503,
        "text": "Samurott",
        "type": "WATER",
        "evolve": [ 501, 502, 503, 1099 ],
        "generation": 8
    },
    {
        "value": 504,
        "text": "Patrat",
        "type": "NORMAL",
        "evolve": [ 504, 505 ],
        "generation": 8
    },
    {
        "value": 505,
        "text": "Watchog",
        "type": "NORMAL",
        "evolve": [ 504, 505 ],
        "generation": 8
    },
    {
        "value": 506,
        "text": "Lillipup",
        "type": "NORMAL",
        "evolve": [ 506, 507, 508 ],
        "generation": 8
    },
    {
        "value": 507,
        "text": "Herdier",
        "type": "NORMAL",
        "evolve": [ 506, 507, 508 ],
        "generation": 8
    },
    {
        "value": 508,
        "text": "Stoutland",
        "type": "NORMAL",
        "evolve": [ 506, 507, 508 ],
        "generation": 8
    },
    {
        "value": 509,
        "text": "Purrloin",
        "type": "DARK",
        "evolve": [ 509, 510 ],
        "generation": 8
    },
    {
        "value": 510,
        "text": "Liepard",
        "type": "DARK",
        "evolve": [ 509, 510 ],
        "generation": 8
    },
    {
        "value": 511,
        "text": "Pansage",
        "type": "GRASS",
        "evolve": [ 511, 512 ],
        "generation": 8
    },
    {
        "value": 512,
        "text": "Simisage",
        "type": "GRASS",
        "evolve": [ 511, 512 ],
        "generation": 8
    },
    {
        "value": 513,
        "text": "Pansear",
        "type": "FIRE",
        "evolve": [ 513, 514 ],
        "generation": 8
    },
    {
        "value": 514,
        "text": "Simisear",
        "type": "FIRE",
        "evolve": [ 513, 514 ],
        "generation": 8
    },
    {
        "value": 515,
        "text": "Panpour",
        "type": "WATER",
        "evolve": [ 515, 516 ],
        "generation": 8
    },
    {
        "value": 516,
        "text": "Simipour",
        "type": "WATER",
        "evolve": [ 515, 516 ],
        "generation": 8
    },
    {
        "value": 517,
        "text": "Munna",
        "type": "PSYCHIC",
        "evolve": [ 517, 518 ],
        "generation": 8
    },
    {
        "value": 518,
        "text": "Musharna",
        "type": "PSYCHIC",
        "evolve": [ 517, 518 ],
        "generation": 8
    },
    {
        "value": 519,
        "text": "Pidove",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 519, 520, 521 ],
        "generation": 8
    },
    {
        "value": 520,
        "text": "Tranquill",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 519, 520, 521 ],
        "generation": 8
    },
    {
        "value": 521,
        "text": "Unfezant",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 519, 520, 521 ],
        "generation": 8
    },
    {
        "value": 522,
        "text": "Blitzle",
        "type": "ELECTRIC",
        "evolve": [ 522, 523 ],
        "generation": 8
    },
    {
        "value": 523,
        "text": "Zebstrika",
        "type": "ELECTRIC",
        "evolve": [ 522, 523 ],
        "generation": 8
    },
    {
        "value": 524,
        "text": "Roggenrola",
        "type": "ROCK",
        "evolve": [ 524, 525, 526 ],
        "generation": 8
    },
    {
        "value": 525,
        "text": "Boldore",
        "type": "ROCK",
        "evolve": [ 524, 525, 526 ],
        "generation": 8
    },
    {
        "value": 526,
        "text": "Gigalith",
        "type": "ROCK",
        "evolve": [ 524, 525, 526 ],
        "generation": 8
    },
    {
        "value": 527,
        "text": "Woobat",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 527, 528 ],
        "generation": 8
    },
    {
        "value": 528,
        "text": "Swoobat",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 527, 528 ],
        "generation": 8
    },
    {
        "value": 529,
        "text": "Drilbur",
        "type": "GROUND",
        "evolve": [ 529, 530 ],
        "generation": 8
    },
    {
        "value": 530,
        "text": "Excadrill",
        "type": "GROUND",
        "dualtype": "STEEL",
        "evolve": [ 529, 530 ],
        "generation": 8
    },
    {
        "value": 531,
        "text": "Audino",
        "type": "NORMAL",
        "evolve": [ 531, 1100 ],
        "generation": 8
    },
    {
        "value": 532,
        "text": "Timburr",
        "type": "FIGHTING",
        "evolve": [ 532, 533, 534 ],
        "generation": 8
    },
    {
        "value": 533,
        "text": "Gurdurr",
        "type": "FIGHTING",
        "evolve": [ 532, 533, 534 ],
        "generation": 8
    },
    {
        "value": 534,
        "text": "Conkeldurr",
        "type": "FIGHTING",
        "evolve": [ 532, 533, 534 ],
        "generation": 8
    },
    {
        "value": 535,
        "text": "Tympole",
        "type": "WATER",
        "evolve": [ 535, 536, 537 ],
        "generation": 8
    },
    {
        "value": 536,
        "text": "Palpitoad",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 535, 536, 537 ],
        "generation": 8
    },
    {
        "value": 537,
        "text": "Seismitoad",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 535, 536, 537 ],
        "generation": 8
    },
    {
        "value": 538,
        "text": "Throh",
        "type": "FIGHTING",
        "evolve": [ 538 ],
        "generation": 8
    },
    {
        "value": 539,
        "text": "Sawk",
        "type": "FIGHTING",
        "evolve": [ 539 ],
        "generation": 8
    },
    {
        "value": 540,
        "text": "Sewaddle",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 540, 541, 542 ],
        "generation": 8
    },
    {
        "value": 541,
        "text": "Swadloon",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 540, 541, 542 ],
        "generation": 8
    },
    {
        "value": 542,
        "text": "Leavanny",
        "type": "BUG",
        "dualtype": "GRASS",
        "evolve": [ 540, 541, 542 ],
        "generation": 8
    },
    {
        "value": 543,
        "text": "Venipede",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 543, 544, 545 ],
        "generation": 8
    },
    {
        "value": 544,
        "text": "Whirlipede",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 543, 544, 545 ],
        "generation": 8
    },
    {
        "value": 545,
        "text": "Scolipede",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 543, 544, 545 ],
        "generation": 8
    },
    {
        "value": 546,
        "text": "Cottonee",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 546, 547 ],
        "generation": 8
    },
    {
        "value": 547,
        "text": "Whimsicott",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 546, 547 ],
        "generation": 8
    },
    {
        "value": 548,
        "text": "Petilil",
        "type": "GRASS",
        "evolve": [ 548, 549, 1101 ],
        "generation": 8
    },
    {
        "value": 549,
        "text": "Lilligant",
        "type": "GRASS",
        "evolve": [ 548, 549, 1101 ],
        "generation": 8
    },
    {
        "value": 550,
        "text": "Basculin",
        "type": "WATER",
        "evolve": [ 550, 1102 ],
        "generation": 8
    },
    {
        "value": 551,
        "text": "Sandile",
        "type": "GROUND",
        "dualtype": "DARK",
        "evolve": [ 551, 552, 553 ],
        "generation": 8
    },
    {
        "value": 552,
        "text": "Krokorok",
        "type": "GROUND",
        "dualtype": "DARK",
        "evolve": [ 551, 552, 553 ],
        "generation": 8
    },
    {
        "value": 553,
        "text": "Krookodile",
        "type": "GROUND",
        "dualtype": "DARK",
        "evolve": [ 551, 552, 553 ],
        "generation": 8
    },
    {
        "value": 554,
        "text": "Darumaka",
        "type": "FIRE",
        "evolve": [ 554, 555, 1105, 1107 ],
        "generation": 8
    },
    {
        "value": 555,
        "text": "Darmanitan",
        "type": "FIRE",
        "evolve": [ 554, 555, 1105, 1107 ],
        "generation": 8
    },
    {
        "value": 556,
        "text": "Maractus",
        "type": "GRASS",
        "evolve": [ 556 ],
        "generation": 8
    },
    {
        "value": 557,
        "text": "Dwebble",
        "type": "BUG",
        "dualtype": "ROCK",
        "evolve": [ 557, 558 ],
        "generation": 8
    },
    {
        "value": 558,
        "text": "Crustle",
        "type": "BUG",
        "dualtype": "ROCK",
        "evolve": [ 557, 558 ],
        "generation": 8
    },
    {
        "value": 559,
        "text": "Scraggy",
        "type": "DARK",
        "dualtype": "FIGHTING",
        "evolve": [ 559, 560 ],
        "generation": 8
    },
    {
        "value": 560,
        "text": "Scrafty",
        "type": "DARK",
        "dualtype": "FIGHTING",
        "evolve": [ 559, 560 ],
        "generation": 8
    },
    {
        "value": 561,
        "text": "Sigilyph",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 561 ],
        "generation": 8
    },
    {
        "value": 562,
        "text": "Yamask",
        "type": "GHOST",
        "evolve": [ 562, 563 ],
        "generation": 8
    },
    {
        "value": 563,
        "text": "Cofagrigus",
        "type": "GHOST",
        "evolve": [ 562, 563 ],
        "generation": 8
    },
    {
        "value": 564,
        "text": "Tirtouga",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 564, 565 ],
        "generation": 8
    },
    {
        "value": 565,
        "text": "Carracosta",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 564, 565 ],
        "generation": 8
    },
    {
        "value": 566,
        "text": "Archen",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 566, 567 ],
        "generation": 8
    },
    {
        "value": 567,
        "text": "Archeops",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 566, 567 ],
        "generation": 8
    },
    {
        "value": 568,
        "text": "Trubbish",
        "type": "POISON",
        "evolve": [ 568, 569, 1109 ],
        "generation": 8
    },
    {
        "value": 569,
        "text": "Garbodor",
        "type": "POISON",
        "evolve": [ 568, 569, 1109 ],
        "generation": 8
    },
    {
        "value": 570,
        "text": "Zorua",
        "type": "DARK",
        "evolve": [ 570, 571 ],
        "generation": 8
    },
    {
        "value": 571,
        "text": "Zoroark",
        "type": "DARK",
        "evolve": [ 570, 571 ],
        "generation": 8
    },
    {
        "value": 572,
        "text": "Minccino",
        "type": "NORMAL",
        "evolve": [ 572, 573 ],
        "generation": 8
    },
    {
        "value": 573,
        "text": "Cinccino",
        "type": "NORMAL",
        "evolve": [ 572, 573 ],
        "generation": 8
    },
    {
        "value": 574,
        "text": "Gothita",
        "type": "PSYCHIC",
        "evolve": [ 574, 575, 576 ],
        "generation": 8
    },
    {
        "value": 575,
        "text": "Gothorita",
        "type": "PSYCHIC",
        "evolve": [ 574, 575, 576 ],
        "generation": 8
    },
    {
        "value": 576,
        "text": "Gothitelle",
        "type": "PSYCHIC",
        "evolve": [ 574, 575, 576 ],
        "generation": 8
    },
    {
        "value": 577,
        "text": "Solosis",
        "type": "PSYCHIC",
        "evolve": [ 577, 578, 579 ],
        "generation": 8
    },
    {
        "value": 578,
        "text": "Duosion",
        "type": "PSYCHIC",
        "evolve": [ 577, 578, 579 ],
        "generation": 8
    },
    {
        "value": 579,
        "text": "Reuniclus",
        "type": "PSYCHIC",
        "evolve": [ 577, 578, 579 ],
        "generation": 8
    },
    {
        "value": 580,
        "text": "Ducklett",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 580, 581 ],
        "generation": 8
    },
    {
        "value": 581,
        "text": "Swanna",
        "type": "WATER",
        "dualtype": "FLYING",
        "evolve": [ 580, 581 ],
        "generation": 8
    },
    {
        "value": 582,
        "text": "Vanillite",
        "type": "ICE",
        "evolve": [ 582, 583, 584 ],
        "generation": 8
    },
    {
        "value": 583,
        "text": "Vanillish",
        "type": "ICE",
        "evolve": [ 582, 583, 584 ],
        "generation": 8
    },
    {
        "value": 584,
        "text": "Vanilluxe",
        "type": "ICE",
        "evolve": [ 582, 583, 584 ],
        "generation": 8
    },
    {
        "value": 585,
        "text": "Deerling",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 585, 586 ],
        "generation": 8
    },
    {
        "value": 586,
        "text": "Sawsbuck",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 585, 586 ],
        "generation": 8
    },
    {
        "value": 587,
        "text": "Emolga",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 587 ],
        "generation": 8
    },
    {
        "value": 588,
        "text": "Karrablast",
        "type": "BUG",
        "evolve": [ 588, 589 ],
        "generation": 8
    },
    {
        "value": 589,
        "text": "Escavalier",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 588, 589 ],
        "generation": 8
    },
    {
        "value": 590,
        "text": "Foongus",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 590, 591 ],
        "generation": 8
    },
    {
        "value": 591,
        "text": "Amoonguss",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 590, 591 ],
        "generation": 8
    },
    {
        "value": 592,
        "text": "Frillish",
        "type": "WATER",
        "dualtype": "GHOST",
        "evolve": [ 592, 593 ],
        "generation": 8
    },
    {
        "value": 593,
        "text": "Jellicent",
        "type": "WATER",
        "dualtype": "GHOST",
        "evolve": [ 592, 593 ],
        "generation": 8
    },
    {
        "value": 594,
        "text": "Alomomola",
        "type": "WATER",
        "evolve": [ 594 ],
        "generation": 8
    },
    {
        "value": 595,
        "text": "Joltik",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 595, 596 ],
        "generation": 8
    },
    {
        "value": 596,
        "text": "Galvantula",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 595, 596 ],
        "generation": 8
    },
    {
        "value": 597,
        "text": "Ferroseed",
        "type": "GRASS",
        "dualtype": "STEEL",
        "evolve": [ 597, 598 ],
        "generation": 8
    },
    {
        "value": 598,
        "text": "Ferrothorn",
        "type": "GRASS",
        "dualtype": "STEEL",
        "evolve": [ 597, 598 ],
        "generation": 8
    },
    {
        "value": 599,
        "text": "Klink",
        "type": "STEEL",
        "evolve": [ 599, 600, 601 ],
        "generation": 8
    },
    {
        "value": 600,
        "text": "Klang",
        "type": "STEEL",
        "evolve": [ 599, 600, 601 ],
        "generation": 8
    },
    {
        "value": 601,
        "text": "Klinklang",
        "type": "STEEL",
        "evolve": [ 599, 600, 601 ],
        "generation": 8
    },
    {
        "value": 602,
        "text": "Tynamo",
        "type": "ELECTRIC",
        "evolve": [ 602, 603, 604 ],
        "generation": 8
    },
    {
        "value": 603,
        "text": "Eelektrik",
        "type": "ELECTRIC",
        "evolve": [ 602, 603, 604 ],
        "generation": 8
    },
    {
        "value": 604,
        "text": "Eelektross",
        "type": "ELECTRIC",
        "evolve": [ 602, 603, 604 ],
        "generation": 8
    },
    {
        "value": 605,
        "text": "Elgyem",
        "type": "PSYCHIC",
        "evolve": [ 605, 606 ],
        "generation": 8
    },
    {
        "value": 606,
        "text": "Beheeyem",
        "type": "PSYCHIC",
        "evolve": [ 605, 606 ],
        "generation": 8
    },
    {
        "value": 607,
        "text": "Litwick",
        "type": "GHOST",
        "dualtype": "FIRE",
        "evolve": [ 607, 608, 609 ],
        "generation": 8
    },
    {
        "value": 608,
        "text": "Lampent",
        "type": "GHOST",
        "dualtype": "FIRE",
        "evolve": [ 607, 608, 609 ],
        "generation": 8
    },
    {
        "value": 609,
        "text": "Chandelure",
        "type": "GHOST",
        "dualtype": "FIRE",
        "evolve": [ 607, 608, 609 ],
        "generation": 8
    },
    {
        "value": 610,
        "text": "Axew",
        "type": "DRAGON",
        "evolve": [ 610, 611, 612 ],
        "generation": 8
    },
    {
        "value": 611,
        "text": "Fraxure",
        "type": "DRAGON",
        "evolve": [ 610, 611, 612 ],
        "generation": 8
    },
    {
        "value": 612,
        "text": "Haxorus",
        "type": "DRAGON",
        "evolve": [ 610, 611, 612 ],
        "generation": 8
    },
    {
        "value": 613,
        "text": "Cubchoo",
        "type": "ICE",
        "evolve": [ 613, 614 ],
        "generation": 8
    },
    {
        "value": 614,
        "text": "Beartic",
        "type": "ICE",
        "evolve": [ 613, 614 ],
        "generation": 8
    },
    {
        "value": 615,
        "text": "Cryogonal",
        "type": "ICE",
        "evolve": [ 615 ],
        "generation": 8
    },
    {
        "value": 616,
        "text": "Shelmet",
        "type": "BUG",
        "evolve": [ 616, 617 ],
        "generation": 8
    },
    {
        "value": 617,
        "text": "Accelgor",
        "type": "BUG",
        "evolve": [ 616, 617 ],
        "generation": 8
    },
    {
        "value": 618,
        "text": "Stunfisk",
        "type": "GROUND",
        "dualtype": "ELECTRIC",
        "evolve": [ 618, 1118 ],
        "generation": 8
    },
    {
        "value": 619,
        "text": "Mienfoo",
        "type": "FIGHTING",
        "evolve": [ 619, 620 ],
        "generation": 8
    },
    {
        "value": 620,
        "text": "Mienshao",
        "type": "FIGHTING",
        "evolve": [ 619, 620 ],
        "generation": 8
    },
    {
        "value": 621,
        "text": "Druddigon",
        "type": "DRAGON",
        "evolve": [ 621 ],
        "generation": 8
    },
    {
        "value": 622,
        "text": "Golett",
        "type": "GROUND",
        "dualtype": "GHOST",
        "evolve": [ 622, 623 ],
        "generation": 8
    },
    {
        "value": 623,
        "text": "Golurk",
        "type": "GROUND",
        "dualtype": "GHOST",
        "evolve": [ 622, 623 ],
        "generation": 8
    },
    {
        "value": 624,
        "text": "Pawniard",
        "type": "DARK",
        "dualtype": "STEEL",
        "evolve": [ 624, 625 ],
        "generation": 8
    },
    {
        "value": 625,
        "text": "Bisharp",
        "type": "DARK",
        "dualtype": "STEEL",
        "evolve": [ 624, 625 ],
        "generation": 8
    },
    {
        "value": 626,
        "text": "Bouffalant",
        "type": "NORMAL",
        "evolve": [ 626 ],
        "generation": 8
    },
    {
        "value": 627,
        "text": "Rufflet",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 627, 628, 1119 ],
        "generation": 8
    },
    {
        "value": 628,
        "text": "Braviary",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 627, 628, 1119 ],
        "generation": 8
    },
    {
        "value": 629,
        "text": "Vullaby",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 629, 630 ],
        "generation": 8
    },
    {
        "value": 630,
        "text": "Mandibuzz",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 629, 630 ],
        "generation": 8
    },
    {
        "value": 631,
        "text": "Heatmor",
        "type": "FIRE",
        "evolve": [ 631 ],
        "generation": 8
    },
    {
        "value": 632,
        "text": "Durant",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 632 ],
        "generation": 8
    },
    {
        "value": 633,
        "text": "Deino",
        "type": "DARK",
        "dualtype": "DRAGON",
        "evolve": [ 633, 634, 635 ],
        "generation": 8
    },
    {
        "value": 634,
        "text": "Zweilous",
        "type": "DARK",
        "dualtype": "DRAGON",
        "evolve": [ 633, 634, 635 ],
        "generation": 8
    },
    {
        "value": 635,
        "text": "Hydreigon",
        "type": "DARK",
        "dualtype": "DRAGON",
        "evolve": [ 633, 634, 635 ],
        "generation": 8
    },
    {
        "value": 636,
        "text": "Larvesta",
        "type": "BUG",
        "dualtype": "FIRE",
        "evolve": [ 636 ],
        "generation": 8
    },
    {
        "value": 637,
        "text": "Volcarona",
        "type": "BUG",
        "dualtype": "FIRE",
        "evolve": [ 637 ],
        "generation": 8
    },
    {
        "value": 638,
        "text": "Cobalion",
        "type": "STEEL",
        "dualtype": "FIGHTING",
        "evolve": [ 638 ],
        "generation": 8
    },
    {
        "value": 639,
        "text": "Terrakion",
        "type": "ROCK",
        "dualtype": "FIGHTING",
        "evolve": [ 639 ],
        "generation": 8
    },
    {
        "value": 640,
        "text": "Virizion",
        "type": "GRASS",
        "dualtype": "FIGHTING",
        "evolve": [ 640 ],
        "generation": 8
    },
    {
        "value": 641,
        "text": "Tornadus",
        "type": "FLYING",
        "evolve": [ 641, 1120 ],
        "generation": 8
    },
    {
        "value": 642,
        "text": "Thundurus",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 642, 1121 ],
        "generation": 8
    },
    {
        "value": 643,
        "text": "Reshiram",
        "type": "DRAGON",
        "dualtype": "FIRE",
        "evolve": [ 643 ],
        "generation": 8
    },
    {
        "value": 644,
        "text": "Zekrom",
        "type": "DRAGON",
        "dualtype": "ELECTRIC",
        "evolve": [ 644 ],
        "generation": 8
    },
    {
        "value": 645,
        "text": "Landorus",
        "type": "GROUND",
        "dualtype": "FLYING",
        "evolve": [ 645, 1122 ],
        "generation": 8
    },
    {
        "value": 646,
        "text": "Kyurem",
        "type": "DRAGON",
        "dualtype": "ICE",
        "evolve": [ 646, 1123, 1124 ],
        "generation": 8
    },
    {
        "value": 647,
        "text": "Keldeo",
        "type": "WATER",
        "dualtype": "FIGHTING",
        "evolve": [ 647, 1125 ],
        "generation": 8
    },
    {
        "value": 648,
        "text": "Meloetta",
        "type": "NORMAL",
        "dualtype": "PSYCHIC",
        "evolve": [ 648, 1126 ],
        "generation": 8
    },
    {
        "value": 649,
        "text": "Genesect",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 649, 1127, 1128, 1129, 1130 ],
        "generation": 8
    },
    {
        "value": 650,
        "text": "Chespin",
        "type": "GRASS",
        "evolve": [ 650, 651, 652 ],
        "generation": 8
    },
    {
        "value": 651,
        "text": "Quilladin",
        "type": "GRASS",
        "evolve": [ 650, 651, 652 ],
        "generation": 8
    },
    {
        "value": 652,
        "text": "Chesnaught",
        "type": "GRASS",
        "dualtype": "FIGHTING",
        "evolve": [ 650, 651, 652 ],
        "generation": 8
    },
    {
        "value": 653,
        "text": "Fennekin",
        "type": "FIRE",
        "evolve": [ 653, 654, 655 ],
        "generation": 8
    },
    {
        "value": 654,
        "text": "Braixen",
        "type": "FIRE",
        "evolve": [ 653, 654, 655 ],
        "generation": 8
    },
    {
        "value": 655,
        "text": "Delphox",
        "type": "FIRE",
        "dualtype": "PSYCHIC",
        "evolve": [ 653, 654, 655 ],
        "generation": 8
    },
    {
        "value": 656,
        "text": "Froakie",
        "type": "WATER",
        "evolve": [ 656, 657, 658, 1131, 1132 ],
        "generation": 8
    },
    {
        "value": 657,
        "text": "Frogadier",
        "type": "WATER",
        "evolve": [ 656, 657, 658, 1131, 1132 ],
        "generation": 8
    },
    {
        "value": 658,
        "text": "Greninja",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 656, 657, 658, 1131, 1132 ],
        "generation": 8
    },
    {
        "value": 659,
        "text": "Bunnelby",
        "type": "NORMAL",
        "evolve": [ 659, 660 ],
        "generation": 8
    },
    {
        "value": 660,
        "text": "Diggersby",
        "type": "NORMAL",
        "dualtype": "GROUND",
        "evolve": [ 659, 660 ],
        "generation": 8
    },
    {
        "value": 661,
        "text": "Fletchling",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 661, 662, 663 ],
        "generation": 8
    },
    {
        "value": 662,
        "text": "Fletchinder",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 661, 662, 663 ],
        "generation": 8
    },
    {
        "value": 663,
        "text": "Talonflame",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 661, 662, 663 ],
        "generation": 8
    },
    {
        "value": 664,
        "text": "Scatterbug",
        "type": "BUG",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 665,
        "text": "Spewpa",
        "type": "BUG",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 666,
        "text": "Vivillon",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 667,
        "text": "Litleo",
        "type": "FIRE",
        "dualtype": "NORMAL",
        "evolve": [ 667, 668 ],
        "generation": 8
    },
    {
        "value": 668,
        "text": "Pyroar",
        "type": "FIRE",
        "dualtype": "NORMAL",
        "evolve": [ 667, 668 ],
        "generation": 8
    },
    {
        "value": 669,
        "text": "Flabébé",
        "type": "FAIRY",
        "evolve": [ 669, 670, 671, 1160 ],
        "generation": 8
    },
    {
        "value": 670,
        "text": "Floette",
        "type": "FAIRY",
        "evolve": [ 669, 670, 671, 1160 ],
        "generation": 8
    },
    {
        "value": 671,
        "text": "Florges",
        "type": "FAIRY",
        "evolve": [ 669, 670, 671, 1160 ],
        "generation": 8
    },
    {
        "value": 672,
        "text": "Skiddo",
        "type": "GRASS",
        "evolve": [ 672, 673 ],
        "generation": 8
    },
    {
        "value": 673,
        "text": "Gogoat",
        "type": "GRASS",
        "evolve": [ 672, 673 ],
        "generation": 8
    },
    {
        "value": 674,
        "text": "Pancham",
        "type": "FIGHTING",
        "evolve": [ 674, 675 ],
        "generation": 8
    },
    {
        "value": 675,
        "text": "Pangoro",
        "type": "FIGHTING",
        "dualtype": "DARK",
        "evolve": [ 674, 675 ],
        "generation": 8
    },
    {
        "value": 676,
        "text": "Furfrou",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 677,
        "text": "Espurr",
        "type": "PSYCHIC",
        "evolve": [ 677, 678, 1174 ],
        "generation": 8
    },
    {
        "value": 678,
        "text": "Meowstic",
        "type": "PSYCHIC",
        "evolve": [ 677, 678, 1174 ],
        "generation": 8
    },
    {
        "value": 679,
        "text": "Honedge",
        "type": "STEEL",
        "dualtype": "GHOST",
        "evolve": [ 679, 680, 681, 1175 ],
        "generation": 8
    },
    {
        "value": 680,
        "text": "Doublade",
        "type": "STEEL",
        "dualtype": "GHOST",
        "evolve": [ 679, 680, 681, 1175 ],
        "generation": 8
    },
    {
        "value": 681,
        "text": "Aegislash",
        "type": "STEEL",
        "dualtype": "GHOST",
        "evolve": [ 679, 680, 681, 1175 ],
        "generation": 8
    },
    {
        "value": 682,
        "text": "Spritzee",
        "type": "FAIRY",
        "evolve": [ 682, 683 ],
        "generation": 8
    },
    {
        "value": 683,
        "text": "Aromatisse",
        "type": "FAIRY",
        "evolve": [ 682, 683 ],
        "generation": 8
    },
    {
        "value": 684,
        "text": "Swirlix",
        "type": "FAIRY",
        "evolve": [ 684, 685 ],
        "generation": 8
    },
    {
        "value": 685,
        "text": "Slurpuff",
        "type": "FAIRY",
        "evolve": [ 684, 685 ],
        "generation": 8
    },
    {
        "value": 686,
        "text": "Inkay",
        "type": "DARK",
        "dualtype": "PSYCHIC",
        "evolve": [ 686, 687 ],
        "generation": 8
    },
    {
        "value": 687,
        "text": "Malamar",
        "type": "DARK",
        "dualtype": "PSYCHIC",
        "evolve": [ 686, 687 ],
        "generation": 8
    },
    {
        "value": 688,
        "text": "Binacle",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 688, 689 ],
        "generation": 8
    },
    {
        "value": 689,
        "text": "Barbaracle",
        "type": "ROCK",
        "dualtype": "WATER",
        "evolve": [ 688, 689 ],
        "generation": 8
    },
    {
        "value": 690,
        "text": "Skrelp",
        "type": "POISON",
        "dualtype": "WATER",
        "evolve": [ 690, 691 ],
        "generation": 8
    },
    {
        "value": 691,
        "text": "Dragalge",
        "type": "POISON",
        "dualtype": "DRAGON",
        "evolve": [ 690, 691 ],
        "generation": 8
    },
    {
        "value": 692,
        "text": "Clauncher",
        "type": "WATER",
        "evolve": [ 692, 693 ],
        "generation": 8
    },
    {
        "value": 693,
        "text": "Clawitzer",
        "type": "WATER",
        "evolve": [ 692, 693 ],
        "generation": 8
    },
    {
        "value": 694,
        "text": "Helioptile",
        "type": "ELECTRIC",
        "dualtype": "NORMAL",
        "evolve": [ 694, 695 ],
        "generation": 8
    },
    {
        "value": 695,
        "text": "Heliolisk",
        "type": "ELECTRIC",
        "dualtype": "NORMAL",
        "evolve": [ 694, 695 ],
        "generation": 8
    },
    {
        "value": 696,
        "text": "Tyrunt",
        "type": "ROCK",
        "dualtype": "DRAGON",
        "evolve": [ 696, 697 ],
        "generation": 8
    },
    {
        "value": 697,
        "text": "Tyrantrum",
        "type": "ROCK",
        "dualtype": "DRAGON",
        "evolve": [ 696, 697 ],
        "generation": 8
    },
    {
        "value": 698,
        "text": "Amaura",
        "type": "ROCK",
        "dualtype": "ICE",
        "evolve": [ 698, 699 ],
        "generation": 8
    },
    {
        "value": 699,
        "text": "Aurorus",
        "type": "ROCK",
        "dualtype": "ICE",
        "evolve": [ 698, 699 ],
        "generation": 8
    },
    {
        "value": 700,
        "text": "Sylveon",
        "type": "FAIRY",
        "evolve": [ 133, 700, 982, 983 ],
        "generation": 8
    },
    {
        "value": 701,
        "text": "Hawlucha",
        "type": "FIGHTING",
        "dualtype": "FLYING",
        "evolve": [ 701 ],
        "generation": 8
    },
    {
        "value": 702,
        "text": "Dedenne",
        "type": "ELECTRIC",
        "dualtype": "FAIRY",
        "evolve": [ 702 ],
        "generation": 8
    },
    {
        "value": 703,
        "text": "Carbink",
        "type": "ROCK",
        "dualtype": "FAIRY",
        "evolve": [ 703 ],
        "generation": 8
    },
    {
        "value": 704,
        "text": "Goomy",
        "type": "DRAGON",
        "evolve": [ 704, 705, 706 ],
        "generation": 8
    },
    {
        "value": 705,
        "text": "Sliggoo",
        "type": "DRAGON",
        "evolve": [ 704, 705, 706 ],
        "generation": 8
    },
    {
        "value": 706,
        "text": "Goodra",
        "type": "DRAGON",
        "evolve": [ 704, 705, 706 ],
        "generation": 8
    },
    {
        "value": 707,
        "text": "Klefki",
        "type": "STEEL",
        "dualtype": "FAIRY",
        "evolve": [ 707 ],
        "generation": 8
    },
    {
        "value": 708,
        "text": "Phantump",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 708, 709 ],
        "generation": 8
    },
    {
        "value": 709,
        "text": "Trevenant",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 708, 709 ],
        "generation": 8
    },
    {
        "value": 710,
        "text": "Pumpkaboo",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 710, 711 ],
        "generation": 8
    },
    {
        "value": 711,
        "text": "Gourgeist",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 710, 711 ],
        "generation": 8
    },
    {
        "value": 712,
        "text": "Bergmite",
        "type": "ICE",
        "evolve": [ 712, 713, 1184 ],
        "generation": 8
    },
    {
        "value": 713,
        "text": "Avalugg",
        "type": "ICE",
        "evolve": [ 712, 713, 1184 ],
        "generation": 8
    },
    {
        "value": 714,
        "text": "Noibat",
        "type": "FLYING",
        "dualtype": "DRAGON",
        "evolve": [ 714, 715 ],
        "generation": 8
    },
    {
        "value": 715,
        "text": "Noivern",
        "type": "FLYING",
        "dualtype": "DRAGON",
        "evolve": [ 714, 715 ],
        "generation": 8
    },
    {
        "value": 716,
        "text": "Xerneas",
        "type": "FAIRY",
        "evolve": [ 716, 1185 ],
        "generation": 8
    },
    {
        "value": 717,
        "text": "Yveltal",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 717 ],
        "generation": 8
    },
    {
        "value": 718,
        "text": "Zygarde",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 718, 1186, 1187, 1188, 1189 ],
        "generation": 8
    },
    {
        "value": 719,
        "text": "Diancie",
        "type": "ROCK",
        "dualtype": "FAIRY",
        "evolve": [ 719, 1190 ],
        "generation": 8
    },
    {
        "value": 720,
        "text": "Hoopa",
        "type": "PSYCHIC",
        "dualtype": "GHOST",
        "evolve": [ 720, 1191 ],
        "generation": 8
    },
    {
        "value": 721,
        "text": "Volcanion",
        "type": "FIRE",
        "dualtype": "WATER",
        "evolve": [ 721 ],
        "generation": 8
    },
    {
        "value": 722,
        "text": "Rowlet",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 722, 723, 724, 1192 ],
        "generation": 8
    },
    {
        "value": 723,
        "text": "Dartrix",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 722, 723, 724, 1192 ],
        "generation": 8
    },
    {
        "value": 724,
        "text": "Decidueye",
        "type": "GRASS",
        "dualtype": "GHOST",
        "evolve": [ 722, 723, 724, 1192 ],
        "generation": 8
    },
    {
        "value": 725,
        "text": "Litten",
        "type": "FIRE",
        "evolve": [ 725, 726, 727 ],
        "generation": 8
    },
    {
        "value": 726,
        "text": "Torracat",
        "type": "FIRE",
        "evolve": [ 725, 726, 727 ],
        "generation": 8
    },
    {
        "value": 727,
        "text": "Incineroar",
        "type": "FIRE",
        "dualtype": "DARK",
        "evolve": [ 725, 726, 727 ],
        "generation": 8
    },
    {
        "value": 728,
        "text": "Popplio",
        "type": "WATER",
        "evolve": [ 728, 729, 730 ],
        "generation": 8
    },
    {
        "value": 729,
        "text": "Brionne",
        "type": "WATER",
        "evolve": [ 728, 729, 730 ],
        "generation": 8
    },
    {
        "value": 730,
        "text": "Primarina",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 728, 729, 730 ],
        "generation": 8
    },
    {
        "value": 731,
        "text": "Pikipek",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 731, 732, 733 ],
        "generation": 8
    },
    {
        "value": 732,
        "text": "Trumbeak",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 731, 732, 733 ],
        "generation": 8
    },
    {
        "value": 733,
        "text": "Toucannon",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 731, 732, 733 ],
        "generation": 8
    },
    {
        "value": 734,
        "text": "Yungoos",
        "type": "NORMAL",
        "evolve": [ 734, 735, 1193 ],
        "generation": 8
    },
    {
        "value": 735,
        "text": "Gumshoos",
        "type": "NORMAL",
        "evolve": [ 734, 735, 1193 ],
        "generation": 8
    },
    {
        "value": 736,
        "text": "Grubbin",
        "type": "BUG",
        "evolve": [ 736, 737, 738, 1194 ],
        "generation": 8
    },
    {
        "value": 737,
        "text": "Charjabug",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 736, 737, 738, 1194 ],
        "generation": 8
    },
    {
        "value": 738,
        "text": "Vikavolt",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 736, 737, 738, 1194 ],
        "generation": 8
    },
    {
        "value": 739,
        "text": "Crabrawler",
        "type": "FIGHTING",
        "evolve": [ 739, 740 ],
        "generation": 8
    },
    {
        "value": 740,
        "text": "Crabominable",
        "type": "FIGHTING",
        "dualtype": "ICE",
        "evolve": [ 739, 740 ],
        "generation": 8
    },
    {
        "value": 741,
        "text": "Oricorio",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 741, 1195, 1196, 1197 ],
        "generation": 8
    },
    {
        "value": 742,
        "text": "Cutiefly",
        "type": "BUG",
        "dualtype": "FAIRY",
        "evolve": [ 742, 743, 1198 ],
        "generation": 8
    },
    {
        "value": 743,
        "text": "Ribombee",
        "type": "BUG",
        "dualtype": "FAIRY",
        "evolve": [ 742, 743, 1198 ],
        "generation": 8
    },
    {
        "value": 744,
        "text": "Rockruff",
        "type": "ROCK",
        "evolve": [ 744, 745, 1200 ],
        "generation": 8
    },
    {
        "value": 745,
        "text": "Lycanroc",
        "type": "ROCK",
        "evolve": [ 744, 745, 1200 ],
        "generation": 8
    },
    {
        "value": 746,
        "text": "Wishiwashi",
        "type": "WATER",
        "evolve": [ 746, 1202 ],
        "generation": 8
    },
    {
        "value": 747,
        "text": "Mareanie",
        "type": "POISON",
        "dualtype": "WATER",
        "evolve": [ 747, 748 ],
        "generation": 8
    },
    {
        "value": 748,
        "text": "Toxapex",
        "type": "POISON",
        "dualtype": "WATER",
        "evolve": [ 747, 748 ],
        "generation": 8
    },
    {
        "value": 749,
        "text": "Mudbray",
        "type": "GROUND",
        "evolve": [ 749, 750 ],
        "generation": 8
    },
    {
        "value": 750,
        "text": "Mudsdale",
        "type": "GROUND",
        "evolve": [ 749, 750 ],
        "generation": 8
    },
    {
        "value": 751,
        "text": "Dewpider",
        "type": "WATER",
        "dualtype": "BUG",
        "evolve": [ 751 ],
        "generation": 8
    },
    {
        "value": 752,
        "text": "Araquanid",
        "type": "WATER",
        "dualtype": "BUG",
        "evolve": [ 752, 1203 ],
        "generation": 8
    },
    {
        "value": 753,
        "text": "Fomantis",
        "type": "GRASS",
        "evolve": [ 753, 754, 1204 ],
        "generation": 8
    },
    {
        "value": 754,
        "text": "Lurantis",
        "type": "GRASS",
        "evolve": [ 753, 754, 1204 ],
        "generation": 8
    },
    {
        "value": 755,
        "text": "Morelull",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 755, 756 ],
        "generation": 8
    },
    {
        "value": 756,
        "text": "Shiinotic",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 755, 756 ],
        "generation": 8
    },
    {
        "value": 757,
        "text": "Salandit",
        "type": "POISON",
        "dualtype": "FIRE",
        "evolve": [ 757, 758, 1205 ],
        "generation": 8
    },
    {
        "value": 758,
        "text": "Salazzle",
        "type": "POISON",
        "dualtype": "FIRE",
        "evolve": [ 757, 758, 1205 ],
        "generation": 8
    },
    {
        "value": 759,
        "text": "Stufful",
        "type": "NORMAL",
        "dualtype": "FIGHTING",
        "evolve": [ 759, 760 ],
        "generation": 8
    },
    {
        "value": 760,
        "text": "Bewear",
        "type": "NORMAL",
        "dualtype": "FIGHTING",
        "evolve": [ 759, 760 ],
        "generation": 8
    },
    {
        "value": 761,
        "text": "Bounsweet",
        "type": "GRASS",
        "evolve": [ 761, 762, 763 ],
        "generation": 8
    },
    {
        "value": 762,
        "text": "Steenee",
        "type": "GRASS",
        "evolve": [ 761, 762, 763 ],
        "generation": 8
    },
    {
        "value": 763,
        "text": "Tsareena",
        "type": "GRASS",
        "evolve": [ 761, 762, 763 ],
        "generation": 8
    },
    {
        "value": 764,
        "text": "Comfey",
        "type": "FAIRY",
        "evolve": [ 764 ],
        "generation": 8
    },
    {
        "value": 765,
        "text": "Oranguru",
        "type": "NORMAL",
        "dualtype": "PSYCHIC",
        "evolve": [ 765 ],
        "generation": 8
    },
    {
        "value": 766,
        "text": "Passimian",
        "type": "FIGHTING",
        "evolve": [ 766 ],
        "generation": 8
    },
    {
        "value": 767,
        "text": "Wimpod",
        "type": "BUG",
        "dualtype": "WATER",
        "evolve": [ 767, 768 ],
        "generation": 8
    },
    {
        "value": 768,
        "text": "Golisopod",
        "type": "BUG",
        "dualtype": "WATER",
        "evolve": [ 767, 768 ],
        "generation": 8
    },
    {
        "value": 769,
        "text": "Sandygast",
        "type": "GHOST",
        "dualtype": "GROUND",
        "evolve": [ 769, 770 ],
        "generation": 8
    },
    {
        "value": 770,
        "text": "Palossand",
        "type": "GHOST",
        "dualtype": "GROUND",
        "evolve": [ 769, 770 ],
        "generation": 8
    },
    {
        "value": 771,
        "text": "Pyukumuku",
        "type": "WATER",
        "evolve": [ 771 ],
        "generation": 8
    },
    {
        "value": 772,
        "text": "Type: Null",
        "type": "NORMAL",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 773,
        "text": "Silvally",
        "type": "NORMAL",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 774,
        "text": "Minior",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 775,
        "text": "Komala",
        "type": "NORMAL",
        "evolve": [ 775 ],
        "generation": 8
    },
    {
        "value": 776,
        "text": "Turtonator",
        "type": "FIRE",
        "dualtype": "DRAGON",
        "evolve": [ 776 ],
        "generation": 8
    },
    {
        "value": 777,
        "text": "Togedemaru",
        "type": "ELECTRIC",
        "dualtype": "STEEL",
        "evolve": [ 777, 1236 ],
        "generation": 8
    },
    {
        "value": 778,
        "text": "Mimikyu",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 778, 779, 780, 1237, 1239 ],
        "generation": 8
    },
    {
        "value": 779,
        "text": "Bruxish",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 1238, 779, 780, 1237, 1239 ],
        "generation": 8
    },
    {
        "value": 780,
        "text": "Drampa",
        "type": "NORMAL",
        "dualtype": "DRAGON",
        "evolve": [ 1238, 779, 780, 1237, 1239 ],
        "generation": 8
    },
    {
        "value": 781,
        "text": "Dhelmise",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 781 ],
        "generation": 8
    },
    {
        "value": 782,
        "text": "Jangmo-o",
        "type": "DRAGON",
        "evolve": [ 782 ],
        "generation": 8
    },
    {
        "value": 783,
        "text": "Hakamo-o",
        "type": "DRAGON",
        "dualtype": "FIGHTING",
        "evolve": [ 783 ],
        "generation": 8
    },
    {
        "value": 784,
        "text": "Kommo-o",
        "type": "DRAGON",
        "dualtype": "FIGHTING",
        "evolve": [ 784, 1240 ],
        "generation": 8
    },
    {
        "value": 785,
        "text": "Tapu Koko",
        "type": "ELECTRIC",
        "dualtype": "FAIRY",
        "evolve": [ 785 ],
        "generation": 8
    },
    {
        "value": 786,
        "text": "Tapu Lele",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 786 ],
        "generation": 8
    },
    {
        "value": 787,
        "text": "Tapu Bulu",
        "type": "GRASS",
        "dualtype": "FAIRY",
        "evolve": [ 787 ],
        "generation": 8
    },
    {
        "value": 788,
        "text": "Tapu Fini",
        "type": "WATER",
        "dualtype": "FAIRY",
        "evolve": [ 788 ],
        "generation": 8
    },
    {
        "value": 789,
        "text": "Cosmog",
        "type": "PSYCHIC",
        "evolve": [ 789, 790, 791, 792 ],
        "generation": 8
    },
    {
        "value": 790,
        "text": "Cosmoem",
        "type": "PSYCHIC",
        "evolve": [ 789, 790, 791, 792 ],
        "generation": 8
    },
    {
        "value": 791,
        "text": "Solgaleo",
        "type": "PSYCHIC",
        "dualtype": "STEEL",
        "evolve": [ 789, 790, 791 ],
        "generation": 8
    },
    {
        "value": 792,
        "text": "Lunala",
        "type": "PSYCHIC",
        "dualtype": "GHOST",
        "evolve": [ 789, 792, 790 ],
        "generation": 8
    },
    {
        "value": 793,
        "text": "Nihilego",
        "type": "ROCK",
        "dualtype": "POISON",
        "evolve": [ 793 ],
        "generation": 8
    },
    {
        "value": 794,
        "text": "Buzzwole",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 794 ],
        "generation": 8
    },
    {
        "value": 795,
        "text": "Pheromosa",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 795 ],
        "generation": 8
    },
    {
        "value": 796,
        "text": "Xurkitree",
        "type": "ELECTRIC",
        "evolve": [ 796 ],
        "generation": 8
    },
    {
        "value": 797,
        "text": "Celesteela",
        "type": "STEEL",
        "dualtype": "FLYING",
        "evolve": [ 797 ],
        "generation": 8
    },
    {
        "value": 798,
        "text": "Kartana",
        "type": "GRASS",
        "dualtype": "STEEL",
        "evolve": [ 798 ],
        "generation": 8
    },
    {
        "value": 799,
        "text": "Guzzlord",
        "type": "DARK",
        "dualtype": "DRAGON",
        "evolve": [ 799 ],
        "generation": 8
    },
    {
        "value": 800,
        "text": "Necrozma",
        "type": "PSYCHIC",
        "evolve": [ 800, 1241, 1242, 1243 ],
        "generation": 8
    },
    {
        "value": 801,
        "text": "Magearna",
        "type": "STEEL",
        "dualtype": "FAIRY",
        "evolve": [ 801, 1244 ],
        "generation": 8
    },
    {
        "value": 802,
        "text": "Marshadow",
        "type": "FIGHTING",
        "dualtype": "GHOST",
        "evolve": [ 802 ],
        "generation": 8
    },
    {
        "value": 803,
        "text": "Poipole",
        "type": "POISON",
        "evolve": [ 803, 804 ],
        "generation": 8
    },
    {
        "value": 804,
        "text": "Naganadel",
        "type": "POISON",
        "dualtype": "DRAGON",
        "evolve": [ 803, 804 ],
        "generation": 8
    },
    {
        "value": 805,
        "text": "Stakataka",
        "type": "ROCK",
        "dualtype": "STEEL",
        "evolve": [ 805 ],
        "generation": 8
    },
    {
        "value": 806,
        "text": "Blacephalon",
        "type": "FIRE",
        "dualtype": "GHOST",
        "evolve": [ 806 ],
        "generation": 8
    },
    {
        "value": 807,
        "text": "Zeraora",
        "type": "ELECTRIC",
        "evolve": [ 807 ],
        "generation": 8
    },
    {
        "value": 808,
        "text": "Meltan",
        "type": "STEEL",
        "evolve": [ 808, 809, 1245 ],
        "generation": 8
    },
    {
        "value": 809,
        "text": "Melmetal",
        "type": "STEEL",
        "evolve": [ 808, 809, 1245 ],
        "generation": 8
    },
    {
        "value": 810,
        "text": "Grookey",
        "type": "GRASS",
        "evolve": [ 810, 811, 812, 1246 ],
        "generation": 8
    },
    {
        "value": 811,
        "text": "Thwackey",
        "type": "GRASS",
        "evolve": [ 810, 811, 812, 1246 ],
        "generation": 8
    },
    {
        "value": 812,
        "text": "Rillaboom",
        "type": "GRASS",
        "evolve": [ 810, 811, 812, 1246 ],
        "generation": 8
    },
    {
        "value": 813,
        "text": "Scorbunny",
        "type": "FIRE",
        "evolve": [ 813, 814, 815, 1247 ],
        "generation": 8
    },
    {
        "value": 814,
        "text": "Raboot",
        "type": "FIRE",
        "evolve": [ 813, 814, 815, 1247 ],
        "generation": 8
    },
    {
        "value": 815,
        "text": "Cinderace",
        "type": "FIRE",
        "evolve": [ 813, 814, 815, 1247 ],
        "generation": 8
    },
    {
        "value": 816,
        "text": "Sobble",
        "type": "WATER",
        "evolve": [ 816, 817, 818, 1248 ],
        "generation": 8
    },
    {
        "value": 817,
        "text": "Drizzile",
        "type": "WATER",
        "evolve": [ 816, 817, 818, 1248 ],
        "generation": 8
    },
    {
        "value": 818,
        "text": "Inteleon",
        "type": "WATER",
        "evolve": [ 816, 817, 818, 1248 ],
        "generation": 8
    },
    {
        "value": 819,
        "text": "Skwovet",
        "type": "NORMAL",
        "evolve": [ 819, 820 ],
        "generation": 8
    },
    {
        "value": 820,
        "text": "Greedent",
        "type": "NORMAL",
        "evolve": [ 819, 820 ],
        "generation": 8
    },
    {
        "value": 821,
        "text": "Rookidee",
        "type": "FLYING",
        "evolve": [ 821, 822, 823, 1249 ],
        "generation": 8
    },
    {
        "value": 822,
        "text": "Corvisquire",
        "type": "FLYING",
        "evolve": [ 821, 822, 823, 1249 ],
        "generation": 8
    },
    {
        "value": 823,
        "text": "Corviknight",
        "type": "FLYING",
        "dualtype": "STEEL",
        "evolve": [ 821, 822, 823, 1249 ],
        "generation": 8
    },
    {
        "value": 824,
        "text": "Blipbug",
        "type": "BUG",
        "evolve": [ 824, 825, 826, 1250 ],
        "generation": 8
    },
    {
        "value": 825,
        "text": "Dottler",
        "type": "BUG",
        "dualtype": "PSYCHIC",
        "evolve": [ 824, 825, 826, 1250 ],
        "generation": 8
    },
    {
        "value": 826,
        "text": "Orbeetle",
        "type": "BUG",
        "dualtype": "PSYCHIC",
        "evolve": [ 824, 825, 826, 1250 ],
        "generation": 8
    },
    {
        "value": 827,
        "text": "Nickit",
        "type": "DARK",
        "evolve": [ 827, 828 ],
        "generation": 8
    },
    {
        "value": 828,
        "text": "Thievul",
        "type": "DARK",
        "evolve": [ 827, 828 ],
        "generation": 8
    },
    {
        "value": 829,
        "text": "Gossifleur",
        "type": "GRASS",
        "evolve": [ 829, 830 ],
        "generation": 8
    },
    {
        "value": 830,
        "text": "Eldegoss",
        "type": "GRASS",
        "evolve": [ 829, 830 ],
        "generation": 8
    },
    {
        "value": 831,
        "text": "Wooloo",
        "type": "NORMAL",
        "evolve": [ 831, 832 ],
        "generation": 8
    },
    {
        "value": 832,
        "text": "Dubwool",
        "type": "NORMAL",
        "evolve": [ 831, 832 ],
        "generation": 8
    },
    {
        "value": 833,
        "text": "Chewtle",
        "type": "WATER",
        "evolve": [ 833, 834, 1251 ],
        "generation": 8
    },
    {
        "value": 834,
        "text": "Drednaw",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 833, 834, 1251 ],
        "generation": 8
    },
    {
        "value": 835,
        "text": "Yamper",
        "type": "ELECTRIC",
        "evolve": [ 835, 836 ],
        "generation": 8
    },
    {
        "value": 836,
        "text": "Boltund",
        "type": "ELECTRIC",
        "evolve": [ 835, 836 ],
        "generation": 8
    },
    {
        "value": 837,
        "text": "Rolycoly",
        "type": "ROCK",
        "evolve": [ 837, 838, 839, 1252 ],
        "generation": 8
    },
    {
        "value": 838,
        "text": "Carkol",
        "type": "ROCK",
        "dualtype": "FIRE",
        "evolve": [ 837, 838, 839, 1252 ],
        "generation": 8
    },
    {
        "value": 839,
        "text": "Coalossal",
        "type": "ROCK",
        "dualtype": "FIRE",
        "evolve": [ 837, 838, 839, 1252 ],
        "generation": 8
    },
    {
        "value": 840,
        "text": "Applin",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 840, 841, 842, 1253, 1254 ],
        "generation": 8
    },
    {
        "value": 841,
        "text": "Flapple",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 840, 841, 1253 ],
        "generation": 8
    },
    {
        "value": 842,
        "text": "Appletun",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 840, 842, 1254 ],
        "generation": 8
    },
    {
        "value": 843,
        "text": "Silicobra",
        "type": "GROUND",
        "evolve": [ 843, 844, 1255 ],
        "generation": 8
    },
    {
        "value": 844,
        "text": "Sandaconda",
        "type": "GROUND",
        "evolve": [ 843, 844, 1255 ],
        "generation": 8
    },
    {
        "value": 845,
        "text": "Cramorant",
        "type": "FLYING",
        "dualtype": "WATER",
        "evolve": [ 845, 1256, 1257 ],
        "generation": 8
    },
    {
        "value": 846,
        "text": "Arrokuda",
        "type": "WATER",
        "evolve": [ 846, 847 ],
        "generation": 8
    },
    {
        "value": 847,
        "text": "Barraskewda",
        "type": "WATER",
        "evolve": [ 846, 847 ],
        "generation": 8
    },
    {
        "value": 848,
        "text": "Toxel",
        "type": "ELECTRIC",
        "dualtype": "POISON",
        "evolve": [ 848, 849, 1258, 1259, 1260 ],
        "generation": 8
    },
    {
        "value": 849,
        "text": "Toxtricity",
        "type": "ELECTRIC",
        "dualtype": "POISON",
        "evolve": [ 848, 849, 1258, 1259, 1260 ],
        "generation": 8
    },
    {
        "value": 850,
        "text": "Sizzlipede",
        "type": "FIRE",
        "dualtype": "BUG",
        "evolve": [ 850, 851, 1261 ],
        "generation": 8
    },
    {
        "value": 851,
        "text": "Centiskorch",
        "type": "FIRE",
        "dualtype": "BUG",
        "evolve": [ 850, 851, 1261 ],
        "generation": 8
    },
    {
        "value": 852,
        "text": "Clobbopus",
        "type": "FIGHTING",
        "evolve": [ 852, 853 ],
        "generation": 8
    },
    {
        "value": 853,
        "text": "Grapploct",
        "type": "FIGHTING",
        "evolve": [ 852, 853 ],
        "generation": 8
    },
    {
        "value": 854,
        "text": "Sinistea",
        "type": "GHOST",
        "evolve": [ 854, 855 ],
        "generation": 8
    },
    {
        "value": 855,
        "text": "Polteageist",
        "type": "GHOST",
        "evolve": [ 854, 855 ],
        "generation": 8
    },
    {
        "value": 856,
        "text": "Hatenna",
        "type": "PSYCHIC",
        "evolve": [ 856, 857, 858, 1264 ],
        "generation": 8
    },
    {
        "value": 857,
        "text": "Hattrem",
        "type": "PSYCHIC",
        "evolve": [ 856, 857, 858, 1264 ],
        "generation": 8
    },
    {
        "value": 858,
        "text": "Hatterene",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 856, 857, 858, 1264 ],
        "generation": 8
    },
    {
        "value": 859,
        "text": "Impidimp",
        "type": "DARK",
        "dualtype": "FAIRY",
        "evolve": [ 859, 860, 861, 1265 ],
        "generation": 8
    },
    {
        "value": 860,
        "text": "Morgrem",
        "type": "DARK",
        "dualtype": "FAIRY",
        "evolve": [ 859, 860, 861, 1265 ],
        "generation": 8
    },
    {
        "value": 861,
        "text": "Grimmsnarl",
        "type": "DARK",
        "dualtype": "FAIRY",
        "evolve": [ 859, 860, 861, 1265 ],
        "generation": 8
    },
    {
        "value": 862,
        "text": "Obstagoon",
        "type": "DARK",
        "dualtype": "NORMAL",
        "evolve": [ 1034, 1035, 862 ],
        "generation": 8
    },
    {
        "value": 863,
        "text": "Perrserker",
        "type": "STEEL",
        "evolve": [ 947, 863 ],
        "generation": 8
    },
    {
        "value": 864,
        "text": "Cursola",
        "type": "GHOST",
        "evolve": [ 1028, 864 ],
        "generation": 8
    },
    {
        "value": 865,
        "text": "Sirfetch'd",
        "type": "FIGHTING",
        "evolve": [ 962, 865 ],
        "generation": 8
    },
    {
        "value": 866,
        "text": "Mr. Rime",
        "type": "ICE",
        "dualtype": "PSYCHIC",
        "evolve": [ 439, 978, 866 ],
        "generation": 8
    },
    {
        "value": 867,
        "text": "Runerigus",
        "type": "GROUND",
        "dualtype": "GHOST",
        "evolve": [ 1108, 867 ],
        "generation": 8
    },
    {
        "value": 868,
        "text": "Milcery",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 869,
        "text": "Alcremie",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 870,
        "text": "Falinks",
        "type": "FIGHTING",
        "evolve": [ 870 ],
        "generation": 8
    },
    {
        "value": 871,
        "text": "Pincurchin",
        "type": "ELECTRIC",
        "evolve": [ 871 ],
        "generation": 8
    },
    {
        "value": 872,
        "text": "Snom",
        "type": "ICE",
        "dualtype": "BUG",
        "evolve": [ 872, 873 ],
        "generation": 8
    },
    {
        "value": 873,
        "text": "Frosmoth",
        "type": "ICE",
        "dualtype": "BUG",
        "evolve": [ 872, 873 ],
        "generation": 8
    },
    {
        "value": 874,
        "text": "Stonjourner",
        "type": "ROCK",
        "evolve": [ 874 ],
        "generation": 8
    },
    {
        "value": 875,
        "text": "Eiscue",
        "type": "ICE",
        "evolve": [ 875, 1329 ],
        "generation": 8
    },
    {
        "value": 876,
        "text": "Indeedee",
        "type": "PSYCHIC",
        "dualtype": "NORMAL",
        "evolve": [ 876, 1330 ],
        "generation": 8
    },
    {
        "value": 877,
        "text": "Morpeko",
        "type": "ELECTRIC",
        "dualtype": "DARK",
        "evolve": [ 877, 1331 ],
        "generation": 8
    },
    {
        "value": 878,
        "text": "Cufant",
        "type": "STEEL",
        "evolve": [ 878, 879, 1332 ],
        "generation": 8
    },
    {
        "value": 879,
        "text": "Copperajah",
        "type": "STEEL",
        "evolve": [ 878, 879, 1332 ],
        "generation": 8
    },
    {
        "value": 880,
        "text": "Dracozolt",
        "type": "ELECTRIC",
        "dualtype": "DRAGON",
        "evolve": [ 880 ],
        "generation": 8
    },
    {
        "value": 881,
        "text": "Arctozolt",
        "type": "ELECTRIC",
        "dualtype": "ICE",
        "evolve": [ 881 ],
        "generation": 8
    },
    {
        "value": 882,
        "text": "Dracovish",
        "type": "WATER",
        "dualtype": "DRAGON",
        "evolve": [ 882 ],
        "generation": 8
    },
    {
        "value": 883,
        "text": "Arctovish",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 883 ],
        "generation": 8
    },
    {
        "value": 884,
        "text": "Duraludon",
        "type": "STEEL",
        "dualtype": "DRAGON",
        "evolve": [ 884, 1333 ],
        "generation": 8
    },
    {
        "value": 885,
        "text": "Dreepy",
        "type": "DRAGON",
        "dualtype": "GHOST",
        "evolve": [ 885, 886, 887 ],
        "generation": 8
    },
    {
        "value": 886,
        "text": "Drakloak",
        "type": "DRAGON",
        "dualtype": "GHOST",
        "evolve": [ 885, 886, 887 ],
        "generation": 8
    },
    {
        "value": 887,
        "text": "Dragapult",
        "type": "DRAGON",
        "dualtype": "GHOST",
        "evolve": [ 885, 886, 887 ],
        "generation": 8
    },
    {
        "value": 888,
        "text": "Zacian",
        "type": "FAIRY",
        "evolve": [ 888, 1334 ],
        "generation": 8
    },
    {
        "value": 889,
        "text": "Zamazenta",
        "type": "FIGHTING",
        "evolve": [ 889, 1335 ],
        "generation": 8
    },
    {
        "value": 890,
        "text": "Eternatus",
        "type": "POISON",
        "dualtype": "DRAGON",
        "evolve": [ 890, 1336 ],
        "generation": 8
    },
    {
        "value": 891,
        "text": "Kubfu",
        "type": "FIGHTING",
        "evolve": [ 891, 892, 1337, 1338, 1339 ],
        "generation": 8
    },
    {
        "value": 892,
        "text": "Urshifu",
        "type": "FIGHTING",
        "dualtype": "DARK",
        "evolve": [ 891, 892, 1337, 1338, 1339 ],
        "generation": 8
    },
    {
        "value": 893,
        "text": "Zarude",
        "type": "DARK",
        "dualtype": "GRASS",
        "evolve": [ 893, 1340 ],
        "generation": 8
    },
    {
        "value": 894,
        "text": "Regieleki",
        "type": "ELECTRIC",
        "evolve": [ 894 ],
        "generation": 8
    },
    {
        "value": 895,
        "text": "Regidrago",
        "type": "DRAGON",
        "evolve": [ 895 ],
        "generation": 8
    },
    {
        "value": 896,
        "text": "Glastrier",
        "type": "ICE",
        "evolve": [ 896 ],
        "generation": 8
    },
    {
        "value": 897,
        "text": "Spectrier",
        "type": "GHOST",
        "evolve": [ 897 ],
        "generation": 8
    },
    {
        "value": 898,
        "text": "Calyrex",
        "type": "PSYCHIC",
        "dualtype": "GRASS",
        "evolve": [ 898, 1341, 1342 ],
        "generation": 8
    },
    {
        "value": 899,
        "text": "Wyrdeer",
        "type": "NORMAL",
        "dualtype": "PSYCHIC",
        "evolve": [ 234, 899 ],
        "generation": 8
    },
    {
        "value": 900,
        "text": "Kleavor",
        "type": "BUG",
        "dualtype": "ROCK",
        "evolve": [ 123, 900 ],
        "generation": 8
    },
    {
        "value": 901,
        "text": "Ursaluna",
        "type": "GROUND",
        "dualtype": "NORMAL",
        "evolve": [ 216, 217, 901 ],
        "generation": 8
    },
    {
        "value": 902,
        "text": "Basculegion",
        "type": "WATER",
        "dualtype": "GHOST",
        "evolve": [ 1103, 902, 1343 ],
        "generation": 8
    },
    {
        "value": 903,
        "text": "Sneasler",
        "type": "FIGHTING",
        "dualtype": "POISON",
        "evolve": [ 1027, 903 ],
        "generation": 8
    },
    {
        "value": 904,
        "text": "Overqwil",
        "type": "DARK",
        "dualtype": "POISON",
        "evolve": [ 1024, 904 ],
        "generation": 8
    },
    {
        "value": 905,
        "text": "Enamorus",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 905, 1344 ],
        "generation": 8
    },
    {
        "value": 906,
        "text": "Clone Venusaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 907,
        "text": "Gigantamax Venusaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 908,
        "text": "Mega Venusaur",
        "type": "GRASS",
        "dualtype": "POISON",
        "evolve": [ 1, 2, 3, 906, 907, 908 ],
        "generation": 8
    },
    {
        "value": 909,
        "text": "Clone Charizard",
        "type": "FIRE",
        "dualtype": "DRAGON",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 910,
        "text": "Mega Charizard Y",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 911,
        "text": "Gigantamax Charizard",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 912,
        "text": "Mega Charizard X",
        "type": "FIRE",
        "dualtype": "FLYING",
        "evolve": [ 4, 5, 6, 909, 910, 911, 912 ],
        "generation": 8
    },
    {
        "value": 913,
        "text": "Clone Blastoise",
        "type": "WATER",
        "dualtype": "STEEL",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 914,
        "text": "Gigantamax Blastoise",
        "type": "WATER",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 915,
        "text": "Mega Blastoise",
        "type": "WATER",
        "evolve": [ 7, 8, 9, 913, 914, 915 ],
        "generation": 8
    },
    {
        "value": 916,
        "text": "Gigantamax Butterfree",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 10, 11, 12, 916 ],
        "generation": 8
    },
    {
        "value": 917,
        "text": "Mega Beedrill",
        "type": "BUG",
        "dualtype": "POISON",
        "evolve": [ 13, 14, 15, 917 ],
        "generation": 8
    },
    {
        "value": 918,
        "text": "Mega Pidgeot",
        "type": "NORMAL",
        "dualtype": "FLYING",
        "evolve": [ 16, 17, 18, 918 ],
        "generation": 8
    },
    {
        "value": 919,
        "text": "Alolan Rattata",
        "type": "NORMAL",
        "dualtype": "DARK",
        "evolve": [ 919, 920 ],
        "generation": 8
    },
    {
        "value": 920,
        "text": "Alolan Raticate",
        "type": "NORMAL",
        "dualtype": "DARK",
        "evolve": [ 919, 920 ],
        "generation": 8
    },
    {
        "value": 921,
        "text": "Totem Raticate",
        "type": "NORMAL",
        "dualtype": "DARK",
        "evolve": [ 19, 20, 921 ],
        "generation": 8
    },
    {
        "value": 922,
        "text": "Cosplay Pikachu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 923,
        "text": "Pikachu Rock Star",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 924,
        "text": "Pikachu Belle",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 925,
        "text": "Pikachu Pop Star",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 926,
        "text": "Pikachu, Ph.D",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 927,
        "text": "Pikachu Libre",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 928,
        "text": "Original Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 929,
        "text": "Hoenn Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 930,
        "text": "Sinnoh Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 931,
        "text": "Unova Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 932,
        "text": "Kalos Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 933,
        "text": "Alola Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 934,
        "text": "Partner Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 935,
        "text": "World Cap",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 936,
        "text": "Partner Pikachu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 937,
        "text": "Gigantamax Pikachu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 938,
        "text": "Clone Pikachu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 939,
        "text": "Alolan Raichu",
        "type": "ELECTRIC",
        "dualtype": "PSYCHIC",
        "evolve": [ 25, 939, 172, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 940,
        "text": "Alolan Sandshrew",
        "type": "ICE",
        "dualtype": "STEEL",
        "evolve": [ 940, 941 ],
        "generation": 8
    },
    {
        "value": 941,
        "text": "Alolan Sandslash",
        "type": "ICE",
        "dualtype": "STEEL",
        "evolve": [ 940, 941 ],
        "generation": 8
    },
    {
        "value": 942,
        "text": "Alolan Vulpix",
        "type": "ICE",
        "evolve": [ 942, 943 ],
        "generation": 8
    },
    {
        "value": 943,
        "text": "Alolan Ninetales",
        "type": "ICE",
        "dualtype": "FAIRY",
        "evolve": [ 942, 943 ],
        "generation": 8
    },
    {
        "value": 944,
        "text": "Alolan Diglett",
        "type": "GROUND",
        "dualtype": "STEEL",
        "evolve": [ 944, 945 ],
        "generation": 8
    },
    {
        "value": 945,
        "text": "Alolan Dugtrio",
        "type": "GROUND",
        "dualtype": "STEEL",
        "evolve": [ 944, 945 ],
        "generation": 8
    },
    {
        "value": 946,
        "text": "Alolan Meowth",
        "type": "DARK",
        "evolve": [ 946, 949 ],
        "generation": 8
    },
    {
        "value": 947,
        "text": "Galarian Meowth",
        "type": "STEEL",
        "evolve": [ 947, 863 ],
        "generation": 8
    },
    {
        "value": 948,
        "text": "Gigantamax Meowth",
        "type": "NORMAL",
        "evolve": [ 52, 53, 948 ],
        "generation": 8
    },
    {
        "value": 949,
        "text": "Alolan Persian",
        "type": "DARK",
        "evolve": [ 946, 949 ],
        "generation": 8
    },
    {
        "value": 950,
        "text": "Hisuian Growlithe",
        "type": "FIRE",
        "dualtype": "ROCK",
        "evolve": [ 950, 951 ],
        "generation": 8
    },
    {
        "value": 951,
        "text": "Hisuian Arcanine",
        "type": "FIRE",
        "dualtype": "ROCK",
        "evolve": [ 950, 951 ],
        "generation": 8
    },
    {
        "value": 952,
        "text": "Mega Alakazam",
        "type": "PSYCHIC",
        "evolve": [ 63, 64, 65, 952 ],
        "generation": 8
    },
    {
        "value": 953,
        "text": "Gigantamax Machamp",
        "type": "FIGHTING",
        "evolve": [ 66, 67, 68, 953 ],
        "generation": 8
    },
    {
        "value": 954,
        "text": "Alolan Geodude",
        "type": "ROCK",
        "dualtype": "ELECTRIC",
        "evolve": [ 954, 955, 956 ],
        "generation": 8
    },
    {
        "value": 955,
        "text": "Alolan Graveler",
        "type": "ROCK",
        "dualtype": "ELECTRIC",
        "evolve": [ 954, 955, 956 ],
        "generation": 8
    },
    {
        "value": 956,
        "text": "Alolan Golem",
        "type": "ROCK",
        "dualtype": "ELECTRIC",
        "evolve": [ 954, 955, 956 ],
        "generation": 8
    },
    {
        "value": 957,
        "text": "Galarian Ponyta",
        "type": "FAIRY",
        "evolve": [ 957, 958 ],
        "generation": 8
    },
    {
        "value": 958,
        "text": "Galarian Rapidash",
        "type": "FAIRY",
        "dualtype": "FIRE",
        "evolve": [ 957, 958 ],
        "generation": 8
    },
    {
        "value": 959,
        "text": "Galarian Slowpoke",
        "type": "PSYCHIC",
        "evolve": [ 959, 960, 995 ],
        "generation": 8
    },
    {
        "value": 960,
        "text": "Galarian Slowbro",
        "type": "POISON",
        "dualtype": "PSYCHIC",
        "evolve": [ 959, 960 ],
        "generation": 8
    },
    {
        "value": 961,
        "text": "Mega Slowbro",
        "type": "WATER",
        "dualtype": "PSYCHIC",
        "evolve": [ 79, 80, 199, 961 ],
        "generation": 8
    },
    {
        "value": 962,
        "text": "Galarian Farfetch'd",
        "type": "FIGHTING",
        "evolve": [ 962, 865 ],
        "generation": 8
    },
    {
        "value": 963,
        "text": "SPOOKYDEVTHING",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 86, 87, 963 ],
        "generation": 8
    },
    {
        "value": 964,
        "text": "Alolan Grimer",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 964, 965 ],
        "generation": 8
    },
    {
        "value": 965,
        "text": "Alolan Muk",
        "type": "POISON",
        "dualtype": "DARK",
        "evolve": [ 964, 965 ],
        "generation": 8
    },
    {
        "value": 966,
        "text": "Stitched Gengar",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
        "generation": 8
    },
    {
        "value": 967,
        "text": "Gigantamax Gengar",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
        "generation": 8
    },
    {
        "value": 968,
        "text": "Mega Gengar",
        "type": "GHOST",
        "dualtype": "POISON",
        "evolve": [ 92, 93, 94, 966, 967, 968 ],
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
        "value": 970,
        "text": "Gigantamax Kingler",
        "type": "WATER",
        "evolve": [ 98, 99, 970 ],
        "generation": 8
    },
    {
        "value": 971,
        "text": "Hisuian Voltorb",
        "type": "ELECTRIC",
        "dualtype": "GRASS",
        "evolve": [ 971, 972 ],
        "generation": 8
    },
    {
        "value": 972,
        "text": "Hisuian Electrode",
        "type": "ELECTRIC",
        "dualtype": "GRASS",
        "evolve": [ 971, 972 ],
        "generation": 8
    },
    {
        "value": 973,
        "text": "Alolan Exeggutor",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 102, 973 ],
        "generation": 8
    },
    {
        "value": 974,
        "text": "Alolan Marowak",
        "type": "GHOST",
        "dualtype": "FIRE",
        "evolve": [ 104, 974, 975 ],
        "generation": 8
    },
    {
        "value": 975,
        "text": "Totem Marowak",
        "type": "GHOST",
        "dualtype": "FIRE",
        "evolve": [ 104, 105, 974, 975 ],
        "generation": 8
    },
    {
        "value": 976,
        "text": "Galarian Weezing",
        "type": "POISON",
        "dualtype": "FAIRY",
        "evolve": [ 109, 976 ],
        "generation": 8
    },
    {
        "value": 977,
        "text": "Mega Kangaskhan",
        "type": "NORMAL",
        "evolve": [ 115, 977 ],
        "generation": 8
    },
    {
        "value": 978,
        "text": "Galarian Mr. Mime",
        "type": "PSYCHIC",
        "dualtype": "ICE",
        "evolve": [ 439, 978, 866 ],
        "generation": 8
    },
    {
        "value": 979,
        "text": "Mega Pinsir",
        "type": "FLYING",
        "dualtype": "BUG",
        "evolve": [ 127, 979 ],
        "generation": 8
    },
    {
        "value": 980,
        "text": "Mega Gyarados",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 129, 130, 980 ],
        "generation": 8
    },
    {
        "value": 981,
        "text": "Gigantamax Lapras",
        "type": "WATER",
        "dualtype": "ICE",
        "evolve": [ 131, 981 ],
        "generation": 8
    },
    {
        "value": 982,
        "text": "Partner Eevee",
        "type": "NORMAL",
        "evolve": [ 133, 470, 471, 135, 134, 136, 700, 196, 197, 982, 983 ],
        "generation": 8
    },
    {
        "value": 983,
        "text": "Gigantamax Eevee",
        "type": "NORMAL",
        "evolve": [ 133, 470, 471, 135, 134, 136, 700, 196, 197, 982, 983 ],
        "generation": 8
    },
    {
        "value": 984,
        "text": "Mega Aerodactyl",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 142, 984 ],
        "generation": 8
    },
    {
        "value": 985,
        "text": "Gigantamax Snorlax",
        "type": "NORMAL",
        "evolve": [ 446, 143, 985 ],
        "generation": 8
    },
    {
        "value": 986,
        "text": "Galarian Articuno",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 144, 986 ],
        "generation": 8
    },
    {
        "value": 987,
        "text": "Galarian Zapdos",
        "type": "FIGHTING",
        "dualtype": "FLYING",
        "evolve": [ 145, 987 ],
        "generation": 8
    },
    {
        "value": 988,
        "text": "Galarian Moltres",
        "type": "DARK",
        "dualtype": "FLYING",
        "evolve": [ 146, 988 ],
        "generation": 8
    },
    {
        "value": 989,
        "text": "MK2 Armored Mewtwo",
        "type": "FIGHTING",
        "dualtype": "PSYCHIC",
        "evolve": [ 150, 989, 990, 991 ],
        "generation": 8
    },
    {
        "value": 990,
        "text": "Mega Mewtwo Y",
        "type": "PSYCHIC",
        "evolve": [ 150, 989, 990, 991 ],
        "generation": 8
    },
    {
        "value": 991,
        "text": "Mega Mewtwo X",
        "type": "PSYCHIC",
        "evolve": [ 150, 989, 990, 991 ],
        "generation": 8
    },
    {
        "value": 992,
        "text": "Hisuian Typhlosion",
        "type": "FIRE",
        "dualtype": "GHOST",
        "evolve": [ 155, 156, 992 ],
        "generation": 8
    },
    {
        "value": 993,
        "text": "Spiky-eared Pichu",
        "type": "ELECTRIC",
        "evolve": [ 172, 25, 26, 939, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 993 ],
        "generation": 8
    },
    {
        "value": 994,
        "text": "Mega Ampharos",
        "type": "ELECTRIC",
        "dualtype": "DRAGON",
        "evolve": [ 179, 180, 181, 994 ],
        "generation": 8
    },
    {
        "value": 995,
        "text": "Galarian Slowking",
        "type": "POISON",
        "dualtype": "PSYCHIC",
        "evolve": [ 959, 995 ],
        "generation": 8
    },
    {
        "value": 996,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 997,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 998,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 999,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1000,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1001,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1002,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1003,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1004,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1005,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1006,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1007,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1008,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1009,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1010,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1011,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1012,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1013,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1014,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1015,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1016,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1017,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1018,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1019,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1020,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1021,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
        "generation": 8
    },
    {
        "value": 1022,
        "text": "One form",
        "type": "PSYCHIC",
        "evolve": [ 201, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022 ],
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
        "value": 1024,
        "text": "Hisuian Qwilfish",
        "type": "DARK",
        "dualtype": "POISON",
        "evolve": [ 1024, 904 ],
        "generation": 8
    },
    {
        "value": 1025,
        "text": "Mega Scizor",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 123, 212, 900, 1025 ],
        "generation": 8
    },
    {
        "value": 1026,
        "text": "Mega Heracross",
        "type": "BUG",
        "dualtype": "FIGHTING",
        "evolve": [ 214, 1026 ],
        "generation": 8
    },
    {
        "value": 1027,
        "text": "Hisuian Sneasel",
        "type": "FIGHTING",
        "dualtype": "POISON",
        "evolve": [ 1027, 903 ],
        "generation": 8
    },
    {
        "value": 1028,
        "text": "Galarian Corsola",
        "type": "GHOST",
        "evolve": [ 1028, 864 ],
        "generation": 8
    },
    {
        "value": 1029,
        "text": "Mega Houndoom",
        "type": "DARK",
        "dualtype": "FIRE",
        "evolve": [ 228, 229, 1029 ],
        "generation": 8
    },
    {
        "value": 1030,
        "text": "Mega Tyranitar",
        "type": "ROCK",
        "dualtype": "DARK",
        "evolve": [ 246, 247, 248, 1030 ],
        "generation": 8
    },
    {
        "value": 1031,
        "text": "Mega Sceptile",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 252, 253, 254, 1031 ],
        "generation": 8
    },
    {
        "value": 1032,
        "text": "Mega Blaziken",
        "type": "FIRE",
        "dualtype": "FIGHTING",
        "evolve": [ 255, 256, 257, 1032 ],
        "generation": 8
    },
    {
        "value": 1033,
        "text": "Mega Swampert",
        "type": "WATER",
        "dualtype": "GROUND",
        "evolve": [ 258, 259, 260, 1033 ],
        "generation": 8
    },
    {
        "value": 1034,
        "text": "Galarian Zigzagoon",
        "type": "NORMAL",
        "dualtype": "DARK",
        "evolve": [ 1034, 1035, 862 ],
        "generation": 8
    },
    {
        "value": 1035,
        "text": "Galarian Linoone",
        "type": "NORMAL",
        "dualtype": "DARK",
        "evolve": [ 1034, 1035, 862 ],
        "generation": 8
    },
    {
        "value": 1036,
        "text": "Mega Gardevoir",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 280, 281, 282, 475, 1036 ],
        "generation": 8
    },
    {
        "value": 1037,
        "text": "Mega Sableye",
        "type": "DARK",
        "dualtype": "GHOST",
        "evolve": [ 302, 1037 ],
        "generation": 8
    },
    {
        "value": 1038,
        "text": "Mega Mawile",
        "type": "STEEL",
        "dualtype": "FAIRY",
        "evolve": [ 303, 1038 ],
        "generation": 8
    },
    {
        "value": 1039,
        "text": "Mega Aggron",
        "type": "STEEL",
        "evolve": [ 304, 305, 306, 1039 ],
        "generation": 8
    },
    {
        "value": 1040,
        "text": "Mega Medicham",
        "type": "FIGHTING",
        "dualtype": "PSYCHIC",
        "evolve": [ 307, 308, 1040 ],
        "generation": 8
    },
    {
        "value": 1041,
        "text": "Mega Manectric",
        "type": "ELECTRIC",
        "evolve": [ 309, 310, 1041 ],
        "generation": 8
    },
    {
        "value": 1042,
        "text": "Mega Sharpedo",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 318, 319, 1042 ],
        "generation": 8
    },
    {
        "value": 1043,
        "text": "Mega Camerupt",
        "type": "FIRE",
        "dualtype": "GROUND",
        "evolve": [ 322, 323, 1043 ],
        "generation": 8
    },
    {
        "value": 1044,
        "text": "Mega Altaria",
        "type": "DRAGON",
        "dualtype": "FAIRY",
        "evolve": [ 333, 334, 1044 ],
        "generation": 8
    },
    {
        "value": 1045,
        "text": "Sunny Form",
        "type": "FIRE",
        "evolve": [ 351, 1045, 1046, 1047 ],
        "generation": 8
    },
    {
        "value": 1046,
        "text": "Rainy Form",
        "type": "WATER",
        "evolve": [ 351, 1045, 1046, 1047 ],
        "generation": 8
    },
    {
        "value": 1047,
        "text": "Snowy Form",
        "type": "ICE",
        "evolve": [ 351, 1045, 1046, 1047 ],
        "generation": 8
    },
    {
        "value": 1048,
        "text": "Mega Banette",
        "type": "GHOST",
        "evolve": [ 353, 354, 1048 ],
        "generation": 8
    },
    {
        "value": 1049,
        "text": "Mega Absol",
        "type": "DARK",
        "evolve": [ 359, 1049 ],
        "generation": 8
    },
    {
        "value": 1050,
        "text": "Mega Glalie",
        "type": "ICE",
        "evolve": [ 361, 362, 478, 1050 ],
        "generation": 8
    },
    {
        "value": 1051,
        "text": "Mega Salamence",
        "type": "DRAGON",
        "dualtype": "FLYING",
        "evolve": [ 371, 372, 373, 1051 ],
        "generation": 8
    },
    {
        "value": 1052,
        "text": "Mega Metagross",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 374, 375, 376, 1052 ],
        "generation": 8
    },
    {
        "value": 1053,
        "text": "Mega Latias",
        "type": "DRAGON",
        "dualtype": "PSYCHIC",
        "evolve": [ 380, 1053 ],
        "generation": 8
    },
    {
        "value": 1054,
        "text": "Mega Latios",
        "type": "DRAGON",
        "dualtype": "PSYCHIC",
        "evolve": [ 381, 1054 ],
        "generation": 8
    },
    {
        "value": 1055,
        "text": "Primal Kyogre",
        "type": "WATER",
        "evolve": [ 382, 1055 ],
        "generation": 8
    },
    {
        "value": 1056,
        "text": "Primal Groudon",
        "type": "GROUND",
        "dualtype": "FIRE",
        "evolve": [ 383, 1056 ],
        "generation": 8
    },
    {
        "value": 1057,
        "text": "Mega Rayquaza",
        "type": "DRAGON",
        "dualtype": "FLYING",
        "evolve": [ 384, 1057 ],
        "generation": 8
    },
    {
        "value": 1058,
        "text": "Attack Forme",
        "type": "PSYCHIC",
        "evolve": [ 386, 1058, 1059, 1060 ],
        "generation": 8
    },
    {
        "value": 1059,
        "text": "Defense Forme",
        "type": "PSYCHIC",
        "evolve": [ 386, 1058, 1059, 1060 ],
        "generation": 8
    },
    {
        "value": 1060,
        "text": "Speed Forme",
        "type": "PSYCHIC",
        "evolve": [ 386, 1058, 1059, 1060 ],
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
        "value": 1065,
        "text": "Sunshine Form",
        "type": "GRASS",
        "dualtype": "FIRE",
        "evolve": [ 420, 421, 1065 ],
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
        "value": 1068,
        "text": "Mega Lopunny",
        "type": "NORMAL",
        "dualtype": "FIGHTING",
        "evolve": [ 427, 428, 1068 ],
        "generation": 8
    },
    {
        "value": 1069,
        "text": "Mega Garchomp",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 443, 444, 445, 1069 ],
        "generation": 8
    },
    {
        "value": 1070,
        "text": "Mega Lucario",
        "type": "FIGHTING",
        "dualtype": "STEEL",
        "evolve": [ 447, 448, 1070 ],
        "generation": 8
    },
    {
        "value": 1071,
        "text": "Mega Abomasnow",
        "type": "GRASS",
        "dualtype": "ICE",
        "evolve": [ 459, 460, 1071 ],
        "generation": 8
    },
    {
        "value": 1072,
        "text": "Mega Gallade",
        "type": "PSYCHIC",
        "dualtype": "FIGHTING",
        "evolve": [ 280, 281, 282, 475, 1036, 1072 ],
        "generation": 8
    },
    {
        "value": 1073,
        "text": "Heat Rotom",
        "type": "ELECTRIC",
        "dualtype": "FIRE",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 1074,
        "text": "Wash Rotom",
        "type": "ELECTRIC",
        "dualtype": "WATER",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 1075,
        "text": "Frost Rotom",
        "type": "ELECTRIC",
        "dualtype": "ICE",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 1076,
        "text": "Fan Rotom",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 1077,
        "text": "Mow Rotom",
        "type": "ELECTRIC",
        "dualtype": "GRASS",
        "evolve": [ 479, 1073, 1074, 1075, 1076, 1077 ],
        "generation": 8
    },
    {
        "value": 1078,
        "text": "Origin Forme",
        "type": "STEEL",
        "dualtype": "DRAGON",
        "evolve": [ 483, 1078 ],
        "generation": 8
    },
    {
        "value": 1079,
        "text": "Origin Forme",
        "type": "WATER",
        "dualtype": "DRAGON",
        "evolve": [ 484, 1079 ],
        "generation": 8
    },
    {
        "value": 1080,
        "text": "Origin Forme",
        "type": "GHOST",
        "dualtype": "DRAGON",
        "evolve": [ 487, 1080 ],
        "generation": 8
    },
    {
        "value": 1081,
        "text": "Sky Forme",
        "type": "GRASS",
        "dualtype": "FLYING",
        "evolve": [ 492, 1081 ],
        "generation": 8
    },
    {
        "value": 1082,
        "text": "Arceus",
        "type": "FIGHTING",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1083,
        "text": "Arceus",
        "type": "FLYING",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1084,
        "text": "Arceus",
        "type": "POISON",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1085,
        "text": "Arceus",
        "type": "GROUND",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1086,
        "text": "Arceus",
        "type": "ROCK",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1087,
        "text": "Arceus",
        "type": "BUG",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1088,
        "text": "Arceus",
        "type": "GHOST",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1089,
        "text": "Arceus",
        "type": "STEEL",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1090,
        "text": "Arceus",
        "type": "FIRE",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1091,
        "text": "Arceus",
        "type": "WATER",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1092,
        "text": "Arceus",
        "type": "GRASS",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1093,
        "text": "Arceus",
        "type": "ELECTRIC",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1094,
        "text": "Arceus",
        "type": "PSYCHIC",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1095,
        "text": "Arceus",
        "type": "ICE",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1096,
        "text": "Arceus",
        "type": "DRAGON",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1097,
        "text": "Arceus",
        "type": "DARK",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1098,
        "text": "Arceus",
        "type": "FAIRY",
        "evolve": [ 493, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098 ],
        "generation": 8
    },
    {
        "value": 1099,
        "text": "Hisuian Samurott",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 501, 502, 503, 1099 ],
        "generation": 8
    },
    {
        "value": 1100,
        "text": "Mega Audino",
        "type": "NORMAL",
        "dualtype": "FAIRY",
        "evolve": [ 531, 1100 ],
        "generation": 8
    },
    {
        "value": 1101,
        "text": "Hisuian Lilligant",
        "type": "GRASS",
        "dualtype": "FIGHTING",
        "evolve": [ 548, 549, 1101 ],
        "generation": 8
    },
    {
        "value": 1102,
        "text": "Blue-Striped Form",
        "type": "WATER",
        "evolve": [ 550, 1102 ],
        "generation": 8
    },
    {
        "value": 1103,
        "text": "White-Striped Form",
        "type": "WATER",
        "evolve": [ 1103, 902, 1343 ],
        "generation": 8
    },
    {
        "value": 1104,
        "text": "Galarian Darumaka",
        "type": "ICE",
        "evolve": [ 1104, 1106 ],
        "generation": 8
    },
    {
        "value": 1105,
        "text": "Zen Mode",
        "type": "FIRE",
        "dualtype": "PSYCHIC",
        "evolve": [ 554, 555, 1105, 1107 ],
        "generation": 8
    },
    {
        "value": 1106,
        "text": "Galarian Standard Mode",
        "type": "ICE",
        "evolve": [ 1104, 1106 ],
        "generation": 8
    },
    {
        "value": 1107,
        "text": "Galarian Zen Mode",
        "type": "FIRE",
        "dualtype": "ICE",
        "evolve": [ 554, 555, 1105, 1107 ],
        "generation": 8
    },
    {
        "value": 1108,
        "text": "Galarian Yamask",
        "type": "GROUND",
        "dualtype": "GHOST",
        "evolve": [ 1108, 867 ],
        "generation": 8
    },
    {
        "value": 1109,
        "text": "Gigantamax Garbodor",
        "type": "POISON",
        "evolve": [ 568, 569, 1109 ],
        "generation": 8
    },
    {
        "value": 1110,
        "text": "Hisuian Zorua",
        "type": "NORMAL",
        "dualtype": "GHOST",
        "evolve": [ 1110, 1111 ],
        "generation": 8
    },
    {
        "value": 1111,
        "text": "Hisuian Zoroark",
        "type": "NORMAL",
        "dualtype": "GHOST",
        "evolve": [ 1110, 1111 ],
        "generation": 8
    },
    {
        "value": 1112,
        "text": "Summer Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1112, 1115 ],
        "generation": 8
    },
    {
        "value": 1113,
        "text": "Autumn Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1113, 1116 ],
        "generation": 8
    },
    {
        "value": 1114,
        "text": "Winter Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1114, 1117 ],
        "generation": 8
    },
    {
        "value": 1115,
        "text": "Summer Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1112, 1115 ],
        "generation": 8
    },
    {
        "value": 1116,
        "text": "Autumn Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1113, 1116 ],
        "generation": 8
    },
    {
        "value": 1117,
        "text": "Winter Form",
        "type": "NORMAL",
        "dualtype": "GRASS",
        "evolve": [ 1114, 1117 ],
        "generation": 8
    },
    {
        "value": 1118,
        "text": "Galarian Stunfisk",
        "type": "GROUND",
        "dualtype": "STEEL",
        "evolve": [ 618, 1118 ],
        "generation": 8
    },
    {
        "value": 1119,
        "text": "Hisuian Braviary",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 627, 628, 1119 ],
        "generation": 8
    },
    {
        "value": 1120,
        "text": "Therian Forme",
        "type": "FLYING",
        "evolve": [ 641, 1120 ],
        "generation": 8
    },
    {
        "value": 1121,
        "text": "Therian Forme",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 642, 1121 ],
        "generation": 8
    },
    {
        "value": 1122,
        "text": "Therian Forme",
        "type": "GROUND",
        "dualtype": "FLYING",
        "evolve": [ 645, 1122 ],
        "generation": 8
    },
    {
        "value": 1123,
        "text": "White Kyurem",
        "type": "DRAGON",
        "dualtype": "ICE",
        "evolve": [ 646, 1123, 1124 ],
        "generation": 8
    },
    {
        "value": 1124,
        "text": "Black Kyurem",
        "type": "DRAGON",
        "dualtype": "ICE",
        "evolve": [ 646, 1123, 1124 ],
        "generation": 8
    },
    {
        "value": 1125,
        "text": "Resolute Form",
        "type": "WATER",
        "dualtype": "FIGHTING",
        "evolve": [ 647, 1125 ],
        "generation": 8
    },
    {
        "value": 1126,
        "text": "Pirouette Forme",
        "type": "NORMAL",
        "dualtype": "FIGHTING",
        "evolve": [ 648, 1126 ],
        "generation": 8
    },
    {
        "value": 1127,
        "text": "Shock Drive Genesect",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 649, 1127, 1128, 1129, 1130 ],
        "generation": 8
    },
    {
        "value": 1128,
        "text": "Burn Drive Genesect",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 649, 1127, 1128, 1129, 1130 ],
        "generation": 8
    },
    {
        "value": 1129,
        "text": "Chill Drive Genesect",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 649, 1127, 1128, 1129, 1130 ],
        "generation": 8
    },
    {
        "value": 1130,
        "text": "Douse Drive Genesect",
        "type": "BUG",
        "dualtype": "STEEL",
        "evolve": [ 649, 1127, 1128, 1129, 1130 ],
        "generation": 8
    },
    {
        "value": 1131,
        "text": "Ash-Greninja",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 656, 657, 658, 1131, 1132 ],
        "generation": 8
    },
    {
        "value": 1132,
        "text": "Ash-Greninja",
        "type": "WATER",
        "dualtype": "DARK",
        "evolve": [ 656, 657, 658, 1131, 1132 ],
        "generation": 8
    },
    {
        "value": 1133,
        "text": "Polar Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1134,
        "text": "Tundra Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1135,
        "text": "Continental Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1136,
        "text": "Garden Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1137,
        "text": "Elegant Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1138,
        "text": "Icy Snow Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1139,
        "text": "Modern Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1140,
        "text": "Marine Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1141,
        "text": "Archipelago Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1142,
        "text": "High Plains Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1143,
        "text": "Sandstorm Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1144,
        "text": "River Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1145,
        "text": "Monsoon Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1146,
        "text": "Savanna Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1147,
        "text": "Sun Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1148,
        "text": "Ocean Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1149,
        "text": "Jungle Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1150,
        "text": "Fancy Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1151,
        "text": "Poké Ball Pattern",
        "type": "BUG",
        "dualtype": "FLYING",
        "evolve": [ 664, 665, 666, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151 ],
        "generation": 8
    },
    {
        "value": 1152,
        "text": "Yellow Flower",
        "type": "FAIRY",
        "evolve": [ 1152, 1156, 1161 ],
        "generation": 8
    },
    {
        "value": 1153,
        "text": "Orange Flower",
        "type": "FAIRY",
        "evolve": [ 1153, 1157, 1162 ],
        "generation": 8
    },
    {
        "value": 1154,
        "text": "Blue Flower",
        "type": "FAIRY",
        "evolve": [ 1154, 1158, 1163 ],
        "generation": 8
    },
    {
        "value": 1155,
        "text": "White Flower",
        "type": "FAIRY",
        "evolve": [ 1155, 1159, 1164 ],
        "generation": 8
    },
    {
        "value": 1156,
        "text": "Yellow Flower",
        "type": "FAIRY",
        "evolve": [ 1152, 1156, 1161 ],
        "generation": 8
    },
    {
        "value": 1157,
        "text": "Orange Flower",
        "type": "FAIRY",
        "evolve": [ 1153, 1157, 1162 ],
        "generation": 8
    },
    {
        "value": 1158,
        "text": "Blue Flower",
        "type": "FAIRY",
        "evolve": [ 1154, 1158, 1163 ],
        "generation": 8
    },
    {
        "value": 1159,
        "text": "White Flower",
        "type": "FAIRY",
        "evolve": [ 1155, 1159, 1164 ],
        "generation": 8
    },
    {
        "value": 1160,
        "text": "Eternal Flower Floette",
        "type": "FAIRY",
        "evolve": [ 669, 670, 671, 1160 ],
        "generation": 8
    },
    {
        "value": 1161,
        "text": "Yellow Flower",
        "type": "FAIRY",
        "evolve": [ 1152, 1156, 1161 ],
        "generation": 8
    },
    {
        "value": 1162,
        "text": "Orange Flower",
        "type": "FAIRY",
        "evolve": [ 1153, 1157, 1162 ],
        "generation": 8
    },
    {
        "value": 1163,
        "text": "Blue Flower",
        "type": "FAIRY",
        "evolve": [ 1154, 1158, 1163 ],
        "generation": 8
    },
    {
        "value": 1164,
        "text": "White Flower",
        "type": "FAIRY",
        "evolve": [ 1155, 1159, 1164 ],
        "generation": 8
    },
    {
        "value": 1165,
        "text": "Heart Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1166,
        "text": "Star Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1167,
        "text": "Diamond Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1168,
        "text": "Debutante Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1169,
        "text": "Matron Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1170,
        "text": "Dandy Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1171,
        "text": "La Reine Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1172,
        "text": "Kabuki Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1173,
        "text": "Pharaoh Trim",
        "type": "NORMAL",
        "evolve": [ 676, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173 ],
        "generation": 8
    },
    {
        "value": 1175,
        "text": "Blade Forme",
        "type": "STEEL",
        "dualtype": "GHOST",
        "evolve": [ 679, 680, 681, 1175 ],
        "generation": 8
    },
    {
        "value": 1176,
        "text": "Hisuian Sliggoo",
        "type": "DRAGON",
        "dualtype": "STEEL",
        "evolve": [ 1176, 1177 ],
        "generation": 8
    },
    {
        "value": 1177,
        "text": "Hisuian Goodra",
        "type": "DRAGON",
        "dualtype": "STEEL",
        "evolve": [ 1176, 1177 ],
        "generation": 8
    },
    {
        "value": 1178,
        "text": "Small Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1178, 1181 ],
        "generation": 8
    },
    {
        "value": 1179,
        "text": "Large Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1179, 1182 ],
        "generation": 8
    },
    {
        "value": 1180,
        "text": "Super Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1180, 1183 ],
        "generation": 8
    },
    {
        "value": 1181,
        "text": "Small Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1178, 1181 ],
        "generation": 8
    },
    {
        "value": 1182,
        "text": "Large Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1179, 1182 ],
        "generation": 8
    },
    {
        "value": 1183,
        "text": "Super Size",
        "type": "GHOST",
        "dualtype": "GRASS",
        "evolve": [ 1180, 1183 ],
        "generation": 8
    },
    {
        "value": 1184,
        "text": "Hisuian Avalugg",
        "type": "ICE",
        "dualtype": "ROCK",
        "evolve": [ 712, 713, 1184 ],
        "generation": 8
    },
    {
        "value": 1185,
        "text": "Active Mode",
        "type": "FAIRY",
        "evolve": [ 716, 1185 ],
        "generation": 8
    },
    {
        "value": 1186,
        "text": "Zygarde 10% Forme",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 718, 1186, 1187, 1188, 1189 ],
        "generation": 8
    },
    {
        "value": 1187,
        "text": "Zygarde Complete Forme",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 718, 1186, 1187, 1188, 1189 ],
        "generation": 8
    },
    {
        "value": 1188,
        "text": "Zygarde Core Forme",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 718, 1186, 1187, 1188, 1189 ],
        "generation": 8
    },
    {
        "value": 1189,
        "text": "Zygarde Cell Forme",
        "type": "DRAGON",
        "dualtype": "GROUND",
        "evolve": [ 718, 1186, 1187, 1188, 1189 ],
        "generation": 8
    },
    {
        "value": 1190,
        "text": "Mega Diancie",
        "type": "ROCK",
        "dualtype": "FAIRY",
        "evolve": [ 719, 1190 ],
        "generation": 8
    },
    {
        "value": 1191,
        "text": "Hoopa Unbound",
        "type": "PSYCHIC",
        "dualtype": "DARK",
        "evolve": [ 720, 1191 ],
        "generation": 8
    },
    {
        "value": 1192,
        "text": "Hisuian Decidueye",
        "type": "GRASS",
        "dualtype": "FIGHTING",
        "evolve": [ 722, 723, 724, 1192 ],
        "generation": 8
    },
    {
        "value": 1193,
        "text": "Totem Gumshoos",
        "type": "NORMAL",
        "evolve": [ 734, 735, 1193 ],
        "generation": 8
    },
    {
        "value": 1194,
        "text": "Totem Vikavolt",
        "type": "BUG",
        "dualtype": "ELECTRIC",
        "evolve": [ 736, 737, 738, 1194 ],
        "generation": 8
    },
    {
        "value": 1195,
        "text": "Pom-Pom Style",
        "type": "ELECTRIC",
        "dualtype": "FLYING",
        "evolve": [ 741, 1195, 1196, 1197 ],
        "generation": 8
    },
    {
        "value": 1196,
        "text": "Pa'u Style",
        "type": "PSYCHIC",
        "dualtype": "FLYING",
        "evolve": [ 741, 1195, 1196, 1197 ],
        "generation": 8
    },
    {
        "value": 1197,
        "text": "Sensu Style",
        "type": "GHOST",
        "dualtype": "FLYING",
        "evolve": [ 741, 1195, 1196, 1197 ],
        "generation": 8
    },
    {
        "value": 1198,
        "text": "Totem Ribombee",
        "type": "BUG",
        "dualtype": "FAIRY",
        "evolve": [ 742, 743, 1198 ],
        "generation": 8
    },
    {
        "value": 1199,
        "text": "Rockruff Own-Tempo",
        "type": "ROCK",
        "evolve": [ 1199, 1201 ],
        "generation": 8
    },
    {
        "value": 1200,
        "text": "Midnight Form",
        "type": "ROCK",
        "evolve": [ 744, 745, 1200 ],
        "generation": 8
    },
    {
        "value": 1201,
        "text": "Dusk Form",
        "type": "ROCK",
        "evolve": [ 1199, 1201 ],
        "generation": 8
    },
    {
        "value": 1202,
        "text": "School Form",
        "type": "WATER",
        "evolve": [ 746, 1202 ],
        "generation": 8
    },
    {
        "value": 1203,
        "text": "Totem Araquanid",
        "type": "WATER",
        "dualtype": "BUG",
        "evolve": [ 752, 1203 ],
        "generation": 8
    },
    {
        "value": 1204,
        "text": "Totem Lurantis",
        "type": "GRASS",
        "evolve": [ 753, 754, 1204 ],
        "generation": 8
    },
    {
        "value": 1205,
        "text": "Totem Salazzle",
        "type": "POISON",
        "dualtype": "FIRE",
        "evolve": [ 757, 758, 1205 ],
        "generation": 8
    },
    {
        "value": 1206,
        "text": "Type: Fighting",
        "type": "FIGHTING",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1207,
        "text": "Type: Flying",
        "type": "FLYING",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1208,
        "text": "Type: Poison",
        "type": "POISON",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1209,
        "text": "Type: Ground",
        "type": "GROUND",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1210,
        "text": "Type: Rock",
        "type": "ROCK",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1211,
        "text": "Type: Bug",
        "type": "BUG",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1212,
        "text": "Type: Ghost",
        "type": "GHOST",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1213,
        "text": "Type: Steel",
        "type": "STEEL",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1214,
        "text": "Type: Fire",
        "type": "FIRE",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1215,
        "text": "Type: Water",
        "type": "WATER",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1216,
        "text": "Type: Grass",
        "type": "GRASS",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1217,
        "text": "Type: Electric",
        "type": "ELECTRIC",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1218,
        "text": "Type: Psychic",
        "type": "PSYCHIC",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1219,
        "text": "Type: Ice",
        "type": "ICE",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1220,
        "text": "Type: Dragon",
        "type": "DRAGON",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1221,
        "text": "Type: Dark",
        "type": "DARK",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1222,
        "text": "Type: Fairy",
        "type": "FAIRY",
        "evolve": [ 772, 773, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222 ],
        "generation": 8
    },
    {
        "value": 1223,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1224,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1225,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1226,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1227,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1228,
        "text": "Meteor Form",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1229,
        "text": "Red Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1230,
        "text": "Orange Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1231,
        "text": "Yellow Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1232,
        "text": "Green Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1233,
        "text": "Blue Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1234,
        "text": "Indigo Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1235,
        "text": "Violet Core",
        "type": "ROCK",
        "dualtype": "FLYING",
        "evolve": [ 774, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235 ],
        "generation": 8
    },
    {
        "value": 1236,
        "text": "Totem Togedemaru",
        "type": "ELECTRIC",
        "dualtype": "STEEL",
        "evolve": [ 777, 1236 ],
        "generation": 8
    },
    {
        "value": 1237,
        "text": "Busted Form",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 778, 779, 780, 1237, 1239 ],
        "generation": 8
    },
    {
        "value": 1238,
        "text": "Totem Mimikyu",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 1238, 779, 780 ],
        "generation": 8
    },
    {
        "value": 1239,
        "text": "Totem Mimikyu",
        "type": "GHOST",
        "dualtype": "FAIRY",
        "evolve": [ 778, 779, 780, 1237, 1239 ],
        "generation": 8
    },
    {
        "value": 1240,
        "text": "Totem Kommo-o",
        "type": "DRAGON",
        "dualtype": "FIGHTING",
        "evolve": [ 784, 1240 ],
        "generation": 8
    },
    {
        "value": 1241,
        "text": "Dusk Mane Necrozma",
        "type": "STEEL",
        "dualtype": "PSYCHIC",
        "evolve": [ 800, 1241, 1242, 1243 ],
        "generation": 8
    },
    {
        "value": 1242,
        "text": "Dawn Wings Necrozma",
        "type": "GHOST",
        "dualtype": "PSYCHIC",
        "evolve": [ 800, 1241, 1242, 1243 ],
        "generation": 8
    },
    {
        "value": 1243,
        "text": "Ultra Necrozma",
        "type": "PSYCHIC",
        "dualtype": "DRAGON",
        "evolve": [ 800, 1241, 1242, 1243 ],
        "generation": 8
    },
    {
        "value": 1244,
        "text": "Original Color Magearna",
        "type": "STEEL",
        "dualtype": "FAIRY",
        "evolve": [ 801, 1244 ],
        "generation": 8
    },
    {
        "value": 1245,
        "text": "Gigantamax Melmetal",
        "type": "STEEL",
        "evolve": [ 808, 809, 1245 ],
        "generation": 8
    },
    {
        "value": 1246,
        "text": "Gigantamax Rillaboom",
        "type": "GRASS",
        "evolve": [ 810, 811, 812, 1246 ],
        "generation": 8
    },
    {
        "value": 1247,
        "text": "Gigantamax Cinderace",
        "type": "FIRE",
        "evolve": [ 813, 814, 815, 1247 ],
        "generation": 8
    },
    {
        "value": 1248,
        "text": "Gigantamax Inteleon",
        "type": "WATER",
        "evolve": [ 816, 817, 818, 1248 ],
        "generation": 8
    },
    {
        "value": 1249,
        "text": "Gigantamax Corviknight",
        "type": "FLYING",
        "dualtype": "STEEL",
        "evolve": [ 821, 822, 823, 1249 ],
        "generation": 8
    },
    {
        "value": 1250,
        "text": "Gigantamax Orbeetle",
        "type": "BUG",
        "dualtype": "PSYCHIC",
        "evolve": [ 824, 825, 826, 1250 ],
        "generation": 8
    },
    {
        "value": 1251,
        "text": "Gigantamax Drednaw",
        "type": "WATER",
        "dualtype": "ROCK",
        "evolve": [ 833, 834, 1251 ],
        "generation": 8
    },
    {
        "value": 1252,
        "text": "Gigantamax Coalossal",
        "type": "ROCK",
        "dualtype": "FIRE",
        "evolve": [ 837, 838, 839, 1252 ],
        "generation": 8
    },
    {
        "value": 1253,
        "text": "Gigantamax Flapple",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 840, 841, 842, 1253 ],
        "generation": 8
    },
    {
        "value": 1254,
        "text": "Gigantamax Appletun",
        "type": "GRASS",
        "dualtype": "DRAGON",
        "evolve": [ 840, 841, 842, 1253, 1254 ],
        "generation": 8
    },
    {
        "value": 1255,
        "text": "Gigantamax Sandaconda",
        "type": "GROUND",
        "evolve": [ 843, 844, 1255 ],
        "generation": 8
    },
    {
        "value": 1256,
        "text": "Gulping Form",
        "type": "FLYING",
        "dualtype": "WATER",
        "evolve": [ 845, 1256, 1257 ],
        "generation": 8
    },
    {
        "value": 1257,
        "text": "Gorging Form",
        "type": "FLYING",
        "dualtype": "WATER",
        "evolve": [ 845, 1256, 1257 ],
        "generation": 8
    },
    {
        "value": 1258,
        "text": "Low Key Form",
        "type": "ELECTRIC",
        "dualtype": "POISON",
        "evolve": [ 848, 1258, 1259, 1260 ],
        "generation": 8
    },
    {
        "value": 1259,
        "text": "Gigantamax Toxtricity",
        "type": "ELECTRIC",
        "dualtype": "POISON",
        "evolve": [ 848, 849, 1258, 1259, 1260 ],
        "generation": 8
    },
    {
        "value": 1260,
        "text": "Gigantamax Toxtricity",
        "type": "ELECTRIC",
        "dualtype": "POISON",
        "evolve": [ 848, 849, 1258, 1259, 1260 ],
        "generation": 8
    },
    {
        "value": 1261,
        "text": "Gigantamax Centiskorch",
        "type": "FIRE",
        "dualtype": "BUG",
        "evolve": [ 850, 851, 1261 ],
        "generation": 8
    },
    {
        "value": 1262,
        "text": "Antique Form",
        "type": "GHOST",
        "evolve": [ 1262, 1263 ],
        "generation": 8
    },
    {
        "value": 1263,
        "text": "Antique Form",
        "type": "GHOST",
        "evolve": [ 1262, 1263 ],
        "generation": 8
    },
    {
        "value": 1264,
        "text": "Gigantamax Hatterene",
        "type": "PSYCHIC",
        "dualtype": "FAIRY",
        "evolve": [ 856, 857, 858, 1264 ],
        "generation": 8
    },
    {
        "value": 1265,
        "text": "Gigantamax Grimmsnarl",
        "type": "DARK",
        "dualtype": "FAIRY",
        "evolve": [ 859, 860, 861, 1265 ],
        "generation": 8
    },
    {
        "value": 1266,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1267,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1268,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1269,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1270,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1271,
        "text": "Vanilla Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1272,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1273,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1274,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1275,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1276,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1277,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1278,
        "text": "Ruby Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1279,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1280,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1281,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1282,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1283,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1284,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1285,
        "text": "Matcha Cream",
        "type": "FAIRY",
        "evolve": [ 868, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1286,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1287,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1288,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1289,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1290,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1291,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1292,
        "text": "Mint Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1293,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1294,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1295,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1296,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1297,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1298,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1299,
        "text": "Lemon Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1300,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1301,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1302,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1303,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1304,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1305,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1306,
        "text": "Salted Cream",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1307,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1308,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1309,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1310,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1311,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1312,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1313,
        "text": "Ruby Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1314,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1315,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1316,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1317,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1318,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1319,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1320,
        "text": "Caramel Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1321,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1322,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1323,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1324,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1325,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1326,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1327,
        "text": "Rainbow Swirl",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1328,
        "text": "Gigantamax Alcremie",
        "type": "FAIRY",
        "evolve": [ 868, 869, 1266, 1267, 1268, 1269, 1270, 1271, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328 ],
        "generation": 8
    },
    {
        "value": 1329,
        "text": "Noice Face",
        "type": "ICE",
        "evolve": [ 875, 1329 ],
        "generation": 8
    },
    {
        "value": 1331,
        "text": "Hangry Mode",
        "type": "ELECTRIC",
        "dualtype": "DARK",
        "evolve": [ 877, 1331 ],
        "generation": 8
    },
    {
        "value": 1332,
        "text": "Gigantamax Copperajah",
        "type": "STEEL",
        "evolve": [ 878, 879, 1332 ],
        "generation": 8
    },
    {
        "value": 1333,
        "text": "Gigantamax Duraludon",
        "type": "STEEL",
        "dualtype": "DRAGON",
        "evolve": [ 884, 1333 ],
        "generation": 8
    },
    {
        "value": 1334,
        "text": "Crowned Sword",
        "type": "FAIRY",
        "dualtype": "STEEL",
        "evolve": [ 888, 1334 ],
        "generation": 8
    },
    {
        "value": 1335,
        "text": "Crowned Shield",
        "type": "FIGHTING",
        "dualtype": "STEEL",
        "evolve": [ 889, 1335 ],
        "generation": 8
    },
    {
        "value": 1336,
        "text": "Eternamax Eternatus",
        "type": "POISON",
        "dualtype": "DRAGON",
        "evolve": [ 890, 1336 ],
        "generation": 8
    },
    {
        "value": 1337,
        "text": "Rapid Strike Style",
        "type": "FIGHTING",
        "dualtype": "WATER",
        "evolve": [ 891, 1337, 1338, 1339 ],
        "generation": 8
    },
    {
        "value": 1338,
        "text": "Gigantamax Urshifu",
        "type": "FIGHTING",
        "dualtype": "DARK",
        "evolve": [ 891, 892, 1337, 1338, 1339 ],
        "generation": 8
    },
    {
        "value": 1339,
        "text": "Gigantamax Urshifu",
        "type": "FIGHTING",
        "dualtype": "WATER",
        "evolve": [ 891, 892, 1337, 1338, 1339 ],
        "generation": 8
    },
    {
        "value": 1340,
        "text": "Dada Zarude",
        "type": "DARK",
        "dualtype": "GRASS",
        "evolve": [ 893, 1340 ],
        "generation": 8
    },
    {
        "value": 1341,
        "text": "Ice Rider Calyrex",
        "type": "PSYCHIC",
        "dualtype": "ICE",
        "evolve": [ 898, 1341, 1342 ],
        "generation": 8
    },
    {
        "value": 1342,
        "text": "Shadow Rider Calyrex",
        "type": "PSYCHIC",
        "dualtype": "GHOST",
        "evolve": [ 898, 1341, 1342 ],
        "generation": 8
    },
    {
        "value": 1343,
        "text": "Basculegion-F",
        "type": "WATER",
        "dualtype": "GHOST",
        "evolve": [ 1103, 1343 ],
        "generation": 8
    },
    {
        "value": 1344,
        "text": "Therian Forme",
        "type": "FAIRY",
        "dualtype": "FLYING",
        "evolve": [ 905, 1344 ],
        "generation": 8
    }
];

export const POKEMAP = new Map(POKEMON.map((poke) => [poke.value, poke]));

export default POKEMON;
