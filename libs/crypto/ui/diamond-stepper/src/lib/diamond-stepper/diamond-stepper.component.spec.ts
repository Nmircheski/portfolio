import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiamondStepperComponent } from './diamond-stepper.component';

describe('DiamondStepperComponent', () => {
  let component: DiamondStepperComponent;
  let fixture: ComponentFixture<DiamondStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiamondStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
