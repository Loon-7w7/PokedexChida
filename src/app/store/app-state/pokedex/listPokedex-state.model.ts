import { ListPokedex } from "src/app/models/pokedex/listpokedex.model";

export interface ListPokedexState extends ListPokedex
{
  isLoading?: boolean;
}

export const inicialStateListPokedexManager: ListPokedexState =
{
  results: []
}
