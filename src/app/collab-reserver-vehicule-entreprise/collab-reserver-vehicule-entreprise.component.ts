import { ReservationSansChauffeur } from './../models/ReservationSansChauffeur';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-collab-reserver-vehicule-entreprise',
  templateUrl: './collab-reserver-vehicule-entreprise.component.html',
  styleUrls: ['./collab-reserver-vehicule-entreprise.component.scss']
})
export class CollabReserverVehiculeEntrepriseComponent implements OnInit {

  reservation = new ReservationSansChauffeur();
  today = new Date();
  todayStr: string;
  toto: string;

  constructor( private authSrv: AuthService, private dataService: DataService) {
    this.todayStr = formatDate( this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  dateDepartToString(): void {
    this.toto = formatDate( this.reservation.dateDepart, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  ngOnInit(): void {
  }

}
