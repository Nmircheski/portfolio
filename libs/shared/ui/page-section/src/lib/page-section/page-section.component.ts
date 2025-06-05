import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Radius, Spacing } from '@portfolio/shared/models';

@Component({
  selector: 'portfolio-page-section',
  imports: [CommonModule],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSectionComponent {
  bg = input<'light' | 'dark'>('light');
  paddingTop = input<Spacing>('xl');
  paddingBottom = input<Spacing>('xl');
  marginTop = input<Spacing>('none');
  marginBottom = input<Spacing>('none');
  bgContent = input<'light' | 'dark'>('light');
  borderRadius = input<Radius>('none');
}
