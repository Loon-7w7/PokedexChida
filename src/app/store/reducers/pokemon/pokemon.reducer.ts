import { ActionsConstans } from "../../actios/actions-constants";
import { GetPokemonAction } from "../../actios/pokemon/get-pokemon.acction";
import { PokemonLoadSuccessAction } from "../../actios/pokemon/pokemonsLoadSuccess.action";
import { inicialStatepokemonManager, PokemonState } from "../../app-state/pokemon/pokemon-state.model";



export type PokemonActions = GetPokemonAction | PokemonLoadSuccessAction;


export function pokemonManagerReducer(
  state: PokemonState|undefined = inicialStatepokemonManager,
  action: PokemonActions): PokemonState
  {
    switch(action.type)
    {
      case ActionsConstans.GetPokemonAction:
          return {
            ...state,
            isLoading: false,
          };
        case ActionsConstans.PokemonLoadSuccessAction:
            return {
              name: action.pokemon.name,
              sprites: action.pokemon.sprites,
              types: action.pokemon.types,
              stats: action.pokemon.stats
            };
      default:
          return state;
    }
  }


