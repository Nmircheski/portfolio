import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TradesTableComponent,
  TradingHeaderComponent,
} from '@portfolio/crypto-feature-trading-ui';
import { CurrenciesListComponent } from '@portfolio/crypto-ui-currencies-list';
import { ExchangeWidgetComponent } from '@portfolio/crypto-ui-exchange-widget';
import { OrdersTableComponent } from '../../../../ui/src/lib/orders-table/orders-table.component';
@Component({
  selector: 'crypto-crypto-trading-shell',
  imports: [
    CommonModule,
    TradingHeaderComponent,
    TradesTableComponent,
    CurrenciesListComponent,
    ExchangeWidgetComponent,
    OrdersTableComponent,
  ],
  templateUrl: './crypto-trading-shell.component.html',
  styleUrl: './crypto-trading-shell.component.scss',
})
export class CryptoTradingShellComponent {}
