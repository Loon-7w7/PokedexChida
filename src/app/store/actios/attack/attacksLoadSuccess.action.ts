import { Action } from '@ngrx/store';
import { Attack } from 'src/app/models/attack/attack.model';
import { ActionsConstans } from '../actions-constants';

/**
 * Acción para obtener el partner del teneant.
 */
export class AttackLoadSuccessAction implements Action {
  /**
   * Tipo de acción
   */
  readonly type = ActionsConstans.AttacksLoadSuccessAction

  /**
   * Constructor
   * @param request petición
   */
  constructor(public Attack: Attack) {}
}
