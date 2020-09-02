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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
