import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderRecordComponent } from './admin-order-record.component';

describe('AdminOrderRecordComponent', () => {
  let component: AdminOrderRecordComponent;
  let fixture: ComponentFixture<AdminOrderRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
