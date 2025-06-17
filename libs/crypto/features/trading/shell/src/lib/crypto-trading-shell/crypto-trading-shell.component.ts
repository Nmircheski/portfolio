import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TradingHeaderComponent } from '@portfolio/crypto-feature-trading-ui';
import { CurrenciesListComponent } from '@portfolio/crypto-ui-currencies-list';
@Component({
  selector: 'crypto-crypto-trading-shell',
  imports: [CommonModule, TradingHeaderComponent, CurrenciesListComponent],
  templateUrl: './crypto-trading-shell.component.html',
  styleUrl: './crypto-trading-shell.component.scss',
})
export class CryptoTradingShellComponent {}
