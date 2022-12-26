import { Pokedex } from "src/app/models/pokedex/pokedex.model";

export interface PokedexState extends Pokedex
{
  isLoading?: boolean;
}

export const inicialStatepokedexManager: PokedexState =
{
  name: "",
  pokemon_entries: [],
}
