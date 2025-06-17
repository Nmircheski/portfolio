import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconComponent, IconType } from '@portfolio/ui/icon';
@Component({
  selector: 'crypto-coin-select',
  imports: [CommonModule, IconComponent],
  templateUrl: './coin-select.component.html',
  styleUrl: './coin-select.component.scss',
})
export class CoinSelectComponent {
  iconName = input<IconType>();
}
