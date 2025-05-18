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
export class ExperienceComponent {}
