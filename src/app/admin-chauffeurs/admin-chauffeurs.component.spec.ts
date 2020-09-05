import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChauffeursComponent } from './admin-chauffeurs.component';

describe('AdminChauffeursComponent', () => {
  let component: AdminChauffeursComponent;
  let fixture: ComponentFixture<AdminChauffeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChauffeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChauffeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
