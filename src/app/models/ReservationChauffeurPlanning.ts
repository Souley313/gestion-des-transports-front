export class ReservationChauffeurPlanning {
  constructor(
    public dateDebut?: Date,
    public dateFin?: Date,
    public infosPassager?: string,
    public telPassager?: string,
    public immatriculation?: string,
    public statut?: string,
    public reservationId?: number,
  ) {}
}
