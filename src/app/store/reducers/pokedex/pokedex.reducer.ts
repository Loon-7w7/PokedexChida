import { ActionsConstans } from "../../actios/actions-constants";
import { GetPokedexAction } from "../../actios/pokedex/getPokedex.action";
import { PokedexLoadSuccessAction } from "../../actios/pokedex/pokedexLoadSuccess.action";
import { inicialStatepokedexManager, PokedexState } from "../../app-state/pokedex/pokedex-statete.model";

export type PokemonActions = GetPokedexAction | PokedexLoadSuccessAction;


export function pokedexManagerReducer(
  state: PokedexState|undefined = inicialStatepokedexManager,
  action: PokemonActions): PokedexState
  {
    switch(action.type)
    {
      case ActionsConstans.GetPokedexAction :
          return {
            ...state,
            isLoading: false,
          };
        case ActionsConstans.PokedexLoadSuccessAction:
            return {
              name: action.pokedex.name,
              pokemon_entries:action.pokedex.pokemon_entries
            }
      default:
          return state;
    }
  }
