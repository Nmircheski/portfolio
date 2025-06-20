import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  DataCellDirective,
  HeaderCellDirective,
  RowClass,
  RowClassFn,
  TableComponent,
} from '@portfolio/crypto-ui-table';
import { TrendColorDirective } from '@portfolio/crypto-ui-utils';

@Component({
  selector: 'crypto-trading-trades-table',
  imports: [
    CommonModule,
    TableComponent,
    DataCellDirective,
    HeaderCellDirective,
    TrendColorDirective,
  ],
  templateUrl: './trades-table.component.html',
  styleUrl: './trades-table.component.scss',
})
export class TradesTableComponent {
  tradesList = signal<TradeTableItem[]>([
    { price: 61408.47, quantity: 0.02, timestamp: 0.02 },
    { price: 61408.47, quantity: 0.357777, timestamp: 0.357777 },
    { price: 61408.47, quantity: 1.03408, timestamp: 1.03408 },
    { price: 61408.47, quantity: 0.02, timestamp: 0.02 },
    { price: 61408.47, quantity: 0.357777, timestamp: 0.357777 },
    { price: 61408.47, quantity: 1.03408, timestamp: 1.03408 },
    { price: 61408.47, quantity: 0.02, timestamp: 0.02 },
    { price: 61408.47, quantity: 0.357777, timestamp: 0.357777 },
    { price: 61408.47, quantity: 1.03408, timestamp: 1.03408 },
    { price: 61408.47, quantity: 0.02, timestamp: 0.02 },
    { price: 61408.47, quantity: 0.357777, timestamp: 0.357777 },
    { price: 61408.47, quantity: 1.03408, timestamp: 1.03408 },
    { price: 61408.47, quantity: 0.02, timestamp: 0.02 },
    { price: 61408.47, quantity: 0.357777, timestamp: 0.357777 },
    { price: 61408.47, quantity: 1.03408, timestamp: 1.03408 },
  ]);

  rowClassListFn: RowClassFn<TradeTableItem> = (
    _,
    index: number
  ): RowClass[] => {
    return index % 2 === 0 ? ['table__row-alternate-color'] : [];
  };
}
export interface TradeTableItem {
  price: number;
  quantity: number;
  timestamp: number;
}
