import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { pokemonsListe } from './pokemon-module/pokemon/fichier';


@Injectable({
  providedIn: 'root',
})

export class MemoryDataService implements InMemoryDbService {
  pokemons: any[] | undefined;

  constructor() {}

  createDb(): any {
    return { pokemons: pokemonsListe };
  }
}
