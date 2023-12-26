import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';


const pokemonRoutes: Routes = [ // on indique les routes de chaque composant
  {path : "Pokemons", component : PokemonComponent},
  {path : "Pokemons/:id", component : DetailPokemonComponent},

];

@NgModule({
  declarations: [
    PokemonComponent, // on envoi tout les composant du module
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes) // on renseigne toutes les route du composant
  ],

  providers : [
    PokemonService  // on appel le service dans le module, donc seul les  composant du module aura acces a ce service
  ]
})
export class PokemonModuleModule { }
