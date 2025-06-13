import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-dashboard-currency-list',
  imports: [CommonModule],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent {}
