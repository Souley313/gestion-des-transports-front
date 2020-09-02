import { ReservationVehiculesAffichage } from './../models/ReservationVehiculesAffichage';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reservations-vehicules-present',
  templateUrl: './collab-reservations-vehicules-present.component.html',
  styleUrls: ['./collab-reservations-vehicules-present.component.scss']
})
export class CollabReservationsVehiculesPresentComponent implements OnInit {

  reservationsVehiculesAffichage: ReservationVehiculesAffichage[];

  constructor(protected dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllReservationsVehiculesAffichageInFuture().subscribe(
      value => this.reservationsVehiculesAffichage = value,
      err => { },
      () => { }
    );
  }

}
