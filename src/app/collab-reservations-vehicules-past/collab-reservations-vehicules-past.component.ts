import { ReservationVehiculesAffichage } from './../models/ReservationVehiculesAffichage';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reservations-vehicules-past',
  templateUrl: './collab-reservations-vehicules-past.component.html',
  styleUrls: ['./collab-reservations-vehicules-past.component.scss']
})
export class CollabReservationsVehiculesPastComponent implements OnInit {

  reservationsVehiculesAffichage: ReservationVehiculesAffichage[];

  constructor(protected dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllReservationsVehiculesAffichageInPast().subscribe(
      value => this.reservationsVehiculesAffichage = value,
      err => { },
      () => { }
    );
  }

}
