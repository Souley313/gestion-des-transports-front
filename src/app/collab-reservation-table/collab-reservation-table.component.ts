import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collab-reservation-table',
  templateUrl: './collab-reservation-table.component.html',
  styleUrls: ['./collab-reservation-table.component.scss']
})
export class CollabReservationTableComponent implements OnInit {

  @Input()
  reservationsCovoiturageAffichage: ReservationCovoiturageAffichage[];
  reservationModal = new ReservationCovoiturageAffichage();
  constructor(private modalService: NgbModal) { }
  afficherDetails(reservation: ReservationCovoiturageAffichage, content) {
    this.reservationModal = reservation;
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
