import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCouponsComponent } from './generated-coupons.component';

describe('GeneratedCouponsComponent', () => {
  let component: GeneratedCouponsComponent;
  let fixture: ComponentFixture<GeneratedCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
