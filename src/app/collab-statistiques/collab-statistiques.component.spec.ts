import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabStatistiquesComponent } from './collab-statistiques.component';

describe('CollabStatistiquesComponent', () => {
  let component: CollabStatistiquesComponent;
  let fixture: ComponentFixture<CollabStatistiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabStatistiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
