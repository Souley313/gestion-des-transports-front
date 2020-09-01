import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Collegue } from '../auth/auth.domains';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collab-menu',
  templateUrl: './collab-menu.component.html',
  styleUrls: ['./collab-menu.component.scss']
})
export class CollabMenuComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe(
      () => this.router.navigate(['/auth'])
    );
  }

  collegueConnexion = new Collegue({ nom: 'THIAM', prenom: 'Souleymane' }); // Création d'un mock de Collegue pour affichage

  ngOnInit(): void {
  }

}
