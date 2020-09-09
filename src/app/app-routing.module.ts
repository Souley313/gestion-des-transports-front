import { ChauffeurPlanningComponent } from './chauffeur-planning/chauffeur-planning.component';
import { AdminDetailsVehiculeComponent } from './admin-details-vehicule/admin-details-vehicule.component';
import { CollabPublierAnnonceComponent } from './collab-publier-annonce/collab-publier-annonce.component';
import { AdminVehiculesEntrepriseComponent } from './admin-vehicules-entreprise/admin-vehicules-entreprise.component';
import { CollabReserverComponent } from './collab-reserver/collab-reserver.component';
import { CollabAnnoncesComponent } from './collab-annonces/collab-annonces.component';
import { CollabReservationsComponent } from './collab-reservations/collab-reservations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { AdminChauffeursComponent } from './admin-chauffeurs/admin-chauffeurs.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'administrateur/chauffeurs', component: AdminChauffeursComponent, canActivate: [StatutConnecteService] },
  { path: 'collaborateur/reservations', component: CollabReservationsComponent, canActivate: [StatutConnecteService] },
  { path: 'collaborateur/annonces', component: CollabAnnoncesComponent, canActivate: [StatutConnecteService] },
  { path: 'collaborateur/annonces/creer', component: CollabPublierAnnonceComponent, canActivate: [StatutConnecteService] },
  { path: 'collaborateur/reserver', component: CollabReserverComponent, canActivate: [StatutConnecteService] },
  { path: 'administrateur/vehicules', component: AdminVehiculesEntrepriseComponent, canActivate: [StatutConnecteService] },
  { path: 'administrateur/vehicules/:vehicleEntrepriseId', component: AdminDetailsVehiculeComponent, canActivate: [StatutConnecteService] },
  { path: 'chauffeur/planning', component: ChauffeurPlanningComponent, canActivate: [StatutConnecteService]},
  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
