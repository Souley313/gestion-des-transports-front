import { mockAnnonce } from './../mocks/MockAnnonceCovoiturage';
import { DataService } from './../services/data.service';
import { AnnonceCovoiturage } from '../models/AnnonceCovoiturage';
import { Component, OnInit} from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.scss']
})
export class PublierAnnonceComponent implements OnInit {

  annonce = new AnnonceCovoiturage();
  today = new Date();
  jstoday: string;

  constructor( private dataService: DataService) {
    this.jstoday = formatDate( this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
    this.annonce = mockAnnonce;
  }

  publier(): void {
  }

  confirmer(): void {
  }

  ngOnInit(): void {
  }

}
