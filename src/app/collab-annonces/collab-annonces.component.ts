import { Component, OnInit } from '@angular/core';
import { AnnonceCovoiturage } from '../models/AnnonceCovoiturage';
import { DataService } from '../services/data.service';
import { AnnonceDto } from '../models/annonceDto';

@Component({
  selector: 'app-collab-annonces',
  templateUrl: './collab-annonces.component.html',
  styleUrls: ['./collab-annonces.component.scss']
})
export class CollabAnnoncesComponent implements OnInit {

  annoncesEnCours: AnnonceDto [];
  annoncesHistorique: AnnonceDto [];
  config: any;
  collection = { count: 30, data: [] };

  constructor(private postSrv: DataService ) { 
      this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count,
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


  ngOnInit(): void {
    this.postSrv.getAllAnnonces().subscribe(
      value => {
        this.annoncesEnCours  = value.filter(annonce => new Date(annonce.dateDepart).getTime() > Date.now());
        this.annoncesHistorique = value.filter(annonce => new Date(annonce.dateDepart).getTime() < Date.now());
      },
      err => { },
      () => { }
    );
  }
}
