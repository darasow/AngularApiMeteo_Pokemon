import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  pokemonData: any;
  pokemons: any[] | undefined;

  constructor(
    private route: Router,
    private pokemonService: PokemonService 
  ) {}

  ngOnInit() {
    
    this.pokemonService.getListePokemeon().subscribe((pokemons: any[]) => {
      this.pokemons = pokemons;
  
      // Load images for each Pokémon
      this.pokemons.forEach((pokemon, index) => {
        this.pokemonService.getPokemonUrl(index + 1).subscribe(
          (imageData: any) => {
            // Check if sprites property is defined before accessing its properties
            if (imageData.sprites && imageData.sprites.front_default) {
              pokemon.image = imageData.sprites.front_default;
            } else {
              // Handle the case where sprites is undefined or front_default is not available
              console.error(`Sprites not found for Pokémon with index ${index + 1}`);
            }
          },
          (error) => {
            console.error(`Error fetching data for Pokémon with index ${index + 1}`, error);
          }
        );
      });
    });
  }

  goToDetailePokemon(id : number)
  {
    this.route.navigate(['/Pokemons', id + 1])
  }

  public getListeTabpokemon()
   {
    return this.pokemons
   }
}
