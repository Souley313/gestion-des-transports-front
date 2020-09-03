import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationTableComponent } from './collab-reservation-table.component';

describe('CollabReservationTableComponent', () => {
  let component: CollabReservationTableComponent;
  let fixture: ComponentFixture<CollabReservationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
