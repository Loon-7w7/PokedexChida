import { Action } from "@ngrx/store";
import { ActionsConstans } from "../actions-constants";


export class GetPokemonAction implements Action
{
  readonly type = ActionsConstans.GetPokemonAction;

  constructor(public id: number){}
}
