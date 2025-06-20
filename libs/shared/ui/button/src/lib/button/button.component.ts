import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
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
  bgColor = input<'primary' | 'success' | 'critical' | 'transparent'>(
    'primary'
  );
  fullWidth = input(false, { transform: booleanAttribute });
  borderRadius = input<Radius>('md');
  skew = input<'left' | 'right'>();
  active = input(true);

  clicked = output<void>();
}
