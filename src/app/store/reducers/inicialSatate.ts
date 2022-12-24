import { AppState } from "../app-state/app-state.model";
import { inicialStateAttackManager } from "../app-state/attack/attack-state.model";
import { inicialStateListPokedexManager } from "../app-state/pokedex/listPokedex-state.model";
import { inicialStatepokedexManager } from "../app-state/pokedex/pokedex-statete.model";
import { inicialStatepokemonManager } from "../app-state/pokemon/pokemon-state.model";


export const inicialState: AppState ={
  pokemonManager: inicialStatepokemonManager,
  attackManager: inicialStateAttackManager,
  pokedexManager: inicialStatepokedexManager,
  listpokedexManager: inicialStateListPokedexManager
}
