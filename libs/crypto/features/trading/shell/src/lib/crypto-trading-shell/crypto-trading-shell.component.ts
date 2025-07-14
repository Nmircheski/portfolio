import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  OrdersTableComponent,
  TradingHeaderComponent,
} from '@portfolio/crypto-feature-trading-ui';
import { CandlestickChartComponent } from '@portfolio/crypto-ui-charts';
import { CurrenciesListComponent } from '@portfolio/crypto-ui-currencies-list';
import { CryptoUiRecentTradesComponent } from '@portfolio/crypto-ui-recent-trades';

import { ExchangeWidgetComponent } from '@portfolio/crypto-ui-exchange-widget';
@Component({
  selector: 'crypto-crypto-trading-shell',
  imports: [
    CommonModule,
    TradingHeaderComponent,
    CurrenciesListComponent,
    ExchangeWidgetComponent,
    OrdersTableComponent,
    CandlestickChartComponent,
    CryptoUiRecentTradesComponent,
  ],
  templateUrl: './crypto-trading-shell.component.html',
  styleUrl: './crypto-trading-shell.component.scss',
})
export class CryptoTradingShellComponent {}
