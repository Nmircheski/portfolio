import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-hero',
  imports: [CommonModule, PageSectionComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
