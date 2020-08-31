import { VehiculeParticulier } from './VehiculeParticulier';
export class AnnonceCovoiturage {

  public tempsTrajet: Date;
  public distance: number;

  constructor(
    public dateDepart: Date = new Date(),
    public depart: string = 'Inconnu',
    public destination: string = 'Inconnu',
    public nbPassager: number = 0,
    public vehicule: VehiculeParticulier = new VehiculeParticulier()
  ) {}
}
