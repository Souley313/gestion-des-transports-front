import { Component, OnInit } from '@angular/core';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-collab-menu',
  templateUrl: './collab-menu.component.html',
  styleUrls: ['./collab-menu.component.scss']
})
export class CollabMenuComponent implements OnInit {

  constructor() { }

   collegueConnexion = new Collegue( {nom: 'THIAM', prenom: 'Souleymane'}); // Création d'un mock de Collegue pour affichage

  ngOnInit(): void {
  }

}
