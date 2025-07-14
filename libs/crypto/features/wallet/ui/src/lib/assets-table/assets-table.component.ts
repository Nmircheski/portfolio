import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  DataCellDirective,
  HeaderCellDirective,
  RowClass,
  RowClassFn,
  TableComponent,
} from '@portfolio/crypto-ui-table';
import { Tab, TabsComponent } from '@portfolio/crypto-ui-tabs';
import { TrendColorDirective } from '@portfolio/crypto-ui-utils';
import { IconComponent, IconType } from '@portfolio/ui/icon';

@Component({
  selector: 'crypto-wallet-assets-table',
  imports: [
    CommonModule,
    TableComponent,
    DataCellDirective,
    HeaderCellDirective,
    TrendColorDirective,
    IconComponent,
    TabsComponent,
  ],
  templateUrl: './assets-table.component.html',
  styleUrl: './assets-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetsTableComponent {
  tabsList = signal<Tab[]>([
    {
      label: 'OPEN ORDERS',
    },
    {
      label: 'ORDER HISTORY',
    },
    {
      label: 'TRADE HISTORY',
    },
    {
      label: 'FUNDS',
    },
  ]);

  ordersList = signal<AssetsTableItem[]>([
    {
      date: '10-02 10:36:42',
      pair: 'C98/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'C98/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'NEAR/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'ALICE/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'C98/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'NEAR/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'ALICE/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'C98/BUSD',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'MBOX/USDT',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'MBOX/USDT',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
    {
      date: '10-02 10:36:42',
      pair: 'MBOX/USDT',
      type: 'Limit',
      side: 'Sell',
      price: 7632,
      amount: 40.0,
      filled: '0.00%',
      total: '305.280 BUSD',
      triggerConditions: '-',
      actionIcon: 'delete',
    },
  ]);

  rowClassListFn: RowClassFn<AssetsTableItem> = (
    _,
    index: number
  ): RowClass[] => {
    return index % 2 === 0 ? ['table__row-alternate-color'] : [];
  };
}

export interface AssetsTableItem {
  date: string; // e.g. '10-02 10:36:42'
  pair: string; // e.g. 'C98/BUSD'
  type: 'Limit' | 'Market'; // Based on the table
  side: 'Buy' | 'Sell';
  price: number; // e.g. 7632
  amount: number; // e.g. 40.0
  filled: string; // e.g. '0.00%'
  total: string; // e.g. '305.280 BUSD'
  triggerConditions: string; // e.g. '-'
  actionIcon: IconType;
}
