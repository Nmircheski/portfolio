import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageSectionComponent } from '@portfolio/ui/page-section';

import { ButtonComponent } from '@portfolio/ui/button';
import { CardComponent } from '@portfolio/ui/card';
import { ChipComponent } from '@portfolio/ui/chip';
@Component({
  selector: 'portfolio-my-work',
  imports: [
    CommonModule,
    PageSectionComponent,
    CardComponent,
    ButtonComponent,
    ChipComponent,
  ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {}
