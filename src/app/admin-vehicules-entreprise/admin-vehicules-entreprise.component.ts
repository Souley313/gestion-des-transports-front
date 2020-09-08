import { MapService } from './../services/map.service';
import { DataService } from './../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculeEntrepriseInfosGenerales, CATEGORIES_VEHICULE } from './../models/VehiculeEntrepriseInfosGenerales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-vehicules-entreprise',
  templateUrl: './admin-vehicules-entreprise.component.html',
  styleUrls: ['./admin-vehicules-entreprise.component.scss']
})
export class AdminVehiculesEntrepriseComponent implements OnInit {
  vehiculeCree = new VehiculeEntrepriseInfosGenerales();
  vehiculesEntreprise: VehiculeEntrepriseInfosGenerales[];
  rechercheVehicule = new VehiculeEntrepriseInfosGenerales();
  resultatsRecherche: VehiculeEntrepriseInfosGenerales[];
  resultatsFiltreParImmatriculation: VehiculeEntrepriseInfosGenerales[] = [];
  resultatsFiltreParMarque: VehiculeEntrepriseInfosGenerales[] = [];
  errorVehicule: any;
  closed = true;
  isSubmitted = false;
  hasError = false;
  categories = CATEGORIES_VEHICULE;
  constructor(protected dataService: DataService, private modalService: NgbModal, protected mapSubject: MapService) { }

  updateAffichageImmatriculation(): void {
    if (this.rechercheVehicule.immatriculation != null && this.rechercheVehicule.immatriculation !== '') {
      this.resultatsFiltreParImmatriculation = this.vehiculesEntreprise
        .filter(vehicule => vehicule.immatriculation.toLowerCase().startsWith(this.rechercheVehicule.immatriculation.toLowerCase()));
    } else {
      this.resultatsFiltreParImmatriculation = this.vehiculesEntreprise;
    }
    this.updateResultatsRecherche();
  }

  updateAffichageMarque(): void {
    if (this.rechercheVehicule.marque != null && this.rechercheVehicule.marque !== '') {
      this.resultatsFiltreParMarque = this.vehiculesEntreprise
        .filter(vehicule => vehicule.marque.toLowerCase().startsWith(this.rechercheVehicule.marque.toLowerCase()));
    } else {
      this.resultatsFiltreParMarque = this.vehiculesEntreprise;
    }
    this.updateResultatsRecherche();
  }

  replaceEmptyArray(vehicules: VehiculeEntrepriseInfosGenerales[], champ: any): VehiculeEntrepriseInfosGenerales[] {
    return (champ == null ? this.vehiculesEntreprise : vehicules);
  }

  updateResultatsRecherche(): void {
    this.resultatsRecherche = this.replaceEmptyArray(this.resultatsFiltreParImmatriculation, this.rechercheVehicule.immatriculation)
      .filter(vehicule => this.replaceEmptyArray(this.resultatsFiltreParMarque, this.rechercheVehicule.marque).includes(vehicule));
    this.mapSubject.transmettreVehicules(this.resultatsRecherche);
  }

  afficherModalCreation(modal) {
    this.modalService.open(modal);
  }

  close(): void {
    this.closed = true;
  }

  ajouterVehicule(): void {
    this.dataService.creerVehiculeEntreprise(this.vehiculeCree).subscribe(
      value => {
        this.isSubmitted = true;
        this.closed = false;
      },
      err => {
        this.errorVehicule = err;
        this.hasError = true;
        this.closed = false;
      },
      () => { }
    );
  }

  ngOnInit(): void {
    this.dataService.getAllVehiculesEntreprise().subscribe(
      value => {
        this.vehiculesEntreprise = value;
        this.resultatsRecherche = this.vehiculesEntreprise;
        this.mapSubject.transmettreVehicules(this.resultatsRecherche);
      },
      err => { },
      () => { }
    );
  }

}
