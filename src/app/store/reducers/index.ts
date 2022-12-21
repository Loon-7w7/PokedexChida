import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app-state/app-state.model';
import { AttacksManagerReducer } from './attack/attack.reducer';
import { pokemonManagerReducer } from './pokemon/pokemon.reducer';

export const reducers: ActionReducerMap<AppState,any> =
{
  pokemonManager: pokemonManagerReducer,
  attackManager: AttacksManagerReducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
