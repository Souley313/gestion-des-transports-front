import { VehiculeParticulier } from './VehiculeParticulier';

export class AnnonceCovoiturage {

  public tempsTrajet: Date;
  public distance: number;

  constructor(
    public conducteur: string = '',
    public dateDepart: Date = new Date(),
    public depart: string = '',
    public destination: string = '',
    public nbPassager: number = 0,
    public vehicule: VehiculeParticulier = new VehiculeParticulier()
  ) {}
}
