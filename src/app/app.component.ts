import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FirmaComponent } from './Components/firma/firma.component';
import { GetListPokedexAction } from './store/actios/pokedex/getListpokedex.action';
import { GetPokedexAction } from './store/actios/pokedex/getPokedex.action';
import { AppState } from './store/app-state/app-state.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Selectorapp: number = 133;
  constructor(protected _store: Store<AppState>,private modalService: NzModalService, private titulo: Title)
  {
    titulo.setTitle('Pokedex Paldea Angular');
  }
  ngOnInit(): void {
    this._store.dispatch(new GetPokedexAction(2));
    this._store.dispatch(new GetListPokedexAction())
  }

  VerFimra():void
  {
    this.modalService.create({
      nzTitle: 'Creditos',
      nzContent: FirmaComponent
    });
  }
}
