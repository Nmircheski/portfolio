import { CdkStep } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'crypto-ui-step',
  imports: [CommonModule],
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  providers: [{ provide: CdkStep, useExisting: StepComponent }],
})
export class StepComponent extends CdkStep {}
