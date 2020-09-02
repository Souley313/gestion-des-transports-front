import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { CollabReservationsCovoituragePresentComponent } from './collab-reservations-covoiturage-present/collab-reservations-covoiturage-present.component';
import { CollabReservationsCovoituragePastComponent } from './collab-reservations-covoiturage-past/collab-reservations-covoiturage-past.component';
import { CollabReservationsVehiculesPresentComponent } from './collab-reservations-vehicules-present/collab-reservations-vehicules-present.component';
import { CollabReservationsVehiculesPastComponent } from './collab-reservations-vehicules-past/collab-reservations-vehicules-past.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    CollabMenuComponent,
    CollabAnnoncesComponent,
    CollabReservationsComponent,
    CollabStatistiquesComponent,
    CollabReservationsCovoituragePresentComponent,
    CollabReservationsCovoituragePastComponent,
    CollabReservationsVehiculesPresentComponent,
    CollabReservationsVehiculesPastComponent
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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
