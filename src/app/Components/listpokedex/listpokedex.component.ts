import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Pokedex } from 'src/app/models/pokedex/pokedex.model';
import { pokemon_entry } from 'src/app/models/pokedex/pokemon_entrys.model';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { inicialStatepokedexManager } from 'src/app/store/app-state/pokedex/pokedex-statete.model';

@Component({
  selector: 'app-listpokedex',
  templateUrl: './listpokedex.component.html',
  styleUrls: ['./listpokedex.component.css']
})
export class ListpokedexComponent implements OnInit {

  pokedexob$: Observable<Pokedex>;
  numeropokemons: number = 0;
  pokedexP: Pokedex = inicialStatepokedexManager;
  pokemonentries: pokemon_entry[] = [];
  protected _ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(protected _store: Store<AppState>)
  {
    this.pokedexob$ = _store.select(state => state.pokedexManager )
  }

  ngOnInit(): void {
    this.pokedexob$.pipe(takeUntil(this._ngUnsubscribe)).pipe(distinctUntilChanged()).
    subscribe(data => {
      if(data?.name)
      {
        this.pokedexP = data;
        this.pokemonentries = data.pokemon_entries;
        this.numeropokemons = data.pokemon_entries.length
      }
    });
  }

}
