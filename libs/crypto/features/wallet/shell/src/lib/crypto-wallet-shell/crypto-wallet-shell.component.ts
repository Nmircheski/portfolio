import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AssetsTableComponent,
  BalanceCardComponent,
} from '@portfolio/crypto-feature-wallet-ui';
import { CryptoUiRecentTradesComponent } from '@portfolio/crypto-ui-recent-trades';
import { CryptoSidenavComponent } from '@portfolio/crypto-ui-sidenav';
@Component({
  selector: 'lib-crypto-wallet-shell',
  imports: [
    CommonModule,
    CryptoSidenavComponent,
    BalanceCardComponent,
    CryptoUiRecentTradesComponent,
    AssetsTableComponent,
  ],
  templateUrl: './crypto-wallet-shell.component.html',
  styleUrl: './crypto-wallet-shell.component.scss',
})
export class CryptoWalletShellComponent {}
