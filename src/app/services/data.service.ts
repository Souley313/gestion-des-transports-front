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

  getAllReservationsCovoiturageAffichage(matricule: string): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/' + matricule);
  }

}
