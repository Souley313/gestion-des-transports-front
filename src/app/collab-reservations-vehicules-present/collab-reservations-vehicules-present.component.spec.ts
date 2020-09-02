import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationsVehiculesPresentComponent } from './collab-reservations-vehicules-present.component';

describe('CollabReservationsVehiculesPresentComponent', () => {
  let component: CollabReservationsVehiculesPresentComponent;
  let fixture: ComponentFixture<CollabReservationsVehiculesPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationsVehiculesPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationsVehiculesPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
