
export class DispoReservation {

  constructor(
    public id: number = 0,
    public dateDepart: Date = new Date(),
    public dateArrivee: Date = new Date(),
    public statutReservation: string = ''
    ) {}
}
