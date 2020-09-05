import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehiculesComponent } from './admin-vehicules.component';

describe('AdminVehiculesComponent', () => {
  let component: AdminVehiculesComponent;
  let fixture: ComponentFixture<AdminVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
