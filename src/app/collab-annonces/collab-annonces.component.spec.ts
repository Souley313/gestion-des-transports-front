import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabAnnoncesComponent } from './collab-annonces.component';

describe('CollabAnnoncesComponent', () => {
  let component: CollabAnnoncesComponent;
  let fixture: ComponentFixture<CollabAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
