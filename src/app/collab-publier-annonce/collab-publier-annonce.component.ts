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

  constructor( private authSrv: AuthService, private dataService: DataService) {
    this.jstoday = formatDate( this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  publier(): void {
    this.dataService.creerAnnonceCovoit( this.annonce);
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.annonce = mockAnnonce;
    /*this.authSrv.collegueConnecteObs.subscribe(
      colllegue => this.annonce.conducteur = collegue.matricule
      )
    );*/
  }
}
