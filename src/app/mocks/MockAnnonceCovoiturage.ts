import { mockCollegue } from './MockCollegueDto';
import { AnnonceCovoiturage } from './../models/AnnonceCovoiturage';
import { mockVehicule } from './MockVehiculeParticulier';

export const mockAnnonce = new AnnonceCovoiturage(
  mockCollegue.matricule,
  new Date(),
  'Paris',
  'Marseille',
  3,
  mockVehicule
);
