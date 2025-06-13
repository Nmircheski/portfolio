import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-dashboard-currency-table',
  imports: [CommonModule],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyTableComponent {}
