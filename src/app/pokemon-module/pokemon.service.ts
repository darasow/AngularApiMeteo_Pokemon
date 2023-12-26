import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable() // on evite de d'inclure on service pour toute l'application
export class PokemonService {
  constructor(private http: HttpClient) { }
  private urlPok: string = 'https://pokeapi.co/api/v2/pokemon';

  getPokemonUrl(pokemonId: number): Observable<any> {
    const apiUrl = `${this.urlPok}/${pokemonId}/`;
    return this.http.get(apiUrl);
  }

  getListePokemeon(): Observable<any[]> {
    return this.http.get(`${this.urlPok}/?limit=200`).pipe(
      map((data: any) => data.results)
    );
  }
}
