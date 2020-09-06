
export class ReservationEntreprise {

  constructor(
    public reservant: string = '',
    public dateDepart: Date = new Date(),
    public dateArrivee: Date = new Date(),
    public vehiculeId: number = 0,
    public avecChauffeur: boolean = false
  ) {}
}
