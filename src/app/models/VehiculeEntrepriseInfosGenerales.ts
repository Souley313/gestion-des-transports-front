export class VehiculeEntrepriseInfosGenerales {
  constructor(
    public immatriculation?: string,
    public marque?: string,
    public modele?: string,
    public categorie?: string,
    public nbPlaces?: number,
    public photoUrl?: string,
    public statutVehicule?: string,
    public id?: number
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
