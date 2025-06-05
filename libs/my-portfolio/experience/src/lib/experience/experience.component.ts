import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { CardComponent } from '@portfolio/ui/card';
import { IconComponent } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
@Component({
  selector: 'portfolio-experience',
  imports: [
    CommonModule,
    ExperienceItemComponent,
    PageSectionComponent,
    CardComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList = [
    {
      title: '5+',
      description: 'Experience',
    },
    {
      title: '10+',
      description: 'Apps Supported',
    },
    {
      title: '100+',
      description: 'UI Libraries',
    },
  ];
}
