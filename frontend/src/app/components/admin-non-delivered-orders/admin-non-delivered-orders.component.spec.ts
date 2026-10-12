import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNonDeliveredOrdersComponent } from './admin-non-delivered-orders.component';

describe('AdminNonDeliveredOrdersComponent', () => {
  let component: AdminNonDeliveredOrdersComponent;
  let fixture: ComponentFixture<AdminNonDeliveredOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNonDeliveredOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNonDeliveredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
