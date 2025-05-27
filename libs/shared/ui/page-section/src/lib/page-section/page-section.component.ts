import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'portfolio-page-section',
  imports: [CommonModule],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSectionComponent {
  bg = input<'light' | 'dark'>('light');
}
