import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Radius } from '@portfolio/shared/models';
@Component({
  selector: 'portfolio-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type = input<'regular' | 'icon'>('regular');
  bgColor = input<'primary' | 'transparent' | 'surface'>('primary');
  fullWidth = input(false);
  borderRadius = input<Radius>('md');
  clicked = output<void>();
}
