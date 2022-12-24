import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ListPokedex } from "src/app/models/pokedex/listpokedex.model";
import { Pokedex } from "src/app/models/pokedex/pokedex.model";

export const Pokedex_Endpoint_services = new InjectionToken<PokedexEndpointService>('Pokedex_endpoint_services');

export interface PokedexEndpointService
{
  getPokedexById(id: number| string): Observable<Pokedex>;
  getPokedexlist(): Observable<ListPokedex>;
}
