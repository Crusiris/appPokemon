import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/////////////*****Modulo para peticiones Http*****////////////
import { HttpClientModule } from '@angular/common/http';
///////////*****ARCHIVO DE RUTAS*****////////////
import { AppRoutingModule } from './app-routing.module';

///////////*****MODULO ANGULAR MATERIAL*****////////////
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


///////////*****COMPONENTES*****////////////
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
