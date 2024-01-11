import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-forme',
  templateUrl: './pokemon-forme.component.html',
  styleUrls: ['./pokemon-forme.component.css']
})
export class PokemonFormeComponent implements OnInit {
  @Input() pokemon : any
     typesListe :any[] | undefined
      constructor(
        private pokemonService : PokemonService,
        private router : ActivatedRoute,
        ){
             
      }
      PokemonTraite : any|undefined
      pokemonId : string | null | undefined
       
      ngOnInit(): void {
                  
          this.pokemonService.getAllPokemonTypes().subscribe(
            types => {
              this.typesListe = types
              // console.table(this.typesListe);
            },
            error => {
              console.error('Error :', error);
            }
          );
          this.pokemonId = this.router.snapshot.paramMap.get('id')
         if(this.pokemonId)
         {
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
     
    
     hasType(type : any) : boolean
     {
        var tab : any[]
        var trouve : string[] = []
        tab = this.PokemonTraite.types
        tab.forEach(element => {
          trouve.push(element.type.name)
      });
      return trouve.includes(type)
     }

     selectedPokemeon(event : Event, type : String)
     {
        const isCheked = (event.target as HTMLInputElement).checked

     }

     onSubmit()
     {

     }

     isTypeValide()
     {
      
     }
}
