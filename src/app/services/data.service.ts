import { AnnonceCovoiturage } from './../models/AnnonceCovoiturage';
import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ChauffeurDto } from '../models/ChauffeurDto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  creerAnnonceCovoit( annonce: AnnonceCovoiturage): void {
    console.log( 'INFO : Création d\'une annonce covoiturage \n' + JSON.stringify( annonce));
    const request: string = this.URL_BACKEND + 'reservations-covoiturage/';
    this.http.post<JSON>( request, JSON.stringify( annonce));
  }

  getAllReservationsCovoiturageAffichage(matricule: string): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/' + matricule);
  }

 
  getAllChauffeurs(): Observable<ChauffeurDto[]> {
      return this.http.get<ChauffeurDto[]>(this.URL_BACKEND + 'administrateur/chauffeurs', {
        withCredentials: true
      });
  }

}