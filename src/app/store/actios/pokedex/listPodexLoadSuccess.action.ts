import { Action } from "@ngrx/store";
import { ListPokedex } from "src/app/models/pokedex/listpokedex.model";
import { ActionsConstans } from "../actions-constants";

export class ListPokedexLoadSuccessAction implements Action
{
  readonly type = ActionsConstans.ListPodexLoadSuccessAction;

  constructor(public pokedexs: ListPokedex){}
}
