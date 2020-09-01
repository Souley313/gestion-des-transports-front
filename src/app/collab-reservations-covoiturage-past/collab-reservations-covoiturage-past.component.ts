import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reservations-covoiturage-past',
  templateUrl: './collab-reservations-covoiturage-past.component.html',
  styleUrls: ['./collab-reservations-covoiturage-past.component.scss']
})
export class CollabReservationsCovoituragePastComponent implements OnInit {

  reservationsCovoiturageAffichage: ReservationCovoiturageAffichage[];

  constructor(protected dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllReservationsCovoiturageAffichageInPast().subscribe(
      value => this.reservationsCovoiturageAffichage = value,
      err => { },
      () => { }
    );
  }

}
