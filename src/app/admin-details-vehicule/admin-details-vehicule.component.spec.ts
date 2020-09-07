import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsVehiculeComponent } from './admin-details-vehicule.component';

describe('AdminDetailsVehiculeComponent', () => {
  let component: AdminDetailsVehiculeComponent;
  let fixture: ComponentFixture<AdminDetailsVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailsVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailsVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
