import { VehiculeEntrepriseInfosGenerales } from './../models/VehiculeEntrepriseInfosGenerales';
import { MapService } from './../services/map.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {

  public vehicules: VehiculeEntrepriseInfosGenerales[];
  public vehiculesSub: Subscription;
  public affichageMap: L.Map;

  constructor(protected mapService: MapService) {
  }

  ngOnInit(): void {
    this.vehiculesSub = this.mapService.listerVehiculesObs.subscribe(
      value => {
        this.vehicules = value;
      },
      err => { },
      () => { }
    );
  }

  ngAfterViewInit(): void {
    this.affichageMap = L.map('myMap').setView([48.853, 2.3484], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 12,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoiY29sb3J0ZWFtIiwiYSI6ImNrZXR0c3N1YjA1azEyc3RqMjNyc3FzcTQifQ.DYVmzTdAAk69vXaUjeqVGw'
    }).addTo(this.affichageMap);
  }

  ngOnDestroy(): void {
    this.vehiculesSub.unsubscribe();
  }

}
