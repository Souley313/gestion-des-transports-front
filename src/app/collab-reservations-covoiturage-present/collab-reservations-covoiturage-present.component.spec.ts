import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationsCovoituragePresentComponent } from './collab-reservations-covoiturage-present.component';

describe('CollabReservationsCovoituragePresentComponent', () => {
  let component: CollabReservationsCovoituragePresentComponent;
  let fixture: ComponentFixture<CollabReservationsCovoituragePresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationsCovoituragePresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationsCovoituragePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
