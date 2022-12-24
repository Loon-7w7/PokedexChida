import { Component, Input, OnInit } from '@angular/core';
import { pokemon_entry } from 'src/app/models/pokedex/pokemon_entrys.model';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemon_entris: pokemon_entry = {
    entry_number: 1,
    pokemon_species:
    {
      name: 'Bolbassaur',
      url: ''
    }
  };

  constructor() { }

  ngOnInit(): void {
    debugger
    this.pokemon_entris.entry_number;
  }


}
