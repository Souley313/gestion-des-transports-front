import { ReservationCovoiturageAffichageMapper } from './../models/mapper/ReservationCovoiturageAffichageMapper';
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

  annoncesEnCours: AnnonceDto[];
  annoncesHistorique: AnnonceDto[];
  isSubmitted = false;
  hasError = false;
  isClosed = true;
  errorAnnulation: any;
  config: any;
  collection = { count: 30, data: [] };

  constructor(private postSrv: DataService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count,
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  annulerAnnonceCovoiturage(annonce: AnnonceDto): void {
    this.postSrv.annulerAnnonce(ReservationCovoiturageAffichageMapper.AnnonceDtoToAnnonceUpdate(annonce))
      .subscribe(
        value => {
          this.isSubmitted = true;
          this.isClosed = false;
        },
        err => {
          this.errorAnnulation = err;
          this.hasError = true;
          this.isClosed = false;
        },
        () => { }
      );
  }

  close() {
    this.isClosed = true;
  }

  ngOnInit(): void {
    this.postSrv.getAllAnnonces().subscribe(
      value => {
        this.annoncesEnCours = value.filter(
          annonce => new Date(annonce.dateDepart).getTime() > Date.now() &&
            annonce.statutAnnonceCovoiturage !== 'ANNULEE_PAR_CONDUCTEUR'
        );
        this.annoncesHistorique = value.filter(
          annonce => new Date(annonce.dateDepart).getTime() < Date.now() ||
            annonce.statutAnnonceCovoiturage === 'ANNULEE_PAR_CONDUCTEUR'
        );
      },
      err => { },
      () => { }
    );
  }
}
