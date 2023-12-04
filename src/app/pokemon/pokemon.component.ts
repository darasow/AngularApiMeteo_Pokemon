import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemonData: any;
  pokemons: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Effectuez la requête HTTP vers l'API Pokémon
    this.http.get('https://pokeapi.co/api/v2/pokemon/').subscribe((data: any) => {
      this.pokemonData = data;
      this.pokemons = this.pokemonData.results;

      // Chargez les images pour chaque Pokémon
      this.pokemons?.forEach((pokemon, index) => {
        this.getPokemonImage(index + 1).subscribe((imageData: any) => {
          pokemon.image = imageData.sprites.front_default;
        });
      });
    });
  }

  // Fonction pour récupérer l'image d'un Pokémon en fonction de son numéro
  getPokemonImage(pokemonNumber: number) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;
    return this.http.get(apiUrl);
  }

}
