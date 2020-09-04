import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnonceCovoiturageAffichage } from './../models/AnnonceCovoiturageAffichage';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-collab-reserver-covoiturage',
  templateUrl: './collab-reserver-covoiturage.component.html',
  styleUrls: ['./collab-reserver-covoiturage.component.scss']
})
export class CollabReserverCovoiturageComponent implements OnInit {
  rechercheReservationCovoiturage = new AnnonceCovoiturageAffichage();
  annoncesCovoiturageAffichage: AnnonceCovoiturageAffichage[];
  resultatsRecherche: AnnonceCovoiturageAffichage[];
  matricule: string;
  jstoday: string;
  reservationModal = new AnnonceCovoiturageAffichage();
  afficherAnnonces = false;
  responseReservation: AnnonceCovoiturageAffichage;
  errorReservation: any;
  closed = true;
  isSubmitted = false;
  hasError = false;
  constructor(protected dataService: DataService, protected authService: AuthService, private modalService: NgbModal) {
    this.jstoday = formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  updateAfficherAnnonces(): void {
    this.afficherAnnonces = this.rechercheReservationCovoiturage.dateDepart != null ||
      (this.rechercheReservationCovoiturage.infosDepart != null && this.rechercheReservationCovoiturage.infosDepart !== '') ||
      (this.rechercheReservationCovoiturage.infosDestination != null && this.rechercheReservationCovoiturage.infosDestination !== '');
  }

  updateAffichageDate(): void {
    this.restartFilter();
    if (this.rechercheReservationCovoiturage.dateDepart != null) {
      this.resultatsRecherche = this.resultatsRecherche
        .filter(annonce => new Date(annonce.dateDepart).getTime() === new Date(this.rechercheReservationCovoiturage.dateDepart).getTime());
    }
    this.updateAfficherAnnonces();
  }

  updateAffichageDepart(): void {
    this.restartFilter();
    if (this.rechercheReservationCovoiturage.infosDepart != null && this.rechercheReservationCovoiturage.infosDepart !== '') {
      this.resultatsRecherche = this.resultatsRecherche
        .filter(annonce => annonce.infosDepart.toLowerCase().startsWith(this.rechercheReservationCovoiturage.infosDepart.toLowerCase()));
    }
    this.updateAfficherAnnonces();
  }

  updateAffichageDestination(): void {
    this.restartFilter();
    if (this.rechercheReservationCovoiturage.infosDestination != null && this.rechercheReservationCovoiturage.infosDestination !== '') {
      this.resultatsRecherche = this.resultatsRecherche
        .filter(annonce => annonce.infosDestination.toLowerCase().startsWith(this.rechercheReservationCovoiturage.infosDestination.toLowerCase()));
    }
    this.updateAfficherAnnonces();
  }

  afficherConfirmationReservation(reservation: AnnonceCovoiturageAffichage, content) {
    this.reservationModal = reservation;
    this.modalService.open(content);
  }

  restartFilter() {
    this.resultatsRecherche = this.annoncesCovoiturageAffichage;
  }

  ajouterPassager(annonce: AnnonceCovoiturageAffichage) {
    this.dataService.MAjouterCommePassagerCovoiturage(annonce).subscribe(
      value => {
        this.responseReservation = value;
        this.isSubmitted = true;
        this.closed = false;
      },
      err => {
        this.errorReservation = err;
        this.hasError = true;
        this.closed = false;
      },
      () => { }
    );
  }

  close() {
    this.closed = true;
  }

  ngOnInit(): void {
    this.authService.collegueConnecteObs.subscribe(
      value => this.matricule = value.matricule,
      err => { },
      () => { }
    );

    this.dataService.getAllAnnoncesCovoiturageAffichage().subscribe(
      value => {
        this.annoncesCovoiturageAffichage = value.filter(annonce => (annonce.statutReservationCovoiturage !== 'ANNULEE') && (annonce.nbPlacesDisponibles > 0));
      },
      err => { },
      () => { }
    );
  }
}
