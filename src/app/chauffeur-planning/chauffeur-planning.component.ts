import { ReservationChauffeurPlanning } from './../models/ReservationChauffeurPlanning';
import { AcceptReservationChauffeur } from './../models/AcceptReservationChauffeur';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chauffeur-planning',
  templateUrl: './chauffeur-planning.component.html',
  styleUrls: ['./chauffeur-planning.component.scss']
})
export class ChauffeurPlanningComponent implements OnInit {

  acceptReservation: AcceptReservationChauffeur = new AcceptReservationChauffeur();
  reservationsChauffeur: ReservationChauffeurPlanning[] = [];

  constructor( private authSrv: AuthService, private dataSrv: DataService) { }

  accepterReservation( reservation: ReservationChauffeurPlanning) {
    this.acceptReservation.reservationId = reservation.reservationId;
    this.dataSrv.accepterReservationChauffeur( this.acceptReservation);
    this.reservationsChauffeur.filter( reserv => reserv === reservation)[0].statut = 'ACCEPTEE';
  }

  ngOnInit(): void {
    this.authSrv.collegueConnecteObs.subscribe(
      value => this.acceptReservation.chauffeurMatricule = value.matricule,
      err => { },
      () => { }
    );
    this.dataSrv.getReservationsByChauffeur( this.acceptReservation.chauffeurMatricule).subscribe(
      reservations => this.reservationsChauffeur = reservations.filter(
        reserv => reserv.statut === 'ACCEPTE' || 'EN_ATTENTE'),
      err => { },
      () => { }
    );
  }

}
