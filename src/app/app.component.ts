
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Pokemon } from './models/pokemon/pokemon.model';
import { GetListPokedexAction } from './store/actios/pokedex/getListpokedex.action';
import { GetPokedexAction } from './store/actios/pokedex/getPokedex.action';
import { GetPokemonAction } from './store/actios/pokemon/get-pokemon.acction';
import { AppState } from './store/app-state/app-state.model';
import { inicialStatepokemonManager } from './store/app-state/pokemon/pokemon-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Selectorapp: number = 133;
  constructor(protected _store: Store<AppState>)
  {
  }
  ngOnInit(): void {
    this._store.dispatch(new GetPokedexAction(2));
    this._store.dispatch(new GetListPokedexAction())
  }

}
