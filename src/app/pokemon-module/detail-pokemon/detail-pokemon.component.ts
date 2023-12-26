import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonService } from "../pokemon.service";


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{
     constructor(private router : ActivatedRoute,
       private route : Router, 
       private http: HttpClient,
       private PokemonService : PokemonService
       )
       {}
     PokemonTraite : any|undefined

     ngOnInit(): void {
        const pokemonId : string|null = this.router.snapshot.paramMap.get('id')
        
        if(pokemonId)
        {
          this.PokemonService.getPokemonUrl(+pokemonId).subscribe(
            (pokemonTraite) => {
              this.PokemonTraite = pokemonTraite
            },
            (error) => {
              console.error('Erreur lors de la récupération du Pokémon :', error);
            }
          );
  
        }
    }
    

    goToHome()
    {
      this.route.navigate(['/Pokemons'])
    }
      
}
