import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabPublierAnnonceComponent } from './collab-publier-annonce.component';

describe('CollabPublierAnnonceComponent', () => {
  let component: CollabPublierAnnonceComponent;
  let fixture: ComponentFixture<CollabPublierAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabPublierAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabPublierAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
