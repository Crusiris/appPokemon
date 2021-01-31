import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  
  { path: "pokemones", component: PokemonesComponent },
  { path: "search/:finished", component: SearchComponent },
  { path: " ", pathMatch: "full", redirectTo: "pokemones" },
  { path: "**", pathMatch: "full", redirectTo: "pokemones" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
