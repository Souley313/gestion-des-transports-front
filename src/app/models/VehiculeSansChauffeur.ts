import { Reservation } from './Reservation';
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

}
