import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CandlestickChartComponent } from '@portfolio/crypto-ui-charts';
import { CardComponent } from '../../../../../../../../shared/ui/card/src/lib/card/card.component';
import { IconComponent } from '../../../../../../../../shared/ui/icon/src/lib/icon/icon.component';

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
