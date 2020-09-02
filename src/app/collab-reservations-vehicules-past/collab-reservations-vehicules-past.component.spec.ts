import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationsVehiculesPastComponent } from './collab-reservations-vehicules-past.component';

describe('CollabReservationsVehiculesPastComponent', () => {
  let component: CollabReservationsVehiculesPastComponent;
  let fixture: ComponentFixture<CollabReservationsVehiculesPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationsVehiculesPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationsVehiculesPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
