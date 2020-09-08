import { VehiculeEntrepriseInfosGenerales } from './../models/VehiculeEntrepriseInfosGenerales';
import { MapService } from './../services/map.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  public vehicules: VehiculeEntrepriseInfosGenerales[];
  public vehiculesSub: Subscription;

  constructor(protected mapService: MapService) {
  }

  ngOnInit(): void {
    this.vehiculesSub = this.mapService.listerVehiculesObs.subscribe(
      value => this.vehicules = value,
      err => { },
      () => { }
    );
  }

  ngOnDestroy(): void {
    this.vehiculesSub.unsubscribe();
  }

}
