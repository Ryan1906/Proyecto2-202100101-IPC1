import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PokemonInterface } from 'src/app/models/PokemonInterface';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: any
  handleSearch(value: string ){
    this.filtro_valor = value
  }

  filtro_valor = ''

  searchText:any;
  constructor(public pokemonService : PokemonService, private http:HttpClient) { }

  datosPokemon: PokemonInterface[] = [];

  //Arreglo de Pokemons



  ngOnInit(): void {
   this.ObtenerPokemons()

  }
  ObtenerPokemons(){

    this.pokemonService.CargarDatos().subscribe(async (res) =>
    {
      let valores: any = res
      this.datosPokemon = valores
     console.log("Valores")
      console.log(valores)

    },
    err => console.log(err))


  }
  FiltroId(){
    let id1 = this.value;



    this.http.get<any>(`http://localhost:3000/api/v1/pokemones/${this.value}`).subscribe(async (res) =>
    {
     let valores: any = res;
      this.datosPokemon = valores;

    },
    err => console.log(err));
  }

}
