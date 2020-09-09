import { VehiculeEntrepriseInfosGenerales } from './../models/VehiculeEntrepriseInfosGenerales';
import { DataService } from './../services/data.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-details-vehicule',
  templateUrl: './admin-details-vehicule.component.html',
  styleUrls: ['./admin-details-vehicule.component.scss']
})
export class AdminDetailsVehiculeComponent implements OnInit {

  constructor(protected dataService: DataService, private route: ActivatedRoute) { }
  vehuculeId: string;
  vehicule: VehiculeEntrepriseInfosGenerales = new VehiculeEntrepriseInfosGenerales();


  displayedColumns: string[] = ['dateDebut', 'dateFin', 'responsable'];


  ngOnInit(): void {
    this.getVehiculeDetail();
  }

  getVehiculeDetail() {
    this.route.paramMap.subscribe(params => {
      this.vehuculeId = params.get('vehicleEntrepriseId');

      this.dataService.getVehiculeEntreprise(this.vehuculeId).subscribe(response => {
        console.log(response);
        this.vehicule = response;
      });
    });
  }

  updateToInService() {
    this.vehicule.statutVehicule = 'EN_SERVICE';
    this.dataService.updateVehiculeEntreprise(this.vehicule).subscribe(response => {
      this.vehicule = response;
    });
  }

  updateToOutOfService() {
    this.vehicule.statutVehicule = 'HORS_SERVICE';
    this.dataService.updateVehiculeEntreprise(this.vehicule).subscribe(response => {
      this.vehicule = response;
    });
  }

  updateToReparation() {
    this.vehicule.statutVehicule = 'EN_REPARATION';
    this.dataService.updateVehiculeEntreprise(this.vehicule).subscribe(response => {
      this.vehicule = response;
    });
  }

}
