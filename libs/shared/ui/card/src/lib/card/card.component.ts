import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'portfolio-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  // logoSrc = input.required<string>();
  // subtitle = input.required<string>();
  // title = input.required<string>();
  // bulletPoints = input.required<string[]>();

  class = input<string>();
}
