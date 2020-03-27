import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-poke-card",
  templateUrl: "./poke-card.component.html",
  styleUrls: ["./poke-card.component.scss"]
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon: any = {};
  @Input() index: number;

  @Output() pokemonSelected: EventEmitter<number>;
  //Variable para guardar el objeto de pokemones
  Pokemones: any[] = [];

  //Inyectando servicio y modulo http
  constructor(private service: PokemonService, private router: Router) {
   
  }

  seePokemon(){
    
   this.router.navigate(["/pokemon", this.pokemon.name]);
   
  }

  ngOnInit() {}
}

