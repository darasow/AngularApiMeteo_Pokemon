import { Component, Inject, OnInit, Optional, forwardRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonService } from "../pokemon.service";
import { MemoryDataService } from 'src/app/memory-data.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{
     constructor(private router : ActivatedRoute,
       private route : Router, 
        private pokemonService : PokemonService,
       )
       {}
     PokemonTraite : any|undefined
     pokemonId : string | null | undefined
      
     ngOnInit(): void {
         this.pokemonId = this.router.snapshot.paramMap.get('id')
        if(this.pokemonId)
        {
          // this.idPok = pokemonId
          this.pokemonService.getPokemonUrl(+this.pokemonId).subscribe(
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

    goToEditPokemon(id : number)
    {
      this.route.navigate(['/Pokemons/form', id])
    }
      
}
