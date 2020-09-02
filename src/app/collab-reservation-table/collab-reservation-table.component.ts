import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collab-reservation-table',
  templateUrl: './collab-reservation-table.component.html',
  styleUrls: ['./collab-reservation-table.component.scss']
})
export class CollabReservationTableComponent implements OnInit {

  @Input()
  reservationsCovoiturageAffichage: ReservationCovoiturageAffichage[];
  reservationModal = new ReservationCovoiturageAffichage();
  constructor() { }
  afficherDetails(reservation: ReservationCovoiturageAffichage) {
    this.reservationModal = reservation;
  }

  ngOnInit(): void {
  }

}
