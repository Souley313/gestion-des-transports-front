import { AnnonceCovoiturage } from './../models/AnnonceCovoiturage';
import { mockVehicule } from './MockVehiculeParticulier';

export const mockAnnonce = new AnnonceCovoiturage(
  new Date(),
  'Paris',
  'Marseille',
  3,
  mockVehicule
);
