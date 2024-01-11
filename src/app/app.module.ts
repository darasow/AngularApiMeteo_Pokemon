// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Ajout de cette ligne

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { AsidesComponent } from './asides/asides.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Page404Component } from './page404/page404.component';
import { PokemonModuleModule } from './pokemon-module/pokemon-module.module';
import { MemoryDataService } from "./memory-data.service";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PokemonApiService } from './teste';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ArticleComponent,
    AsidesComponent,
    AcceuilComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Ajout de cette ligne pour les formulaires
    PokemonModuleModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService,{passThruUnknownUrl: true}),
     AppRoutingModule,
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
// npm install angular-in-memory-web-api --save-dev --legacy-peer-deps 
// pour creer une simulation de base de donnee

export class AppModule { }
