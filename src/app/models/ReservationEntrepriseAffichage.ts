export class ReservationEntrepriseAffichage {
  constructor(
    public infosChauffeur?: string,
    public dateDepart?: Date,
    public dateArrivee?: Date,
    public immatriculation?: string,
    public marque?: string,
    public modele?: string,
    public reservationId?: number,
    public statut?: string,
  ) { }
}
