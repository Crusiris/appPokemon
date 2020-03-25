import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import {HttpClient} from '@angular/common/http';
import { map} from "rxjs/operators";
import { element } from 'protractor';


@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  //Variable para guardar el objeto de pokemones
  arrayPokemon: any[]=[];

  

  //Inyectando servicio y modulo http
  constructor(private service:PokemonService, public http: HttpClient) { 

  this.service.getDatapokemon().subscribe(data =>{
    const arrayUrlPokemon = data["results"]
    //mapeando data para hacer peticiones por pokemon
    arrayUrlPokemon.map(pokemon => {
      return this.http.get(pokemon.url).subscribe(dataPokemon=>{

        console.log(dataPokemon)

        this.arrayPokemon.push(dataPokemon)
        
       })
     })
   console.log(this.arrayPokemon)
  })
  }

  ngOnInit() {
  }

}
