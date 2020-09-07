import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChauffeurDto } from '../models/ChauffeurDto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-chauffeurs',
  templateUrl: './admin-chauffeurs.component.html',
  styleUrls: ['./admin-chauffeurs.component.scss']
})
export class AdminChauffeursComponent implements OnInit {

  chauffeurs: ChauffeurDto[];
  chauffeursFiltered: ChauffeurDto[];
  idChauffeur: number;
  matricule = '';
  nom = '';
  prenom = '';
  registerForm: FormGroup;
  submitted = false;
  chauffeur = new ChauffeurDto(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  tabChauffeur = new Array();
  tabTrierChauffeur = new Array();
  ident: any;
  mat: any;
  ajout: boolean = false;
  message: string;

  constructor(private dataSrv: DataService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  openModal(modal) {
    this.modalService.open(modal);
  }

  creerChauffeur(){
    this.dataSrv.createChauffeur(this.ident).subscribe(col => {
       this.tabChauffeur.push(col);
      this.ajout = true;
    },
      err => this.message = ` Erreur lors de l'ajout du collegue : ${err.error}`);
  }

    createForm() {
    this.registerForm = this.formBuilder.group({
       matricule: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
      this.createForm();
      this.dataSrv.getAllChauffeurs().subscribe(chauffeurs => {
        this.chauffeurs = chauffeurs;
        this.chauffeursFiltered = chauffeurs;
      });
  }
}

