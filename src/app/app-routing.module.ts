import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  
  { path: "pokemones", component: PokemonesComponent },
  { path: "search/:finished", component: SearchComponent },
  { path: "pokemon/:index/:color", component: PokemonComponent },
  { path: " ", pathMatch: "full", redirectTo: "pokemones" },
  { path: "**", pathMatch: "full", redirectTo: "pokemones" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
