import { VehiculeSansChauffeur } from './../models/VehiculeSansChauffeur';
import { ReservationSansChauffeur } from './../models/ReservationSansChauffeur';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { formatDate } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collab-reserver-vehicule-entreprise',
  templateUrl: './collab-reserver-vehicule-entreprise.component.html',
  styleUrls: ['./collab-reserver-vehicule-entreprise.component.scss']
})
export class CollabReserverVehiculeEntrepriseComponent implements OnInit {

  reservation = new ReservationSansChauffeur();
  today = new Date();
  todayStr: string;
  dateDepartMin: string;
  dateRetourMin: string;
  vehicules: VehiculeSansChauffeur[];
  vehiculeSelected: VehiculeSansChauffeur = new VehiculeSansChauffeur();
  dateValid = false;

  constructor( private authSrv: AuthService, private dataService: DataService, private modalService: NgbModal) {
    this.dateDepartMin = formatDate( this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  setMinDateRetour(): void {
    this.dateRetourMin = formatDate( this.reservation.dateDepart, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  datesValides(): void {
    this.dateValid = this.vehicules.includes( this.vehiculeSelected) &&
      !this.vehiculeSelected.dispoReservation.filter( reserv => reserv.statutReservation === 'ACCEPTEE')
      .some( datesInvalides =>
        ( new Date( this.reservation.dateDepart).getTime() > new Date( datesInvalides.dateDepart).getTime()
        && new Date( this.reservation.dateDepart).getTime() < new Date( datesInvalides.dateArrivee).getTime())
        || ( new Date( datesInvalides.dateDepart).getTime() < new Date( this.reservation.dateArrivee).getTime()
        && new Date( this.reservation.dateArrivee).getTime() > new Date( datesInvalides.dateArrivee).getTime()));
  }

  selectVehicule( vehicule: VehiculeSansChauffeur): void {
    if ( vehicule.statutVehicule === 'EN_SERVICE') {
      this.vehiculeSelected = vehicule;
      this.reservation.vehiculeId = vehicule.id;
    }
  }

  afficherConfirmation( content: any) {
    this.modalService.open( content);
  }

  reserver(): void {
    this.dataService.postReservationSansChauffeur( this.reservation);
    this.reservation = new ReservationSansChauffeur();
    this.vehiculeSelected = new VehiculeSansChauffeur();
    this.setMinDateRetour();
  }

  ngOnInit(): void {
    this.dataService.getVehiculesEntreprise().subscribe(
      vehicules => this.vehicules = vehicules
     );
    this.authSrv.collegueConnecteObs.subscribe(
      collegue => this.reservation.conducteur = collegue.matricule
    );
  }

}
