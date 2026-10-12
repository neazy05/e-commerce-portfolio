import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersByMarketComponent } from './view-orders-by-market.component';

describe('ViewOrdersByMarketComponent', () => {
  let component: ViewOrdersByMarketComponent;
  let fixture: ComponentFixture<ViewOrdersByMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersByMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersByMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
