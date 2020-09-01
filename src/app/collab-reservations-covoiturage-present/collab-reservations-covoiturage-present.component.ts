import { ReservationCovoiturageAffichage } from './../models/ReservationCovoiturageAffichage';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reservations-covoiturage-present',
  templateUrl: './collab-reservations-covoiturage-present.component.html',
  styleUrls: ['./collab-reservations-covoiturage-present.component.scss']
})
export class CollabReservationsCovoituragePresentComponent implements OnInit {

  reservationsCovoiturageAffichage: ReservationCovoiturageAffichage[];

  constructor(protected dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllReservationsCovoiturageAffichageInFuture().subscribe(
      value => this.reservationsCovoiturageAffichage = value,
      err => { },
      () => { }
    );
  }

}
