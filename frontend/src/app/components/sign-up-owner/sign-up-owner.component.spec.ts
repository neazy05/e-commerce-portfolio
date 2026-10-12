import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOwnerComponent } from './sign-up-owner.component';

describe('SignUpOwnerComponent', () => {
  let component: SignUpOwnerComponent;
  let fixture: ComponentFixture<SignUpOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
