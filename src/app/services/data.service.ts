import { VehiculeEntreprise } from './../models/VehiculeEntreprise';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getVehiculesEntreprise(): Observable<VehiculeEntreprise[]> {
    console.log( 'INFO : Récupération des véhicules de société');
    const request: string = this.URL_BACKEND + '';
    return this.http.get<VehiculeEntreprise[]>( request);
  }
}
