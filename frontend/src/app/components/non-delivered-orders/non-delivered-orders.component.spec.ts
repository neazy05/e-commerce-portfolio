import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDeliveredOrdersComponent } from './non-delivered-orders.component';

describe('NonDeliveredOrdersComponent', () => {
  let component: NonDeliveredOrdersComponent;
  let fixture: ComponentFixture<NonDeliveredOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDeliveredOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDeliveredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
