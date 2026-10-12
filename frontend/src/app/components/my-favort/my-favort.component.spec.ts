import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavortComponent } from './my-favort.component';

describe('MyFavortComponent', () => {
  let component: MyFavortComponent;
  let fixture: ComponentFixture<MyFavortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
