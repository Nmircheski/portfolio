import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '@portfolio/crypto-ui-table';
import { CardComponent } from '@portfolio/ui/card';
@Component({
  selector: 'crypto-dashboard-currency-table',
  imports: [CommonModule, TableComponent, CardComponent],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyTableComponent {}
