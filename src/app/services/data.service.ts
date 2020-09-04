import { AnnonceCovoiturageAffichage } from './../models/AnnonceCovoiturageAffichage';
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

  constructor(private http: HttpClient) { }

  creerAnnonceCovoit(annonce: AnnonceCovoiturage): void {
    console.log('INFO : Création d\'une annonce covoiturage \n' + JSON.stringify(annonce));
    const request: string = this.URL_BACKEND + 'reservations-covoiturage/';
    this.http.post<JSON>(request, JSON.stringify(annonce));
  }

  getAllReservationsCovoiturageAffichage(): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage');
  }

  getAllAnnoncesCovoiturageAffichage(): Observable<AnnonceCovoiturageAffichage[]> {
    return this.http.get<AnnonceCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage');
  }

}
