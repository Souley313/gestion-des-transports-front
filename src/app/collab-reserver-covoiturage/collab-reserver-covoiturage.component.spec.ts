import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReserverCovoiturageComponent } from './collab-reserver-covoiturage.component';

describe('CollabReserverCovoiturageComponent', () => {
  let component: CollabReserverCovoiturageComponent;
  let fixture: ComponentFixture<CollabReserverCovoiturageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReserverCovoiturageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReserverCovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
