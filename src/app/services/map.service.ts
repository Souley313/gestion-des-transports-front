import { VehiculeEntrepriseInfosGenerales } from './../models/VehiculeEntrepriseInfosGenerales';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  protected listeVehicules = new Subject<VehiculeEntrepriseInfosGenerales[]>();

  get listerVehiculesObs() {
    return this.listeVehicules.asObservable();
  }

  transmettreVehicules(vehicules: VehiculeEntrepriseInfosGenerales[]) {
    this.listeVehicules.next(vehicules);
  }

  constructor() { }


}
