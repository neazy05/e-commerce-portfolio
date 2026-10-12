import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeductMoneyComponent } from './admin-deduct-money.component';

describe('AdminDeductMoneyComponent', () => {
  let component: AdminDeductMoneyComponent;
  let fixture: ComponentFixture<AdminDeductMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeductMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeductMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
