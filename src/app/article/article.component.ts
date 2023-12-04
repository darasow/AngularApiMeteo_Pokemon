// article.component.ts
import { Component } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import * as countryList from 'country-list';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  cityInput: string = '';
  location: any;
  current: any;
  data: any;
  // countries: any;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}
  countries = countryList.getNames();
  apiKey = '29f83a1cf93485288601b303e6748b89'; // Remplacez par votre clé API weatherstack
  getWeather(): void {
    
    const apiUrl = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.cityInput}`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.data = response.data
        this.location = response.data.location;
        this.current = response.data.current;
        this.errorMessage = null;
      })
      .catch((error) => {
        this.data = null;
        this.errorMessage = 'Le pays n\'existe pas ou une erreur s\'est produite.';
        console.error('Erreur lors de la récupération des données météo', error);
      });
  }
}
