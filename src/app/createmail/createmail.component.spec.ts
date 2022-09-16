import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemailComponent } from './createmail.component';

describe('CreatemailComponent', () => {
  let component: CreatemailComponent;
  let fixture: ComponentFixture<CreatemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
