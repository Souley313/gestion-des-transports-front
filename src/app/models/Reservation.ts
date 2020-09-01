import { Localisation } from './Localisation';

export class Reservation {
  constructor(
    public dateDepart: Date,
    public depart: Localisation,
    public destination: Localisation,
    public distance: number,
    public tempsTrajet: Date
  ) {}
}
