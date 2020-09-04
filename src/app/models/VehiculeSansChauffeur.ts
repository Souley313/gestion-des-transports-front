import { DispoReservation } from './DispoReservation';

export class VehiculeSansChauffeur {
  constructor(
    public id: number = 0,
    public immatriculation: string = '',
    public marque: string = '',
    public modele: string = '',
    public photoUrl: string = '',
    public categorie: string = '',
    public statutVehicule: string = '',
    public disposReservation: DispoReservation[] = []
    ) {}

  dateDepartValide( dateDepart: Date): boolean {
    let reservation: any;
    let valid = true;

    for ( reservation in this.disposReservation) {
      if ( dateDepart > reservation.dateDepart && dateDepart < reservation.dateArrivee) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  dateArriveeValide( dateArrivee: Date): boolean {
    let reservation: any;
    let valid = true;

    for ( reservation in this.disposReservation) {
      if ( reservation.dateDepart < dateArrivee && reservation.dateArrivee > dateArrivee) {
        valid = false;
        break;
      }
    }
    return valid;
  }
}
