import { AnnonceCovoiturage } from './../models/AnnonceCovoiturage';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  creerAnnonceCovoit( annonce: AnnonceCovoiturage): void {
    console.log( 'INFO : Création d\'une annonce covoiturage');
    const request: string = this.URL_BACKEND + 'reservations-covoiturage/';
    this.http.post<JSON>( request, JSON.stringify( annonce));
  }
}
