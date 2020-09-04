import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabReserverComponent } from './collab-reserver.component';

describe('CollabReserverComponent', () => {
  let component: CollabReserverComponent;
  let fixture: ComponentFixture<CollabReserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabReserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
