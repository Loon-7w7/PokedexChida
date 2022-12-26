import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { TypePokemonStyle } from 'src/app/models/enum/type.enum';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { inicialStatepokemonManager } from 'src/app/store/app-state/pokemon/pokemon-state.model';

@Component({
  selector: 'app-cart-pokemon',
  templateUrl: './cart-pokemon.component.html',
  styleUrls: ['./cart-pokemon.component.css']
})
export class CartPokemonComponent implements OnInit {
  array = ["1", "2"];
  Pokemons$: Observable<Pokemon>;
  pokemonData: Pokemon = inicialStatepokemonManager;
  ImgPokemon: string = ''
  totalStats: number = 0;
  getStyleTypos = TypePokemonStyle;
  protected _ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(protected _store: Store<AppState>)
  {
    this.Pokemons$ = _store.select(state => state.pokemonManager )
  }

  ngOnInit(): void {
    this.Pokemons$.pipe(takeUntil(this._ngUnsubscribe)).pipe(distinctUntilChanged()).
    subscribe(data => {
      if(data?.name)
      {
        this.pokemonData = data;
        this.ImgPokemon = data.sprites.other['official-artwork'].front_default
      }
    });
  }

  sumarStats(stat_base:number)
  {
    this.totalStats + stat_base;
  }



}
