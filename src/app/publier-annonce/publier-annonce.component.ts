import { mockAnnonce } from './../mocks/MockAnnonceCovoiturage';
import { DataService } from './../services/data.service';
import { AnnonceCovoiturage } from '../models/AnnonceCovoiturage';
import { Component, OnInit} from '@angular/core';
import { formatDate } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { CollegueDto } from '../models/CollegueDto';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.scss']
})
export class PublierAnnonceComponent implements OnInit {

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
