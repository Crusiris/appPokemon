import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  arrayPokemon: any[] = [];
  constructor(public http: HttpClient) {}
  //Centralizando peticion
  getQuery(query: string) {
    const url = `https://pokeapi.co/api/v2/${query}`;
    this.http
      .get(url)
      .pipe(
        map(res => {
          res["transformData"] = [];
           //Recorriendo la data para hacer peticiones por pokemon
          res["results"].forEach(pokemon => {
            //Peticiones a urls pokemon
            this.http.get(pokemon.url).subscribe(dataPokemon => {
              //destructuring
              const { front_default } = dataPokemon["sprites"];
              const [{ type }] = dataPokemon["types"];
              const { url, name } = dataPokemon["species"];
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
        })
      )
      .subscribe();

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.arrayPokemon);
      }, 1000);
    });
  }

  //[FOTO, NOMBRE, NUMERO Y TIPO]
  //Peticion Http para obtener name de pokemon y url para obtener informacion mas detallada del pokemon
  getDatapokemon() {
    return this.getQuery("pokemon/?limit=25");
  }

  searchPokemon(finished){
    let namePokemon = finished.toLowerCase()
   return this.http.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`).subscribe(data=>{
     console.log(data)
   })
  }

}
