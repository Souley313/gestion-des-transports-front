import { Localisation } from './Localisation';

enum Statut {
  demandee = 'Demandée',
  annulee = 'Annulée',
  terminee = 'Terminée'
}

export class ReservationCovoiturage {
  constructor(
    public dateDepart: Date,
    public depart: Localisation,
    public destination: Localisation,
    public distance: number,
    public tempsTrajet: Date,
    public nbPassager: number,
    public statut: Statut
  ) {}
}
