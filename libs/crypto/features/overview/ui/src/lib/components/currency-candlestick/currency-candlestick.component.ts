import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-currency-candlestick',
  imports: [CommonModule],
  templateUrl: './currency-candlestick.component.html',
  styleUrl: './currency-candlestick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCandlestickComponent {}
