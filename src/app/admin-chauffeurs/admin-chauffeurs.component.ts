import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChauffeurDto } from '../models/ChauffeurDto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollegueDto } from '../models/CollegueDto';

@Component({
  selector: 'app-admin-chauffeurs',
  templateUrl: './admin-chauffeurs.component.html',
  styleUrls: ['./admin-chauffeurs.component.scss']
})
export class AdminChauffeursComponent implements OnInit {

  chauffeur = new ChauffeurDto();
  chauffeurs: ChauffeurDto[];
  chauffeursFiltered: ChauffeurDto[];
  idChauffeur: number;
  matricule = '';
  nom = '';
  prenom = '';

  constructor(private dataSrv: DataService, private modalService: NgbModal) { }

  openModal(modal) {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
      this.dataSrv.getAllChauffeurs().subscribe(chauffeurs => {
        this.chauffeurs = chauffeurs;
        this.chauffeursFiltered = chauffeurs;
      });
  }
}
