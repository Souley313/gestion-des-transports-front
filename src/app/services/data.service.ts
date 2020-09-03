import { VehiculeEntreprise } from './../models/VehiculeEntreprise';
import { AnnonceCovoiturage } from './../models/AnnonceCovoiturage';
import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

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
  creerAnnonceCovoit( annonce: AnnonceCovoiturage): void {
    console.log( 'INFO : Création d\'une annonce covoiturage \n' + JSON.stringify( annonce));
    const request: string = this.URL_BACKEND + 'reservations-covoiturage/';
    this.http.post<JSON>( request, JSON.stringify( annonce));
  }

  getAllReservationsCovoiturageAffichage(matricule: string): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/' + matricule);
  }

}
