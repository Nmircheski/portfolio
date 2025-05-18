import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent, IconType } from '@portfolio/ui/icon';
@Component({
  selector: 'portfolio-skills',
  imports: [CommonModule, ChipComponent, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillsList: { icon: IconType; label: string }[] = [
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
    // {
    //   icon: 'html',
    //   label: 'HTML',
    // },
    // {
    //   icon: 'css',
    //   label: 'CSS',
    // },
    {
      icon: 'sass',
      label: 'Sass',
    },
    {
      icon: 'tailwind',
      label: 'Tailwind CSS',
    },
    {
      icon: 'cypress',
      label: 'Cypress',
    },
    {
      icon: 'storybook',
      label: 'Storybook',
    },
    // {
    //   icon: 'jest',
    //   label: 'Jest',
    // },
    {
      icon: 'git',
      label: 'Git',
    },
    // {
    //   icon: 'azure',
    //   label: 'Azure DevOps',
    // },
  ];
}
