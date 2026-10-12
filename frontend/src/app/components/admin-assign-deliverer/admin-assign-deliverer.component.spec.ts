import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignDelivererComponent } from './admin-assign-deliverer.component';

describe('AdminAssignDelivererComponent', () => {
  let component: AdminAssignDelivererComponent;
  let fixture: ComponentFixture<AdminAssignDelivererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignDelivererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
