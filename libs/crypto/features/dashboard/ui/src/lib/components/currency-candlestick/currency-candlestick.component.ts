import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CandlestickChartComponent } from '@portfolio/crypto-ui-charts';

@Component({
  selector: 'crypto-dashboard-currency-candlestick',
  imports: [CommonModule, CandlestickChartComponent],
  templateUrl: './currency-candlestick.component.html',
  styleUrl: './currency-candlestick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCandlestickComponent {}
