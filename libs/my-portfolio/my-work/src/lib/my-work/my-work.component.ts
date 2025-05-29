import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageSectionComponent } from '@portfolio/ui/page-section';

import { CardComponent } from '@portfolio/ui/card';
@Component({
  selector: 'portfolio-my-work',
  imports: [CommonModule, PageSectionComponent, CardComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {}
