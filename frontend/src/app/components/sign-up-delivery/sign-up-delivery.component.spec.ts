import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDeliveryComponent } from './sign-up-delivery.component';

describe('SignUpDeliveryComponent', () => {
  let component: SignUpDeliveryComponent;
  let fixture: ComponentFixture<SignUpDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
