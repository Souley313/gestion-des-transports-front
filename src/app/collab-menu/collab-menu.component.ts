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

  utilisateur: Collegue;

  constructor(private authService: AuthService, private router: Router) { }

  seDeconnecter() {
    this.authService.seDeconnecter().subscribe(
      () => this.router.navigate(['/auth'])
    );
  }

  ngOnInit(): void {
    this.authService.collegueConnecteObs.subscribe(
      value => this.utilisateur = value,
      err => { },
      () => { }
    );
  }

}
