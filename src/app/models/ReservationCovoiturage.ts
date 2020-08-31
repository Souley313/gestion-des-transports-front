import { Localisation } from './Localisation';
import { Reservation } from './Reservation';

enum Statut {
  demandee = 'Demandée',
  annulee = 'Annulée',
  terminee = 'Terminée'
}

export class ReservationCovoiturage extends Reservation {
  constructor(
    public dateDepart: Date,
    public depart: Localisation,
    public destination: Localisation,
    public distance: number,
    public tempsTrajet: Date,
    public nbPassager: number,
    public statut: Statut
  ) {
    super( dateDepart, depart, destination, distance, tempsTrajet);
  }
}
