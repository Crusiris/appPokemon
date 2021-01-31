import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/////////////*****Modulo para peticiones Http*****////////////
import { HttpClientModule } from '@angular/common/http';
///////////*****ARCHIVO DE RUTAS*****////////////
import { AppRoutingModule } from './app-routing.module';

///////////*****MODULO ANGULAR MATERIAL*****////////////
import { MaterialModule } from './material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


///////////*****COMPONENTES*****////////////
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonesComponent,
    PokeCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
