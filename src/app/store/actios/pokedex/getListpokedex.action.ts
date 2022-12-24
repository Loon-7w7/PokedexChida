import { Action } from "@ngrx/store";
import { ActionsConstans } from "../actions-constants";

export class GetListPokedexAction implements Action
{
  readonly type = ActionsConstans.GetListPokedexAction;

  constructor(){}
}
