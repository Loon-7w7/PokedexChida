import { Action } from "@ngrx/store";
import { ActionsConstans } from "../actions-constants";


export class GetAttacksAction implements Action
{
  readonly type = ActionsConstans.GetAttacksAction;

  constructor(public name: string){}
}
