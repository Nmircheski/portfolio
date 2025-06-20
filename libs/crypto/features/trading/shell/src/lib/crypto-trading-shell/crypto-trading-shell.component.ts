import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  OrdersTableComponent,
  TradingHeaderComponent,
} from '@portfolio/crypto-feature-trading-ui';
import { CurrenciesListComponent } from '@portfolio/crypto-ui-currencies-list';
import { ExchangeWidgetComponent } from '@portfolio/crypto-ui-exchange-widget';
@Component({
  selector: 'crypto-crypto-trading-shell',
  imports: [
    CommonModule,
    TradingHeaderComponent,
    OrdersTableComponent,
    CurrenciesListComponent,
    ExchangeWidgetComponent,
  ],
  templateUrl: './crypto-trading-shell.component.html',
  styleUrl: './crypto-trading-shell.component.scss',
})
export class CryptoTradingShellComponent {}
