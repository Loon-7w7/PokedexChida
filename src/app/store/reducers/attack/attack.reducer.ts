import { ActionsConstans } from "../../actios/actions-constants";
import { AttackLoadSuccessAction } from "../../actios/attack/attacksLoadSuccess.action";
import { GetAttacksAction } from "../../actios/attack/getAttacks.action";
import { AttackState, inicialStateAttackManager } from "../../app-state/attack/attack-state.model";



export type AttackActions = GetAttacksAction | AttackLoadSuccessAction;


export function AttacksManagerReducer(
  state: AttackState|undefined = inicialStateAttackManager,
  action: AttackActions)
  {
    switch(action.type)
    {
      case ActionsConstans.GetAttacksAction:
          return {
            ...state,
            isLoading: false,
          };
        case ActionsConstans.AttacksLoadSuccessAction:
            return action.Attack
      default:
          return state;
    }
  }
