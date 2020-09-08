import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurPlanningComponent } from './chauffeur-planning.component';

describe('ChauffeurPlanningComponent', () => {
  let component: ChauffeurPlanningComponent;
  let fixture: ComponentFixture<ChauffeurPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
