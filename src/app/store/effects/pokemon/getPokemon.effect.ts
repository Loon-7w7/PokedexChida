import { Inject, Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";

import {catchError, switchMap} from 'rxjs/operators'
import { PokemonEndpointService, Pokemon_Endpoint_services } from "src/app/interfaces/services/Pokemon-endpoint-service.interfaces";
import { DefaulPokemonService } from "src/app/services/pokemon/default-pokemon-service";
import { ActionsConstans } from "../../actios/actions-constants";
import { GetPokemonAction } from "../../actios/pokemon/get-pokemon.acction";
import { PokemonLoadSuccessAction } from "../../actios/pokemon/pokemonsLoadSuccess.action";
import { EffectExecute } from "../interfaces/effect-execute";


@Injectable()
export class GetPokemonEffect implements EffectExecute
{

  constructor(private _actions$: Actions ,
    @Inject(Pokemon_Endpoint_services) private endpoint: PokemonEndpointService)
  {
  }

  observable$ = createEffect(() => this.execute());

  execute():Observable<Action>
  {
    return this._actions$.pipe(
      ofType<GetPokemonAction>(ActionsConstans.GetPokemonAction),
      switchMap((action) =>{
        return this.endpoint.getPokemonById(action.id).pipe(
          switchMap((pokemon) => {
            return [new PokemonLoadSuccessAction(pokemon)];
          })
        );
      }),
    );


  }
}
