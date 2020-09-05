import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../auth/auth.domains';
import { ChauffeurDto } from '../models/ChauffeurDto';

@Component({
  selector: 'app-admin-chauffeurs',
  templateUrl: './admin-chauffeurs.component.html',
  styleUrls: ['./admin-chauffeurs.component.scss']
})
export class AdminChauffeursComponent implements OnInit {

  collegue: ChauffeurDto;
  collegues: ChauffeurDto[];

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
     this.dataSrv.getAllChauffeurs()
      .subscribe(chauffeurs => {
        this.collegues = chauffeurs;
      });
  }

}
