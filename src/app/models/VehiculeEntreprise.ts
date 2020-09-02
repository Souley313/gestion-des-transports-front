enum StatutVehicule {
  EN_SERVICE = 'EN_SERVICE',
  HORS_SERVICE = 'HORS_SERVICE',
  EN_REPARATION = 'EN_REPARATION'
}

export class VehiculeEntreprise {
  constructor(
    public immatriculation: string = '',
    public marque: string = '',
    public modele: string = '',
    public photoUrl: string = '',
    public photo: File = null,
    public categorie: string = '',
    public nbPlaces: number = 1,
    public statut: StatutVehicule = StatutVehicule.EN_SERVICE
    ) {}
}
