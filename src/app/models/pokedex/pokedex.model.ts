import { BaseName } from "../attack/baseName.model";
import { pokemon_entry } from "./pokemon_entrys.model";

export interface Pokedex
{
  name: string;
  pokemon_entries: pokemon_entry[]
}
