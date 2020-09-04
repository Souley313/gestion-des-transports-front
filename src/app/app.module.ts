import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData( localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TechComponent } from './tech/tech.component';
import { RouterModule, Routes } from '@angular/router';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollabMenuComponent } from './collab-menu/collab-menu.component';
import { CollabAnnoncesComponent } from './collab-annonces/collab-annonces.component';
import { CollabReservationsComponent } from './collab-reservations/collab-reservations.component';
import { CollabStatistiquesComponent } from './collab-statistiques/collab-statistiques.component';
import { CollabReserverVehiculeEntrepriseComponent } from './collab-reserver-vehicule-entreprise/collab-reserver-vehicule-entreprise.component';
import { CollabPublierAnnonceComponent } from './collab-publier-annonce/collab-publier-annonce.component';
import { CollabReservationTableComponent } from './collab-reservation-table/collab-reservation-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    CollabMenuComponent,
    CollabAnnoncesComponent,
    CollabReservationsComponent,
    CollabStatistiquesComponent,
    CollabReserverVehiculeEntrepriseComponent,
    CollabPublierAnnonceComponent,
    CollabReservationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, {
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
