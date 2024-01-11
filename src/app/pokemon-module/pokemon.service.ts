import { Inject, Injectable, Optional, forwardRef } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
}) // on evite de d'inclure on service pour toute l'application
export class PokemonService {
 
  private urlPok: string = 'https://pokeapi.co/api/v2/pokemon';
  private inMemoryApiUrl: string = 'api/pokemons';
  
  constructor(private http : HttpClient) {}

// getListePokemeon(): Observable<any[]> {
//   var response = this.http ? this.http.get<any[]>(this.inMemoryApiUrl).pipe(
//     map((data: any) => {
//      return data
//     })
//   ) : of([]);
//   response.subscribe((pokemons: any[]) => {
//     console.log('Pokemons:', pokemons);
//   });
//   return response;
// }
getListePokemeon(): Observable<any[]> {
  return this.http.get(`${this.urlPok}/?limit=200`).pipe(
    map((data: any) => data.results)
  );
}

  getPokemonUrl(pokemonId: number): Observable<any> {
    const apiUrl = `${this.urlPok}/${pokemonId}`;
    return this.http ? this.http.get(apiUrl) : of({});
  }

  getAllPokemonTypes(): Observable<string[]> {
    return this.getListePokemeon().pipe(
      switchMap((pokemons: any[]) => {
        const typeObservables: Observable<any>[] = [];
  
        pokemons.forEach((pokemon: any) => {
          const pokemonId = +this.extractPokemonIdFromUrl(pokemon.url);
          typeObservables.push(this.getPokemonUrl(pokemonId));
        });
  
        return forkJoin(typeObservables).pipe(
          map((pokemonDataArray: any[]) => {
            const allTypes: string[] = [];
  
            pokemonDataArray.forEach((pokemonData: any) => {
              const types = pokemonData.types.map((type: any) => type.type.name);
              allTypes.push(...types);
            });
  
            // Remove duplicates and return unique types
            return Array.from(new Set(allTypes));
          })
        );
      }),
      catchError(this.handleError)
    );
  }
  
  private extractPokemonIdFromUrl(url: string): number {
    // Extract Pokemon ID from the URL
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? +matches[1] : 0;
  }

  private handleError(error: any): Observable<any> {
    console.error('Error fetching Pokemon data:', error);
    return of(null); // You can handle errors based on your use case
  }
}
