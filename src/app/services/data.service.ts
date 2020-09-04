import { ReservationSansChauffeur } from './../models/ReservationSansChauffeur';
import { VehiculeSansChauffeur } from '../models/VehiculeSansChauffeur';
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

  constructor( private http: HttpClient) {}

  creerAnnonceCovoit( annonce: AnnonceCovoiturage): void {
    console.log( 'INFO : Création d\'une annonce covoiturage \n');
    const request: string = this.URL_BACKEND + 'reservations-covoiturage/';
    this.http.post<JSON>( request, JSON.stringify( annonce));
  }

  getAllReservationsCovoiturageAffichage(matricule: string): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/' + matricule);
  }

  getVehiculesEntreprise(): Observable<VehiculeSansChauffeur[]> {
    console.log( 'INFO : Récupération des véhicules de société');
    const request: string = this.URL_BACKEND + 'reservation-entreprise/vehicules/';
    return this.http.get<VehiculeSansChauffeur[]>( request);
  }

  postReservationSansChauffeur( reservation: ReservationSansChauffeur): void {
    console.log( 'INFO : Création d\'une réserrvation sans chauffeur \n' + JSON.stringify( reservation));
    const request: string = this.URL_BACKEND + 'reservation-entreprise/';
    this.http.post<JSON>( request, JSON.stringify( reservation));
  }

}
