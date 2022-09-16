import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecourseofcategoryComponent } from './listecourseofcategory.component';

describe('ListecourseofcategoryComponent', () => {
  let component: ListecourseofcategoryComponent;
  let fixture: ComponentFixture<ListecourseofcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecourseofcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecourseofcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
