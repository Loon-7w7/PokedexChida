import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, switchMap } from "rxjs";
import { PokedexEndpointService, Pokedex_Endpoint_services } from "src/app/interfaces/services/pokedex-endpoint-service.interface";
import { ActionsConstans } from "../../actios/actions-constants";
import { GetListPokedexAction } from "../../actios/pokedex/getListpokedex.action";
import { GetPokedexAction } from "../../actios/pokedex/getPokedex.action";
import { ListPokedexLoadSuccessAction } from "../../actios/pokedex/listPodexLoadSuccess.action";
import { PokedexLoadSuccessAction } from "../../actios/pokedex/pokedexLoadSuccess.action";
import { EffectExecute } from "../interfaces/effect-execute";

@Injectable()
export class listPokedexEffect implements EffectExecute
{

  constructor(private _actions$: Actions ,
    @Inject(Pokedex_Endpoint_services) private endpoint: PokedexEndpointService)
  {
  }

  observable$ = createEffect(() => this.execute());

  execute():Observable<Action>
  {
    return this._actions$.pipe(
      ofType<GetListPokedexAction>(ActionsConstans.GetListPokedexAction),
      switchMap((action) => {
        return this.endpoint.getPokedexlist().pipe(
          switchMap((pokedex) => {
            return [new ListPokedexLoadSuccessAction(pokedex)];
          })
        );
      }),
    );


  }
}
