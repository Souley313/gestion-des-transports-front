import { CollabReserverComponent } from './collab-reserver/collab-reserver.component';
import { CollabStatistiquesComponent } from './collab-statistiques/collab-statistiques.component';
import { CollabAnnoncesComponent } from './collab-annonces/collab-annonces.component';
import { CollabReservationsComponent } from './collab-reservations/collab-reservations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminChauffeursComponent } from './admin-chauffeurs/admin-chauffeurs.component';
import { AdminVehiculesComponent } from './admin-vehicules/admin-vehicules.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'administrateur', component: AdminMenuComponent, canActivate: [StatutConnecteService]},
  { path: 'admin/chauffeurs', component: AdminChauffeursComponent, canActivate: [StatutConnecteService]},
  { path: 'admin/vehicules', component: AdminVehiculesComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/reservations', component: CollabReservationsComponent },
  { path: 'collaborateur/annonces', component: CollabAnnoncesComponent },
  { path: 'collaborateur/statistiques', component: CollabStatistiquesComponent },
  { path: 'collaborateur/reserver', component: CollabReserverComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
