import { NextResponse } from "next/server";

export function GET() {
  // Data dummy nama-nama kucing
  const pokemon = [
    {
      "name": "Pikachu",
      "skills": ["Thunder Shock", "Quick Attack", "Iron Tail"],
      "power": {
        "attack": 55,
        "hp": 35,
        "speed": 90
      },
      "level": 25,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
      "name": "Charizard",
      "skills": ["Flamethrower", "Fly", "Dragon Claw"],
      "power": {
        "attack": 84,
        "hp": 78,
        "speed": 100
      },
      "level": 50,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      "name": "Bulbasaur",
      "skills": ["Vine Whip", "Razor Leaf", "Sleep Powder"],
      "power": {
        "attack": 49,
        "hp": 45,
        "speed": 45
      },
      "level": 12,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      "name": "Squirtle",
      "skills": ["Water Gun", "Bite", "Withdraw"],
      "power": {
        "attack": 48,
        "hp": 44,
        "speed": 43
      },
      "level": 15,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      "name": "Gengar",
      "skills": ["Shadow Ball", "Hypnosis", "Dream Eater"],
      "power": {
        "attack": 65,
        "hp": 60,
        "speed": 110
      },
      "level": 45,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
      "name": "Snorlax",
      "skills": ["Body Slam", "Rest", "Crunch"],
      "power": {
        "attack": 110,
        "hp": 160,
        "speed": 30
      },
      "level": 40,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
      "name": "Lucario",
      "skills": ["Aura Sphere", "Close Combat", "Extreme Speed"],
      "power": {
        "attack": 110,
        "hp": 70,
        "speed": 90
      },
      "level": 48,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    },
    {
      "name": "Gyarados",
      "skills": ["Hydro Pump", "Crunch", "Dragon Dance"],
      "power": {
        "attack": 125,
        "hp": 95,
        "speed": 81
      },
      "level": 42,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
      "name": "Eevee",
      "skills": ["Quick Attack", "Bite", "Double-Edge"],
      "power": {
        "attack": 55,
        "hp": 55,
        "speed": 55
      },
      "level": 10,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
      "name": "Mewtwo",
      "skills": ["Psychic", "Recover", "Aura Sphere"],
      "power": {
        "attack": 110,
        "hp": 106,
        "speed": 130
      },
      "level": 70,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
      "name": "Alakazam",
      "skills": ["Psychic", "Reflect", "Shadow Ball"],
      "power": {
        "attack": 50,
        "hp": 55,
        "speed": 120
      },
      "level": 36,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
      "name": "Machamp",
      "skills": ["Dynamic Punch", "Karate Chop", "Cross Chop"],
      "power": {
        "attack": 130,
        "hp": 90,
        "speed": 55
      },
      "level": 38,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
      "name": "Dragonite",
      "skills": ["Hyper Beam", "Dragon Claw", "Hurricane"],
      "power": {
        "attack": 134,
        "hp": 91,
        "speed": 80
      },
      "level": 55,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
      "name": "Blastoise",
      "skills": ["Hydro Pump", "Ice Beam", "Skull Bash"],
      "power": {
        "attack": 83,
        "hp": 79,
        "speed": 78
      },
      "level": 45,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
      "name": "Venusaur",
      "skills": ["Solar Beam", "Sludge Bomb", "Sleep Powder"],
      "power": {
        "attack": 82,
        "hp": 80,
        "speed": 80
      },
      "level": 44,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
      "name": "Arcanine",
      "skills": ["Flare Blitz", "Extreme Speed", "Crunch"],
      "power": {
        "attack": 110,
        "hp": 90,
        "speed": 95
      },
      "level": 46,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
      "name": "Jolteon",
      "skills": ["Thunderbolt", "Pin Missile", "Quick Attack"],
      "power": {
        "attack": 65,
        "hp": 65,
        "speed": 130
      },
      "level": 35,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
      "name": "Lapras",
      "skills": ["Ice Beam", "Surf", "Sing"],
      "power": {
        "attack": 85,
        "hp": 130,
        "speed": 60
      },
      "level": 39,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
      "name": "Scyther",
      "skills": ["X-Scissor", "Wing Attack", "Swords Dance"],
      "power": {
        "attack": 110,
        "hp": 70,
        "speed": 105
      },
      "level": 33,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
      "name": "Gardevoir",
      "skills": ["Moonblast", "Psychic", "Calm Mind"],
      "power": {
        "attack": 85,
        "hp": 68,
        "speed": 80
      },
      "level": 41,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    }
  ]


  // Mengirimkan respons dalam format JSON
  return NextResponse.json(pokemon);
}