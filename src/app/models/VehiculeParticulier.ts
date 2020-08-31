export class VehiculeParticulier {
  constructor(
    public immatriculation: string = 'Inconnu',
    public marque: string = 'Inconnu',
    public modele: string = 'Inconnu',
    public places: number = 0
    ) {}
}
