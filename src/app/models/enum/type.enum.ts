import { map } from "rxjs";

export enum TypePokemon
{
  steel = 'steel',
  water = 'water',
  bug = 'bug',
  dragon = 'dragon',
  electric = 'electric',
  ghost = 'ghost',
  fire = 'fire',
  fairy = 'fairy',
  ice = 'ice',
  fighting = 'fighting',
  normal = 'normal',
  grass = 'grass',
  psychic = 'psychic',
  rock = 'rock',
  dark = 'dark',
  ground = 'ground',
  poison = 'poison',
  flying = 'flying',
}


export const TypePokemonStyle = new Map<string, string>
([
  [TypePokemon.bug, 'background-color:#D0F769; color:#FFF;'],
  [TypePokemon.dark, 'background-color:#2C2424; color:#FFF;'],
  [TypePokemon.dragon, 'background-color:#4A27C1; color:#FFF;'],
  [TypePokemon.electric, 'background-color:#F1EA54; color:#FFF;'],
  [TypePokemon.fairy, 'background-color:#D89DF0; color:#FFF;'],
  [TypePokemon.fighting, 'background-color:#F97D0E; color: #FFF;'],
  [TypePokemon.fire, 'background-color:#A4301E; color: #FFF;'],
  [TypePokemon.flying, 'background-color:#A8DFD8; color: #FFF;'],
  [TypePokemon.ghost, 'background-color:#726DAD; color: #FFF;'],
  [TypePokemon.grass,'background-color:#59A34B; color: #FFF;'],
  [TypePokemon.ground, 'background-color:#A1894D; color: #FFF;'],
  [TypePokemon.ice, 'background-color:#78F9E1; color: #000;'],
  [TypePokemon.normal, 'background-color:#DAD4B6; color: #FFF;'],
  [TypePokemon.poison, 'background-color:#5E44AB; color: #FFF;'],
  [TypePokemon.psychic, 'background-color:#B159FF; color: #FFF;'],
  [TypePokemon.rock, 'background-color:#C9B27A; color: #FFF;'],
  [TypePokemon.steel, 'background-color:#A6A6A6; color: #FFF;'],
  [TypePokemon.water, 'background-color:#2E7CC6; color: #FFF;'],
]);
