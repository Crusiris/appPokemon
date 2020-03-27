import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemonSelected: any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private service:PokemonService, private router: Router) { 
    this.activatedRoute.params.subscribe(params =>{
     
      this.pokemonSelected= this.service.goPokemon(params['index'])
      console.log('pokemon seleccionado')
      
      console.log(this.pokemonSelected)
    })
  }

  return(){
    this.router.navigate(["/pokemones"]);
  }

}
