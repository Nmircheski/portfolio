import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent, IconType } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-skills',
  imports: [CommonModule, PageSectionComponent, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: { icon: IconType; label: string }[] = [
    {
      icon: 'angular',
      label: 'Angular',
    },
    {
      icon: 'typescript',
      label: 'TypeScript',
    },
    {
      icon: 'javascript',
      label: 'JavaScript',
    },
    {
      icon: 'sass',
      label: 'Sass',
    },
    {
      icon: 'nx',
      label: 'Nx',
    },
    {
      icon: 'git',
      label: 'Git',
    },
    {
      icon: 'azure',
      label: 'Azure DevOps',
    },
  ];
}
