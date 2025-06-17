import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconComponent, IconType } from '@portfolio/ui/icon';

@Component({
  selector: 'crypto-coin-info',
  imports: [CommonModule, IconComponent],
  templateUrl: './coin-info.component.html',
  styleUrl: './coin-info.component.scss',
})
export class CoinInfoComponent {
  name = input<IconType>();
}
