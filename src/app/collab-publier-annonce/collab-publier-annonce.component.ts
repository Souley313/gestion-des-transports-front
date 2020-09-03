import { Component, OnInit } from '@angular/core';
import { AnnonceCovoiturage } from '../models/AnnonceCovoiturage';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../services/data.service';
import { formatDate } from '@angular/common';
import { mockAnnonce } from '../mocks/MockAnnonceCovoiturage';

@Component({
  selector: 'app-collab-publier-annonce',
  templateUrl: './collab-publier-annonce.component.html',
  styleUrls: ['./collab-publier-annonce.component.scss']
})
export class CollabPublierAnnonceComponent implements OnInit {

  annonce = new AnnonceCovoiturage();
  today = new Date();
  jstoday: string;

  constructor( private authSrv: AuthService, private dataSrv: DataService) {
    this.jstoday = formatDate( this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  publier(): void {
    this.dataSrv.creerAnnonceCovoit( this.annonce);
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.annonce = mockAnnonce;
    this.authSrv.collegueConnecteObs.subscribe(
      collegue => this.annonce.conducteur = collegue.matricule
    );
  }
}
