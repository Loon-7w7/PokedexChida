import { Injectable } from '@angular/core';
import { PokemonEndpointService } from 'src/app/interfaces/services/Pokemon-endpoint-service.interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { Pokedex } from 'src/app/models/pokedex/pokedex.model';
import { PokedexEndpointService } from 'src/app/interfaces/services/pokedex-endpoint-service.interface';
import { ListPokedex } from 'src/app/models/pokedex/listpokedex.model';
@Injectable()
export class DefaulPokedexService implements PokedexEndpointService {

  private _headers: HttpHeaders


  constructor(private http: HttpClient)
  {
    this._headers = new HttpHeaders();

  }

  getPokedexById(id: number | string): Observable<Pokedex>
  {
    return this.http.get<Pokedex>('https://pokeapi.co/api/v2/pokedex/'+id);
  }
  getPokedexlist(): Observable<ListPokedex>
  {
    return this.http.get<ListPokedex>('https://pokeapi.co/api/v2/pokedex');
  }
}
