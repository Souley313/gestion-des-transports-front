import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehiculesEntrepriseComponent } from './admin-vehicules-entreprise.component';

describe('AdminVehiculesEntrepriseComponent', () => {
  let component: AdminVehiculesEntrepriseComponent;
  let fixture: ComponentFixture<AdminVehiculesEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVehiculesEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVehiculesEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
