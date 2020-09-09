export class VehiculeEntrepriseInfosGenerales {
  constructor(
    public immatriculation?: string,
    public marque?: string,
    public modele?: string,
    public categorie?: string,
    public nbPlaces?: number,
    public photoUrl?: string,
    public statutVehicule?: string,
    public reservationsEntreprise?: ReservationEntreprise[],
    public id?: number,
    public latitude?: number,
    public longitude?: number
  ) { }
}

export const CATEGORIES_VEHICULE = [
  { name: 'Micro-urbaines' },
  { name: 'Mini-citadines' },
  { name: 'Citadines polyvalentes' },
  { name: 'Compactes' },
  { name: 'Berlines Taille S' },
  { name: 'Berlines Taille M' },
  { name: 'Berlines Taille L' },
  { name: 'SUV, Tout-terrains et Pick-up' }
];

export class ReservationEntreprise {
  public reservant: string;
  public dateDepart: any;
  public dateArrivee: any;
  public vehiculeId: number;
  public avecChauffeur: boolean;
}
