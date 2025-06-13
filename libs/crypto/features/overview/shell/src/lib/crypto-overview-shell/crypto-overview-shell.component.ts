import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BalanceCardComponent,
  CurrencyCandlestickComponent,
  CurrencyListComponent,
  CurrencyTableComponent,
  StatusWidgetComponent,
} from '@portfolio/crypto-feature-overview-ui';
@Component({
  selector: 'crypto-overview-crypto-overview-shell',
  imports: [
    CommonModule,
    BalanceCardComponent,
    CurrencyCandlestickComponent,
    CurrencyListComponent,
    CurrencyTableComponent,
    StatusWidgetComponent,
  ],
  templateUrl: './crypto-overview-shell.component.html',
  styleUrl: './crypto-overview-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoOverviewShellComponent {}
