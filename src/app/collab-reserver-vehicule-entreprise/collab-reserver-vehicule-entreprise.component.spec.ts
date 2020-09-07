import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReserverVehiculeEntrepriseComponent } from './collab-reserver-vehicule-entreprise.component';

describe('CollabReserverVehiculeEntrepriseComponent', () => {
  let component: CollabReserverVehiculeEntrepriseComponent;
  let fixture: ComponentFixture<CollabReserverVehiculeEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReserverVehiculeEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReserverVehiculeEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
