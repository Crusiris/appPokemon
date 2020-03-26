import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(public http: HttpClient) {}
//Centralizando peticion
    getQuery(query: string) {
      const url = `https://pokeapi.co/api/v2/${query}`;
      return this.http.get(url);
    }

//[FOTO, NOMBRE, NUMERO Y TIPO]
//Peticion Http para obtener name de pokemon y url para obtener informacion mas detallada del pokemon
    getDatapokemon(){
      return this.getQuery("pokemon/?limit=25")
    }

   

}

