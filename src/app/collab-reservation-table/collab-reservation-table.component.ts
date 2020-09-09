import { DataService } from './../services/data.service';
import { ReservationCovoiturageAffichageMapper } from './../models/mapper/ReservationCovoiturageAffichageMapper';
import { ReservationCovoiturageUpdateStatutReservation } from './../models/ReservationCovoiturageUpdateStatutReservation';
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
  displayStatut: boolean;
  @Input()
  reservationsCovoiturageAffichage: ReservationCovoiturageAffichage[] = [];
  reservationModal = new ReservationCovoiturageAffichage();
  reservationCovoiturageUpdateStatutReservation = new ReservationCovoiturageUpdateStatutReservation();
  isClosed = true;
  errorAnnulation: any;
  hasError = false;
  isSubmitted = false;

  constructor(private modalService: NgbModal, protected dataService: DataService) { }

  afficherDetails(reservation: ReservationCovoiturageAffichage, content) {
    this.reservationModal = reservation;
    this.modalService.open(content);
  }

  confirmerAnnulation(reservation: ReservationCovoiturageAffichage, content) {
    this.reservationCovoiturageUpdateStatutReservation =
      ReservationCovoiturageAffichageMapper.ReservationCovoiturageAffichageToReservationUpdate(reservation);
    this.modalService.open(content);
  }

  annulerReservation(): void {
    this.dataService.annulerReservation(this.reservationCovoiturageUpdateStatutReservation)
      .subscribe(
        value => {
          this.isClosed = false;
          this.isSubmitted = true;
        },
        err => {
          this.errorAnnulation = err;
          this.isClosed = false;
          this.hasError = true;
        },
        () => { }
      )
      ;
  }

  close(): void {
    this.isClosed = true;
  }

  ngOnInit(): void {
  }

}
