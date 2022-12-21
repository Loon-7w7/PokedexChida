import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { GetPokemonAction } from 'src/app/store/actios/pokemon/get-pokemon.acction';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { inicialStatepokemonManager } from 'src/app/store/app-state/pokemon/pokemon-state.model';

@Component({
  selector: 'app-collapse-attacks',
  templateUrl: './collapse-attacks.component.html',
  styleUrls: ['./collapse-attacks.component.css']
})
export class CollapseAttacksComponent implements OnInit {
  Pokemons$: Observable<Pokemon>;
  pokemonData: Pokemon = inicialStatepokemonManager;
  protected _ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() selector: number = 2;

  constructor(protected _store: Store<AppState>)
  {
    this.Pokemons$ = _store.select(state => state.pokemonManager )
  }

  ngOnInit(): void {
    this._store.dispatch(new GetPokemonAction(this.selector));
    this.Pokemons$.pipe(takeUntil(this._ngUnsubscribe)).pipe(distinctUntilChanged()).
    subscribe(data => {
      if(data?.name)
      {
        this.pokemonData = data;
      }
    });
  }
}
