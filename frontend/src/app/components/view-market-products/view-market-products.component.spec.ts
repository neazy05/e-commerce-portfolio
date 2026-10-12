import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketProductsComponent } from './view-market-products.component';

describe('ViewMarketProductsComponent', () => {
  let component: ViewMarketProductsComponent;
  let fixture: ComponentFixture<ViewMarketProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMarketProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarketProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
