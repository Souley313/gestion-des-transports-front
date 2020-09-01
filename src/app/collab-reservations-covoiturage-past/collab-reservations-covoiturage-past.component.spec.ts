import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationsCovoituragePastComponent } from './collab-reservations-covoiturage-past.component';

describe('CollabReservationsCovoituragePastComponent', () => {
  let component: CollabReservationsCovoituragePastComponent;
  let fixture: ComponentFixture<CollabReservationsCovoituragePastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationsCovoituragePastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationsCovoituragePastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
