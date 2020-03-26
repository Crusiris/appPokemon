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
  constructor(private service: PokemonService, public http: HttpClient) {
    this.service.getDatapokemon().subscribe(data => {
      const arrayUrlPokemon = data["results"];
      //Recorriendo la data para hacer peticiones por pokemon
      arrayUrlPokemon.forEach(pokemon => {
        //Peticiones a urls pokemon
        this.http.get(pokemon.url).subscribe(dataPokemon => {
          
          //destructuring
          const { front_default } = dataPokemon["sprites"];//img
          const [{ type }] = dataPokemon["types"]; //tipo
          const { url, name } = dataPokemon["species"];//specie
          
          //Peticion url especie y descripcion pokemon 
          this.http.get(url).subscribe(dataSpecie => {
             //destructuring y filtrado de descripcion segun lenguaje
            const description = dataSpecie["flavor_text_entries"].filter(
              res => res.language.name === "es"
            );
            const [{ flavor_text }] = description;
            //pusheando al array
            this.arrayPokemon.push({
              name: name,
              image: front_default,
              type: type.name,
              evolution: dataSpecie["evolves_from_species"] || {name: 'no posee' },
              description: flavor_text
            });
          });
        });
      });
      console.log(this.arrayPokemon);
    });
  }

  ngOnInit() {
  }

}
