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
  errorVehicule: any;
  closed = true;
  isSubmitted = false;
  hasError = false;
  categories = CATEGORIES_VEHICULE;
  constructor(protected dataService: DataService, private modalService: NgbModal) { }

  updateAffichageImmatriculation(): void {
    this.restartFilter();
    if (this.rechercheVehicule.immatriculation != null && this.rechercheVehicule.immatriculation !== '') {
      this.resultatsRecherche = this.resultatsRecherche
        .filter(vehicule => vehicule.immatriculation.toLowerCase().startsWith(this.rechercheVehicule.immatriculation.toLowerCase()));
    }
  }

  updateAffichageMarque(): void {
    this.restartFilter();
    if (this.rechercheVehicule.marque != null && this.rechercheVehicule.marque !== '') {
      this.resultatsRecherche = this.resultatsRecherche
        .filter(vehicule => vehicule.marque.toLowerCase().startsWith(this.rechercheVehicule.marque.toLowerCase()));
    }
  }

  restartFilter() {
    this.resultatsRecherche = this.vehiculesEntreprise;
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
        this.restartFilter();
      },
      err => { },
      () => { }
    );
  }

}
