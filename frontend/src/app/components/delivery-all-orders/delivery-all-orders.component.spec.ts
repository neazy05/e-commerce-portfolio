import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAllOrdersComponent } from './delivery-all-orders.component';

describe('DeliveryAllOrdersComponent', () => {
  let component: DeliveryAllOrdersComponent;
  let fixture: ComponentFixture<DeliveryAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAllOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
