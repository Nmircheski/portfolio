import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-currency-list',
  imports: [CommonModule],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent {}
