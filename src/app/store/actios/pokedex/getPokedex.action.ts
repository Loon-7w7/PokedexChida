import { Action } from "@ngrx/store";
import { ActionsConstans } from "../actions-constants";


export class GetPokedexAction implements Action
{
  readonly type = ActionsConstans.GetPokedexAction;

  constructor(public id: number){}
}
