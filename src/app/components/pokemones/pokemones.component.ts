import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent  {
  
  //Variable para guardar el objeto de pokemones
  Pokemones: any[] = [];

  //Inyectando servicio y modulo http
  constructor(private service: PokemonService, private router: Router) {
    

    this.service.getDatapokemon().subscribe((data: any[]) => {
      this.Pokemones = data
    });
  }

  
}
