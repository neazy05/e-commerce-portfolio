import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleCategoryComponent } from './view-single-category.component';

describe('ViewSingleCategoryComponent', () => {
  let component: ViewSingleCategoryComponent;
  let fixture: ComponentFixture<ViewSingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
