import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectifsComponent } from './add-objectifs.component';

describe('AddObjectifsComponent', () => {
  let component: AddObjectifsComponent;
  let fixture: ComponentFixture<AddObjectifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObjectifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
