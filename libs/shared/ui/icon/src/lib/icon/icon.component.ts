import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconType } from './models';

@Component({
  selector: 'portfolio-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name = input.required<IconType>();
  glow = input(false);
  iconSize = input<'sm' | 'md' | 'lg'>('sm');
}
