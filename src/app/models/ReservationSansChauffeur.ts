import { formatDate } from '@angular/common';
import { VehiculeEntreprise } from './VehiculeEntreprise';

export class ReservationSansChauffeur {

  constructor(
    public conducteur: string = '',
    public dateDepart: Date = new Date(),
    public dateArrivee: Date = new Date(),
    public vehicule: VehiculeEntreprise = new VehiculeEntreprise()
  ) {}
}
