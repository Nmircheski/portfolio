import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BalanceCardComponent,
  CurrencyCandlestickComponent,
  CurrencyListComponent,
  CurrencyTableComponent,
  StatusWidgetComponent,
} from '@portfolio/crypto-feature-dashboard-ui';
@Component({
  selector: 'crypto-dashboard-crypto-dashboard-shell',
  imports: [
    CommonModule,
    BalanceCardComponent,
    CurrencyCandlestickComponent,
    CurrencyListComponent,
    CurrencyTableComponent,
    StatusWidgetComponent,
  ],
  templateUrl: './crypto-dashboard-shell.component.html',
  styleUrl: './crypto-dashboard-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDashboardShellComponent {}
