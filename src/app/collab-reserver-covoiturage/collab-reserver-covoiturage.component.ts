import { AnnonceCovoiturageAffichage } from './../models/AnnonceCovoiturageAffichage';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reserver-covoiturage',
  templateUrl: './collab-reserver-covoiturage.component.html',
  styleUrls: ['./collab-reserver-covoiturage.component.scss']
})
export class CollabReserverCovoiturageComponent implements OnInit {
  annoncesCovoiturageAffichage: AnnonceCovoiturageAffichage[];
  matricule: string;
  constructor(protected dataService: DataService, protected authService: AuthService) { }

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
