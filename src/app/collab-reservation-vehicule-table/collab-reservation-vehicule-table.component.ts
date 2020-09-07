import { ReservationEntrepriseAffichage } from '../models/ReservationEntrepriseAffichage';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collab-reservation-vehicule-table',
  templateUrl: './collab-reservation-vehicule-table.component.html',
  styleUrls: ['./collab-reservation-vehicule-table.component.scss']
})
export class CollabReservationVehiculeTableComponent implements OnInit {

  @Input()
  reservationsEntreprise: ReservationEntrepriseAffichage[];

  constructor() { }

  ngOnInit(): void {
  }

}
