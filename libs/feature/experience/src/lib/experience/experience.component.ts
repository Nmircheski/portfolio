import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@portfolio/ui/card';
import { ChipComponent } from '@portfolio/ui/chip';
@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule, ChipComponent, CardComponent],
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  logoSrc = '/mca-logo.png';
  subtitle = 'Nov 2021 - Present';
  title = 'Sr. Frontend Developer';
  bulletPoints = [
    'Lead the development of a new web application using Angular and Node.js',
    'Implemented a CI/CD pipeline using GitHub Actions and AWS',
    'Mentored junior developers and conducted code reviews',
  ];
}
