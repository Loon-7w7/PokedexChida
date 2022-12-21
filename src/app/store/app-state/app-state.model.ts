import { AttackState } from "./attack/attack-state.model";
import { PokemonState } from "./pokemon/pokemon-state.model";

export interface AppState
{
  pokemonManager: PokemonState;
  attackManager: AttackState;
}
