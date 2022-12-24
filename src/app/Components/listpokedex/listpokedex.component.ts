import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { BaseName } from 'src/app/models/attack/baseName.model';
import { ListPokedex } from 'src/app/models/pokedex/listpokedex.model';
import { Pokedex } from 'src/app/models/pokedex/pokedex.model';
import { pokemon_entry } from 'src/app/models/pokedex/pokemon_entrys.model';
import { GetPokedexAction } from 'src/app/store/actios/pokedex/getPokedex.action';
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
  lispokedesob$: Observable<ListPokedex>;
  results: BaseName[] =[]

  selecvalue: string = '';

  constructor(protected _store: Store<AppState>)
  {
    this.pokedexob$ = _store.select(state => state.pokedexManager )
    this.lispokedesob$ = _store.select(state => state.listpokedexManager)
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

    this.lispokedesob$.pipe(takeUntil(this._ngUnsubscribe)).pipe(distinctUntilChanged()).
    subscribe(data =>
      {
        this.results = data.results;
      });


  }
  selectRegion(value: string):void
  {
    this._store.dispatch(new GetPokedexAction(value));
  }

}
