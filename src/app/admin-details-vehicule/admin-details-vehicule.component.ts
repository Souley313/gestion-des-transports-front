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
  vehicule: VehiculeEntrepriseInfosGenerales;

  ngOnInit(): void {
    this.getVehuculeDetail();
  }

  getVehuculeDetail() {
    this.route.paramMap.subscribe(params => {
      this.vehuculeId = params.get('vehicleEntrepriseId');

      this.dataService.getVehiculeEntreprise(this.vehuculeId).subscribe(response => {
        console.log(response);
        this.vehicule = response;
      });
    });
  }

}
