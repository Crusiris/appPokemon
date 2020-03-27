import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   //Variable para guardar el objeto de pokemon
  pokemon:any[]=[];
  constructor(private activatedRoute:ActivatedRoute, private service:PokemonService) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      
      this.service.searchPokemon( params['finished']).subscribe((data: any[])=>{
        console.log(data)
        this.pokemon = data
      });
      
    })
  }

}
