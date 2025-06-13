import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrencyListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'crypto-dashboard-currency-list',
  imports: [CommonModule, CurrencyListItemComponent],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent {
  items = [1, 2, 3, 4, 5, 6];
}
