import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageSectionComponent } from '@portfolio/ui/page-section';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
@Component({
  selector: 'portfolio-experience',
  imports: [CommonModule, PageSectionComponent, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList = [
    {
      title: '100 +',
      description: 'projects',
    },
    {
      title: '24',
      description: 'Winning award',
    },
    {
      title: '70 +',
      description: 'happy clients',
    },
    {
      title: '10',
      description: 'years experience',
    },
  ];
}
