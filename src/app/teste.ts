import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private urlPok: string = 'https://pokeapi.co/api/v2/pokemon';
  private http: HttpClient | undefined;

  constructor(private injector: Injector) {
      this.http = this.injector.get(HttpClient);
  }

  getListePokemeon(): Observable<any[]> {
    return this.http
      ? this.http.get(`${this.urlPok}/?limit=200`).pipe(
          map((data: any) => data.results),
          catchError(this.handleError)
        )
      : of([]);
  }

  getPokemonUrl(pokemonId: number): Observable<any> {
    const apiUrl = `${this.urlPok}/${pokemonId}`;
    return this.http ? this.http.get(apiUrl).pipe(catchError(this.handleError)) : of({});
  }

  private handleError(error: any): Observable<any> {
    console.error('Error fetching Pokemon data:', error);
    return of(null);
  }
}
