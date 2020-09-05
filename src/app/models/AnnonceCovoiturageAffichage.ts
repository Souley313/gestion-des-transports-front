export class AnnonceCovoiturageAffichage {

  public tempsTrajet: Date;
  public distance: number;

  constructor(
    public id?: number,
    public dateDepart?: Date,
    public infosDepart?: string,
    public infosDestination?: string,
    public statutReservationCovoiturage?: string,
    public infosVehiculeParticulier?: string,
    public infosConducteur?: string,
    public nbPlacesDisponibles?: number
  ) { }
}
