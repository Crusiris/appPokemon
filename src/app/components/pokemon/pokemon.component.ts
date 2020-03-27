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
      console.log('en params vieneee')
      console.log(params)
     
      this.service.goPokemon(params['index']).subscribe((res:[])=>{
        this.pokemonSelected = res.pop()
        console.log('aquiiiiiiii')
        console.log(this.pokemonSelected.evolution.name)
      })
    })
  }

  return(){
    this.router.navigate(["/pokemones"]);
  }

}
