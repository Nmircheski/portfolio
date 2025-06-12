import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { CardComponent } from '@portfolio/ui/card';
import { IconComponent } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';

@Component({
  selector: 'portfolio-about-me',
  imports: [
    CommonModule,
    PageSectionComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
