import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AnnonceCovoiturage } from '../models/AnnonceCovoiturage';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../services/data.service';
import { formatDate } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collab-publier-annonce',
  templateUrl: './collab-publier-annonce.component.html',
  styleUrls: ['./collab-publier-annonce.component.scss']
})
export class CollabPublierAnnonceComponent implements OnInit {

  annonce = new AnnonceCovoiturage();
  today = new Date();
  jstoday: string;
  error: any;
  closed = true;
  isSubmitted = false;
  hasError = false;

  constructor(private authSrv: AuthService, private dataSrv: DataService, private modalService: NgbModal, private router: Router) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm', 'fr-FR', '+0200');
  }

  afficherConfirmation(content: any) {
    this.modalService.open(content);
  }

  publier(): void {
    this.dataSrv.creerAnnonceCovoit(this.annonce).subscribe(
      value => {
        this.annonce = new AnnonceCovoiturage();
        this.isSubmitted = true;
        this.closed = false;
        this.router.navigate(['/collaborateur/annonces']);
      },
      err => {
        this.error = err;
        this.hasError = true;
        this.closed = false;
      },
      () => { }
    );
  }

  ngOnInit(): void {
    this.authSrv.collegueConnecteObs.subscribe(
      collegue => this.annonce.conducteur = collegue.matricule
    );
  }
}
