import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCourtComponent } from './ajouter-court.component';

describe('AjouterCourtComponent', () => {
  let component: AjouterCourtComponent;
  let fixture: ComponentFixture<AjouterCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
