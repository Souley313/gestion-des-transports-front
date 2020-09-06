import { AuthService } from './../auth/auth.service';
import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { ReservationVehiculeAffichage } from './../models/ReservationVehiculeAffichage';
import { DataService } from './../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html',
  styleUrls: ['./collab-reservations.component.css']
})
export class CollabReservationsComponent implements OnInit, OnDestroy {
  showVehicules = false;
  showCovoiturages = true;
  showCourses = false;
  reservationsCovoiturageHistoriqueAffichage: ReservationCovoiturageAffichage[];
  reservationsCovoiturageEnCoursAffichage: ReservationCovoiturageAffichage[];
  reservationsVehiculeHistoriqueAffichage: ReservationVehiculeAffichage[];
  reservationsVehiculeEnCoursAffichage: ReservationVehiculeAffichage[];
  matricule: string;
  constructor(protected dataService: DataService, protected authService: AuthService) { }

  toggleVehicules() {
    this.showVehicules = !this.showVehicules;
  }
  toggleCovoiturages() {
    this.showCovoiturages = !this.showCovoiturages;
  }
  toggleCourses() {
    this.showCourses = !this.showCourses;
  }

  ngOnInit(): void {
    this.authService.collegueConnecteObs.subscribe(
      value => this.matricule = value.matricule,
      err => { },
      () => { }
    );

    this.dataService.getAllReservationsCovoiturageAffichageByPassager().subscribe(
      value => {
        this.reservationsCovoiturageHistoriqueAffichage = value.filter(reservation => new Date(reservation.dateDepart).getTime() < Date.now());
        this.reservationsCovoiturageEnCoursAffichage = value.filter(reservation => new Date(reservation.dateDepart).getTime() >= Date.now());
      },
      err => { },
      () => { }
    );

    this.dataService.getAllReservationsVehiculeAffichageByPassager().subscribe(
      value => {
        this.reservationsVehiculeHistoriqueAffichage = value.filter(reservation => new Date(reservation.dateDepart).getTime() < Date.now());
        this.reservationsVehiculeEnCoursAffichage = value.filter(reservation => new Date(reservation.dateDepart).getTime() >= Date.now());
      },
      err => { },
      () => { }
    );
  }

  ngOnDestroy() {
  }

}
