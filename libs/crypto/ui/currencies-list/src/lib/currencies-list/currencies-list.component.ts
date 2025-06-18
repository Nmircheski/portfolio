import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  DataCellDirective,
  HeaderCellDirective,
  TableComponent,
} from '@portfolio/crypto-ui-table';
import { TrendColorDirective, TrendSignPipe } from '@portfolio/crypto-ui-utils';
import { IconComponent, IconType } from '@portfolio/ui/icon';
import { CurrencyTableItem } from './models';

@Component({
  selector: 'crypto-ui-currencies-list',
  imports: [
    CommonModule,
    MatTabsModule,
    IconComponent,
    TableComponent,
    HeaderCellDirective,
    DataCellDirective,
    TrendColorDirective,
    TrendSignPipe,
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
        change: 0.63,
      },
      pair: {
        icon: 'bitcoin',
        label: 'BTC/USDT',
      },
      transactionAmount: 1000,
    },
    {
      currentPrice: 147.0,
      dayToDayPrice: { amount: 151.44, change: 0.03 },
      pair: { icon: 'tether', label: 'ETH/USDT' },
      transactionAmount: 3881,
    },
    {
      currentPrice: 147.73,
      dayToDayPrice: { amount: 164.15, change: 0.11 },
      pair: { icon: 'tether', label: 'ETH/USDT' },
      transactionAmount: 2560,
    },
    {
      currentPrice: 106.12,
      dayToDayPrice: { amount: 108.07, change: 0.02 },
      pair: { icon: 'tether', label: 'ETH/USDT' },
      transactionAmount: 3175,
    },
    {
      currentPrice: 147.5,
      dayToDayPrice: { amount: -140.19, change: -0.05 },
      pair: { icon: 'doge', label: 'XRP/USDT' },
      transactionAmount: 457,
    },
    {
      currentPrice: 140.24,
      dayToDayPrice: { amount: -125.91, change: -0.1 },
      pair: { icon: 'tether', label: 'ETH/USDT' },
      transactionAmount: 1369,
    },
    {
      currentPrice: 120.35,
      dayToDayPrice: { amount: 123.52, change: 0.03 },
      pair: { icon: 'bitcoin', label: 'BTC/USDT' },
      transactionAmount: 3084,
    },
    {
      currentPrice: 100.25,
      dayToDayPrice: { amount: -85.29, change: -0.15 },
      pair: { icon: 'doge', label: 'XRP/USDT' },
      transactionAmount: 2228,
    },
    {
      currentPrice: 61.13,
      dayToDayPrice: { amount: 77.67, change: 0.27 },
      pair: { icon: 'doge', label: 'XRP/USDT' },
      transactionAmount: 1672,
    },
    {
      currentPrice: 105.87,
      dayToDayPrice: { amount: 118.71, change: 0.12 },
      pair: { icon: 'doge', label: 'DOGE/USDT' },
      transactionAmount: 4536,
    },
    {
      currentPrice: 92.75,
      dayToDayPrice: { amount: 105.56, change: 0.14 },
      pair: { icon: 'doge', label: 'XRP/USDT' },
      transactionAmount: 4190,
    },
  ]);
}
