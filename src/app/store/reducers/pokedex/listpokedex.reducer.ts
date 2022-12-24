import { ActionsConstans } from "../../actios/actions-constants";
import { GetListPokedexAction } from "../../actios/pokedex/getListpokedex.action";
import { ListPokedexLoadSuccessAction } from "../../actios/pokedex/listPodexLoadSuccess.action";
import { ListPokedexState } from "../../app-state/pokedex/listPokedex-state.model";
import { inicialState } from "../inicialSatate";

export type PokemonActions = GetListPokedexAction | ListPokedexLoadSuccessAction;


export function ListPokedexManagerReducer(
  state: ListPokedexState= inicialState.listpokedexManager,
  action: PokemonActions)
  {
    switch(action.type)
    {
      case ActionsConstans.GetListPokedexAction :
          return {
            ...state,
            isLoading: false,
          };
        case ActionsConstans.ListPodexLoadSuccessAction:
            return action.pokedexs
      default:
          return state;
    }
  }
