import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersWithoutDeliveryComponent } from './admin-orders-without-delivery.component';

describe('AdminOrdersWithoutDeliveryComponent', () => {
  let component: AdminOrdersWithoutDeliveryComponent;
  let fixture: ComponentFixture<AdminOrdersWithoutDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrdersWithoutDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrdersWithoutDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
