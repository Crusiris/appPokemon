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
  color: String;
  
  

  //Inyectando servicio y modulo http
  constructor(private service: PokemonService, private router: Router) {}

  getType = (type) => {
    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    }
    this.color = colors[type];
    return colors[type];   
  }


  ngOnInit() {}
}

