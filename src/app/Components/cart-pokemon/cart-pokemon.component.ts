import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { ElemnetalType } from 'src/app/models/pokemon/elementaltype.model';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { GetPokemonAction } from 'src/app/store/actios/pokemon/get-pokemon.acction';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { inicialStatepokemonManager } from 'src/app/store/app-state/pokemon/pokemon-state.model';

@Component({
  selector: 'app-cart-pokemon',
  templateUrl: './cart-pokemon.component.html',
  styleUrls: ['./cart-pokemon.component.css']
})
export class CartPokemonComponent implements OnInit {
  array = ["1", "2", "3", "4"];
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
        this.pokemonData = data; debugger
        this.array =
        [
          data.sprites.versions["generation-vi"]["x-y"].front_default,
          data.sprites.versions["generation-vi"]["x-y"].front_shiny,
        ];

      }
    });
  }



}
