import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  API_URI = "http://localhost:3000/api/v1/pokemones"

  constructor(private http: HttpClient) {
}
   headers: HttpHeaders = new HttpHeaders({

    "Content-Type": "application/json"
  })


  CargarDatos() : any {

    return this.http.get(`${this.API_URI}/Todos`)
  }


}
