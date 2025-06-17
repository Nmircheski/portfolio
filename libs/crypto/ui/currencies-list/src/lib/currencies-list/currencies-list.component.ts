import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  DataCellDirective,
  HeaderCellDirective,
  TableComponent,
} from '@portfolio/crypto-ui-table';
import { IconComponent, IconType } from '@portfolio/ui/icon';
export interface CurrencyTableItem {
  pair: { label: string; icon: IconType };
  currentPrice: number;
  dayToDayPrice: { change: number; amount: number };
  transactionAmount: number;
}

@Component({
  selector: 'crypto-ui-currencies-list',
  imports: [
    CommonModule,
    MatTabsModule,
    IconComponent,
    TableComponent,
    HeaderCellDirective,
    DataCellDirective,
  ],
  templateUrl: './currencies-list.component.html',
  styleUrl: './currencies-list.component.scss',
})
export class CurrenciesListComponent {
  tabsList = input<{ label: string; icon?: IconType }[]>([
    {
      label: 'FAVORITE',
      icon: 'star',
    },
    {
      label: 'BUSD',
    },
    {
      label: 'USDT',
    },
    {
      label: 'BUSD',
    },
    {
      label: 'BUSD',
    },
    {
      label: 'BUSD',
    },
    {
      label: 'BUSD',
    },
  ]);

  coinsList = signal<CurrencyTableItem[]>([
    {
      currentPrice: 100,
      dayToDayPrice: {
        amount: 120,
        change: 20,
      },
      pair: {
        icon: 'bitcoin',
        label: 'Bitcoin / USDT',
      },
      transactionAmount: 1000,
    },
  ]);
}
