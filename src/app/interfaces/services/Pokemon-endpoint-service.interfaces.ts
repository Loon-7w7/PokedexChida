
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';

export const Pokemon_Endpoint_services = new InjectionToken<PokemonEndpointService>('Pokemon_endpoint_services');

export interface PokemonEndpointService
{
  getPokemonById(id: number): Observable<Pokemon>;
}
