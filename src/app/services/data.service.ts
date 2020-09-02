import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { ReservationVehiculesAffichage } from './../models/ReservationVehiculesAffichage';
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

  getAllReservationsCovoiturageAffichageInFuture(): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/present');
  }

  getAllReservationsCovoiturageAffichageInPast(): Observable<ReservationCovoiturageAffichage[]> {
    return this.http.get<ReservationCovoiturageAffichage[]>(this.URL_BACKEND + 'reservations-covoiturage/past');
  }

  getAllReservationsVehiculesAffichageInFuture(): Observable<ReservationVehiculesAffichage[]> {
    return this.http.get<ReservationVehiculesAffichage[]>(this.URL_BACKEND + 'reservations-vehicules/present');
  }

  getAllReservationsVehiculesAffichageInPast(): Observable<ReservationVehiculesAffichage[]> {
    return this.http.get<ReservationVehiculesAffichage[]>(this.URL_BACKEND + 'reservations-vehicules/past');
  }

}
