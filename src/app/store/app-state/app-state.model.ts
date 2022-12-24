import { AttackState } from "./attack/attack-state.model";
import { ListPokedexState } from "./pokedex/listPokedex-state.model";
import { PokedexState } from "./pokedex/pokedex-statete.model";
import { PokemonState } from "./pokemon/pokemon-state.model";

export interface AppState
{
  pokemonManager: PokemonState;
  attackManager: AttackState;
  pokedexManager: PokedexState;
  listpokedexManager: ListPokedexState;
}
