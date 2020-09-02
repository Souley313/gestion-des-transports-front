export class ReservationVehiculesAffichage {
  constructor(
    public dateDepart: Date,
    public dateFin: Date,
    public statutReservationCovoiturage: string,
    public immatriculation: string,
    public marque: string,
    public modele: string
  ) { }
}
