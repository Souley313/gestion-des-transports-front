import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Collegue} from '../auth/auth.domains';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) {

  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe(
      () => this.router.navigate(['/auth'])
    );
  }

  ngOnInit(): void {
  }
}
