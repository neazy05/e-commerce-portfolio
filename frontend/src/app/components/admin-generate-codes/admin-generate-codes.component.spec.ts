import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateCodesComponent } from './admin-generate-codes.component';

describe('AdminGenerateCodesComponent', () => {
  let component: AdminGenerateCodesComponent;
  let fixture: ComponentFixture<AdminGenerateCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenerateCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
