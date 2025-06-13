import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DonutChartComponent } from '@portfolio/crypto-ui-charts';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'crypto-dashboard-balance-card',
  imports: [CommonModule, ChipComponent, IconComponent, DonutChartComponent],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceCardComponent {}
