import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-balance-card',
  imports: [CommonModule],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceCardComponent {}
