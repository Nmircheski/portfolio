import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CandlestickChartComponent } from '@portfolio/crypto-ui-charts';
import { CardComponent } from '@portfolio/ui/card';
import { IconComponent } from '@portfolio/ui/icon';

@Component({
  selector: 'crypto-dashboard-currency-candlestick',
  imports: [
    CommonModule,
    CandlestickChartComponent,
    CardComponent,
    IconComponent,
  ],
  templateUrl: './currency-candlestick.component.html',
  styleUrl: './currency-candlestick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCandlestickComponent {}
