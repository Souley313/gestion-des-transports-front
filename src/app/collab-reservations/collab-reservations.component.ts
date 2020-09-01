import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html',
  styleUrls: ['./collab-reservations.component.css']
})
export class CollabReservationsComponent implements OnInit {
  showVehicules = false;
  showCovoiturages = true;
  showCourses = false;
  constructor() { }

  toggleVehicules() {
    this.showVehicules = !this.showVehicules;
  }
  toggleCovoiturages() {
    this.showCovoiturages = !this.showCovoiturages;
  }
  toggleCourses() {
    this.showCourses = !this.showCourses;
  }

  ngOnInit(): void {
  }

}
