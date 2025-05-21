import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  output,
} from '@angular/core';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'portfolio-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type = computed(() => {
    return this.icon() ? 'icon-button' : 'regular-button';
  });

  clicked = output<void>();

  icon = contentChild(IconComponent);
}
