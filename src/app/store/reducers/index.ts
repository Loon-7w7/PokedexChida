import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app-state/app-state.model';
import { AttacksManagerReducer } from './attack/attack.reducer';
import { pokedexManagerReducer } from './pokedex/pokedex.reducer';
import { pokemonManagerReducer } from './pokemon/pokemon.reducer';

export const reducers: ActionReducerMap<AppState,any> =
{
  pokemonManager: pokemonManagerReducer,
  attackManager: AttacksManagerReducer,
  pokedexManager: pokedexManagerReducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
