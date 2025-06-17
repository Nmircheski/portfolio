import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LineChartComponent } from '@portfolio/crypto-ui-charts';
import { CoinInfoComponent } from '@portfolio/crypto-ui-coin-info';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent } from '@portfolio/ui/icon';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  currentPrice: string;
  performance: any;
  lastPrice: string;
  option: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Bitcoin',
    position: 1,
    currentPrice: '$21.144,05',
    performance: { change: '+2.5%', trend: 'up' },
    lastPrice: '$21.144,05',
    option: 'Hold',
  },
  {
    name: 'Ethereum',
    position: 2,
    currentPrice: '$21.144,05',
    performance: { change: '-1.2%', trend: 'down' },
    lastPrice: '$21.144,05',
    option: 'Sell',
  },
  {
    name: 'Solana',
    position: 3,
    currentPrice: '$21.144,05',
    performance: { change: '+3.8%', trend: 'up' },
    lastPrice: '$21.144,05',
    option: 'Buy',
  },
  {
    name: 'Cardano',
    position: 4,
    currentPrice: '$21.144,05',
    performance: { change: '+0.9%', trend: 'up' },
    lastPrice: '$21.144,05',
    option: 'Hold',
  },
  {
    name: 'Polkadot',
    position: 5,
    currentPrice: '$21.144,05',
    performance: { change: '-0.4%', trend: 'down' },
    lastPrice: '$21.144,05',
    option: 'Sell',
  },
  {
    name: 'Avalanche',
    position: 6,
    currentPrice: '$21.144,05',
    performance: { change: '+1.1%', trend: 'up' },
    lastPrice: '$21.144,05',
    option: 'Buy',
  },
  {
    name: 'Chainlink',
    position: 7,
    currentPrice: '$21.144,05',
    performance: { change: '+0.2%', trend: 'neutral' },
    lastPrice: '$21.144,05',
    option: 'Hold',
  },
];
@Component({
  selector: 'crypto-ui-table',
  imports: [
    CommonModule,
    CdkTableModule,
    CoinInfoComponent,
    ChipComponent,
    IconComponent,
    LineChartComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = [
    'checkbox',
    'position',
    'name',
    'currentPrice',
    'daily',
    'performance',
    'lastPrice',
    'option',
  ];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
