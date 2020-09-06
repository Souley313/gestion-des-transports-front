import { DispoReservation } from './../models/DispoReservation';
import { VehiculeSansChauffeur } from './../models/VehiculeSansChauffeur';

export const mockVehiculeSansChauffeur1 = new VehiculeSansChauffeur(
  1, 'PRO-000-01', 'Fiat', 'Multipla',
  'https://s1.cdn.autoevolution.com/images/gallery/FIATMultipla-2416_1.jpg',
  'Citadine', 'EN_SERVICE', [
    new DispoReservation( 1, new Date( 2020, 12, 1, 8), new Date( 2020, 12, 9, 20), 'ACCEPTEE'),
    new DispoReservation( 2, new Date( 2020, 12, 10, 8), new Date( 2020, 12, 19, 20), 'ACCEPTEE'),
    new DispoReservation( 3, new Date( 2020, 12, 20, 8), new Date( 2020, 12, 29, 20), 'ANNULEE')
  ]);

export const mockVehiculeSansChauffeur2 = new VehiculeSansChauffeur(
  2, 'PRO-000-02', 'Mercedes', 'Cla',
  'https://i.ytimg.com/vi/HD-vr3x9raU/maxresdefault.jpg',
  'Coupé', 'EN_SERVICE', [
    new DispoReservation( 4, new Date( 2020, 11, 1, 8), new Date( 2020, 11, 9, 20), 'ACCEPTEE'),
    new DispoReservation( 5, new Date( 2020, 11, 10, 8), new Date( 2020, 11, 19, 20), 'ACCEPTEE'),
    new DispoReservation( 6, new Date( 2020, 11, 20, 8), new Date( 2020, 11, 29, 20), 'ANNULEE')
  ]);

export const mockVehiculeSansChauffeur3 = new VehiculeSansChauffeur(
  3, 'PRO-000-03', 'Opel', 'Corsa',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Opel_Corsa_C_1.2_Elegance_front_20100912.jpg/1200px-Opel_Corsa_C_1.2_Elegance_front_20100912.jpg',
  'Citadine', 'HORS_SERVICE', [
    new DispoReservation( 7, new Date( 2020, 10, 1, 8), new Date( 2020, 10, 9, 20), 'ACCEPTEE'),
    new DispoReservation( 8, new Date( 2020, 10, 10, 8), new Date( 2020, 10, 19, 20), 'ACCEPTEE'),
    new DispoReservation( 9, new Date( 2020, 10, 20, 8), new Date( 2020, 10, 29, 20), 'ANNULEE')
  ]);

export const mockVehiculesSansChauffeur = [ mockVehiculeSansChauffeur1, mockVehiculeSansChauffeur2, mockVehiculeSansChauffeur3];
