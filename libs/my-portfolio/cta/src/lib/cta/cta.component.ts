import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { IconComponent } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';

@Component({
  selector: 'portfolio-cta',
  imports: [CommonModule, PageSectionComponent, ButtonComponent, IconComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {}
