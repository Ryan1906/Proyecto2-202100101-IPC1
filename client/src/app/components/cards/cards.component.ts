import { Component, OnInit, Input } from '@angular/core';
import { PokemonInterface } from 'src/app/models/PokemonInterface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() {

  }

  @Input() datoPokemon : PokemonInterface;
  ngOnInit(): void {
    console.log(this.datoPokemon)
  }

}
