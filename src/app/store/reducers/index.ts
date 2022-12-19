import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app-state/app-state.model';
import { pokemonManagerReducer } from './pokemon/pokemon.reducer';

export const reducers: ActionReducerMap<AppState,any> =
{
  pokemonManager: pokemonManagerReducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
