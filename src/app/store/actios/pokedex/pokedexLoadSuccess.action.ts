import { Action } from "@ngrx/store";
import { Pokedex } from "src/app/models/pokedex/pokedex.model";
import { ActionsConstans } from "../actions-constants";


export class PokedexLoadSuccessAction implements Action
{
  readonly type = ActionsConstans.PokedexLoadSuccessAction;

  constructor(public pokedex: Pokedex){}
}
