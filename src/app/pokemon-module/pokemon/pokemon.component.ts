import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent {
  pokemonData: any;
  pokemons: any[] | undefined;

  constructor(
    private http: HttpClient,
    private route : Router,
    private PokemonService : PokemonService
    ) 
  {}

  ngOnInit() {
    // Effectuez la requête HTTP vers l'API Pokémon
    
    this.PokemonService.getListePokemeon().subscribe((pokemons: any[]) => {
      this.pokemons = pokemons;
      // Chargez les images pour chaque Pokémon
      this.pokemons.forEach((pokemon, index) => {
        this.PokemonService.getPokemonUrl(index + 1).subscribe((imageData: any) => {
          pokemon.image = imageData.sprites.front_default;
        });
      });
    });

    
  } 

  goToDetailePokemon(id : number)
  {
    this.route.navigate(['/Pokemons', id + 1])
  }

}
