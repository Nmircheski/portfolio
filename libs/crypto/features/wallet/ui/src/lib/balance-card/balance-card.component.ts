import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LineChartComponent } from '@portfolio/crypto-ui-charts';
@Component({
  selector: 'crypto-wallet-balance-card',
  imports: [CommonModule, LineChartComponent],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
})
export class BalanceCardComponent {
  viewDetails() {
    throw new Error('Method not implemented.');
  }
  totalBalance: string | number = '0.00';
}
