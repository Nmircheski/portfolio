import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { Radius } from '@portfolio/shared/models';

@Component({
  selector: 'portfolio-chip',
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  borderRadius = input<Radius>('md');
  outline = input(false, { transform: booleanAttribute });
  fullWidth = input(false, { transform: booleanAttribute });
}
