import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-currency-table',
  imports: [CommonModule],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyTableComponent {}
