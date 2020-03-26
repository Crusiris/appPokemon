import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-poke-card",
  templateUrl: "./poke-card.component.html",
  styleUrls: ["./poke-card.component.scss"]
})
export class PokeCardComponent implements OnInit {
  //Variable para guardar el objeto de pokemones
  Pokemones: any[] = [];

  //Inyectando servicio y modulo http
  constructor(private service: PokemonService, public http: HttpClient) {
    this.service.getDatapokemon().subscribe((data: any[]) => {
      this.Pokemones = data
    });
  }

  ngOnInit() {}
}

