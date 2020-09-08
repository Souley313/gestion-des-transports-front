export class ReservationChauffeurPlanning {
  constructor(
    public dateDebut?: Date,
    public dateFin?: Date,
    public infosPassager?: string,
    public telPassager?: string,
    public imatriculation?: string,
    public statut?: string,
    public reservationId?: number,
  ) {}
}
