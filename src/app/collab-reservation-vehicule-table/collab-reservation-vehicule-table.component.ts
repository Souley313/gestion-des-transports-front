import { ReservationVehiculeAffichage } from './../models/ReservationVehiculeAffichage';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collab-reservation-vehicule-table',
  templateUrl: './collab-reservation-vehicule-table.component.html',
  styleUrls: ['./collab-reservation-vehicule-table.component.scss']
})
export class CollabReservationVehiculeTableComponent implements OnInit {

  @Input()
  reservationsVehiculeAffichage: ReservationVehiculeAffichage[];
  reservationModal = new ReservationVehiculeAffichage();
  constructor(private modalService: NgbModal) { }
  afficherDetails(reservation: ReservationVehiculeAffichage, content) {
    this.reservationModal = reservation;
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
