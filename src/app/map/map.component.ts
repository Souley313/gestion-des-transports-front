import { VehiculeEntrepriseInfosGenerales } from './../models/VehiculeEntrepriseInfosGenerales';
import { MapService } from './../services/map.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {

  public vehicules: VehiculeEntrepriseInfosGenerales[];
  public vehiculesSub: Subscription;
  public affichageMap: L.Map;
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor(protected mapService: MapService) {
  }

  addMarkerVehicule(vehicule: VehiculeEntrepriseInfosGenerales): void {
    const marker = L.marker([vehicule.latitude, vehicule.longitude], { icon: this.smallIcon });
    marker.addTo(this.affichageMap).bindPopup(vehicule.immatriculation);
  }

  ngOnInit(): void {
    this.vehiculesSub = this.mapService.listerVehiculesObs.subscribe(
      value => {
        this.vehicules = value;
        this.vehicules.forEach(vehicule => {
          this.addMarkerVehicule(vehicule);
        });
      },
      err => { },
      () => { }
    );
  }

  ngAfterViewInit(): void {
    this.affichageMap = L.map('myMap').setView([48.853, 2.3484], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      minZoom: 6,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoiY29sb3J0ZWFtIiwiYSI6ImNrZXR0c3N1YjA1azEyc3RqMjNyc3FzcTQifQ.DYVmzTdAAk69vXaUjeqVGw'
    }).addTo(this.affichageMap);
  }

  ngOnDestroy(): void {
    this.vehiculesSub.unsubscribe();
  }

}
