import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DonutChartComponent } from '@portfolio/crypto-ui-charts';
import { CardComponent } from '@portfolio/ui/card';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'crypto-dashboard-balance-card',
  imports: [
    CommonModule,
    ChipComponent,
    IconComponent,
    DonutChartComponent,
    CardComponent,
  ],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceCardComponent {}
