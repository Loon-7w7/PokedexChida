import { Inject, Injectable } from '@angular/core';
import { PokemonEndpointService } from 'src/app/interfaces/services/Pokemon-endpoint-service.interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
@Injectable()
export class DefaulPokemonService implements PokemonEndpointService {

  private _headers: HttpHeaders


  constructor(private http: HttpClient)
  {
    this._headers = new HttpHeaders();

  }

  getPokemonById(id: number): Observable<Pokemon>
  {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}
