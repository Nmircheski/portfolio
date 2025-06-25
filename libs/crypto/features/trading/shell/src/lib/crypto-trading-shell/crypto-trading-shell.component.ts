import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  OrdersTableComponent,
  TradesTableComponent,
  TradingHeaderComponent,
} from '@portfolio/crypto-feature-trading-ui';
import { CandlestickChartComponent } from '@portfolio/crypto-ui-charts';
import { CurrenciesListComponent } from '@portfolio/crypto-ui-currencies-list';
import { ExchangeWidgetComponent } from '@portfolio/crypto-ui-exchange-widget';
@Component({
  selector: 'crypto-crypto-trading-shell',
  imports: [
    CommonModule,
    TradingHeaderComponent,
    TradesTableComponent,
    CurrenciesListComponent,
    ExchangeWidgetComponent,
    OrdersTableComponent,
    CandlestickChartComponent,
  ],
  templateUrl: './crypto-trading-shell.component.html',
  styleUrl: './crypto-trading-shell.component.scss',
})
export class CryptoTradingShellComponent {}
