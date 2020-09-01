import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReservationsComponent } from './collab-reservations.component';

describe('CollabReservationsComponent', () => {
  let component: CollabReservationsComponent;
  let fixture: ComponentFixture<CollabReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
