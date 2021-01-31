import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  arrayPokemones: any[] = [];
  arrayPokemon: any[]=[];
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
                this.arrayPokemones.push({
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
        observer.next(this.arrayPokemones);
      }, 1000);
    });
  }

  //[FOTO, NOMBRE, NUMERO Y TIPO]
  //Peticion Http para obtener name de pokemon y url para obtener informacion mas detallada del pokemon
  getDatapokemon() {
    return this.getQuery("pokemon/?limit=25");
  }

  searchPokemon(finished){
    //Convirtiendo termino en minuscula
    let namePokemon = finished.toLowerCase()
    console.log('------> nombre')
    console.log(namePokemon)
    let pokemon = new Object;
    let specipokemon = new Object;
    //Peticion por nombre
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`).pipe(map((data, index: number) =>{
     //Guardando n una variable el resultado de la peticion
     pokemon = data;
     
     //Obteniendo [name, img, type, ] DESTRUCTURING 
     
       const { name } = pokemon['species'];
        const { url } = pokemon['species'];
        const { front_default } = pokemon['sprites'];
        const [{ type }] = pokemon['types'];
        //peticion para obtener descripcion
         this.http.get(url).subscribe(dataSpecie =>{
          const description = dataSpecie["flavor_text_entries"].filter(
            res => res.language.name === "es"
          );
          const [{ flavor_text }] = description;
          // pusheando al array
           this.arrayPokemon.push({
             
            name: name,
            image: front_default,
            type: type.name,
            evolution: dataSpecie["evolves_from_species"] || {name: 'no posee' },
            description: flavor_text
           })
         })  
   })
  ).subscribe();
  
  return new Observable(observer => {
    setTimeout(() => {
      observer.next(this.arrayPokemon);
    }, 1000);
  });

}


goPokemon(id: string) {
  console.log('------------->')
  console.log(id)
  console.log(this.arrayPokemon)
  return this.searchPokemon(id);
}

}

