import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-dashboard-currency-candlestick',
  imports: [CommonModule],
  templateUrl: './currency-candlestick.component.html',
  styleUrl: './currency-candlestick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCandlestickComponent {}
