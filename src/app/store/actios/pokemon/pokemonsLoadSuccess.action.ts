import { Action } from '@ngrx/store';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { ActionsConstans } from '../actions-constants';

/**
 * Acción para obtener el partner del teneant.
 */
export class PokemonLoadSuccessAction implements Action {
  /**
   * Tipo de acción
   */
  readonly type = ActionsConstans.PokemonLoadSuccessAction

  /**
   * Constructor
   * @param request petición
   */
  constructor(public pokemon: Pokemon) {}
}
