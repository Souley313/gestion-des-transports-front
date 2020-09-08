import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationVehiculeTableComponent } from './collab-reservation-vehicule-table.component';

describe('CollabReservationVehiculeTableComponent', () => {
  let component: CollabReservationVehiculeTableComponent;
  let fixture: ComponentFixture<CollabReservationVehiculeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationVehiculeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationVehiculeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
