import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoinSelectComponent } from '@portfolio/crypto-ui-coin-select';

@Component({
  selector: 'crypto-trading-header',
  imports: [CommonModule, CoinSelectComponent],
  templateUrl: './trading-header.component.html',
  styleUrl: './trading-header.component.scss',
}) //TODO this component should be renamed to coin-info-bar
export class TradingHeaderComponent {}
