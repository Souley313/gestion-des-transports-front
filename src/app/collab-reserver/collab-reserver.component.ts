import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reserver',
  templateUrl: './collab-reserver.component.html',
  styleUrls: ['./collab-reserver.component.scss']
})
export class CollabReserverComponent implements OnInit {
  showReserverVehicule = false;
  showReserverCovoiturage = true;
  showReserverChauffeur = false;
  constructor() { }

  toggleVehicules() {
    this.showReserverVehicule = !this.showReserverVehicule;
  }
  toggleCovoiturages() {
    this.showReserverCovoiturage = !this.showReserverCovoiturage;
  }
  toggleCourses() {
    this.showReserverChauffeur = !this.showReserverChauffeur;
  }

  ngOnInit(): void {
  }

}
