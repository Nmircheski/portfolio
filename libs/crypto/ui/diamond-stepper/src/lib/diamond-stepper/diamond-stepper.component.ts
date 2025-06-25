import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';

@Component({
  selector: 'crypto-ui-diamond-stepper',
  imports: [CommonModule, CdkStepperModule, ButtonComponent],
  templateUrl: './diamond-stepper.component.html',
  styleUrl: './diamond-stepper.component.scss',
  providers: [{ provide: CdkStepper, useExisting: DiamondStepperComponent }],
})
export class DiamondStepperComponent extends CdkStepper {
  //TODO create a base stepper and this one can be one impl with the html in it
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
