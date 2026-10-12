import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsByMarketComponent } from './view-products-by-market.component';

describe('ViewProductsByMarketComponent', () => {
  let component: ViewProductsByMarketComponent;
  let fixture: ComponentFixture<ViewProductsByMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsByMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsByMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
