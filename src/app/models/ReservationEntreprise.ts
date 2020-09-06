
export class ReservationEntreprise {

  constructor(
    public conducteur: string = '',
    public dateDepart: Date = new Date(),
    public dateArrivee: Date = new Date(),
    public vehiculeId: number = 0
  ) {}
}
