export class ReservationCovoiturageAffichage {
  constructor(
    public dateDepart?: Date,
    public infosDepart?: string,
    public infosDestination?: string,
    public statutReservationCovoiturage?: string,
    public infosVehiculeParticulier?: string,
    public infosConducteur?: string
  ) { }
}
