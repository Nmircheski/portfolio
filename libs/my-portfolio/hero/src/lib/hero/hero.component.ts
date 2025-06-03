import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { CardComponent } from '@portfolio/ui/card';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-hero',
  imports: [CommonModule, PageSectionComponent, ButtonComponent, CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
