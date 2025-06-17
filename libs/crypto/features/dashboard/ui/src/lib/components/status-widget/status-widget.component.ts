import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '@portfolio/crypto-ui-charts';
import { CardComponent } from '@portfolio/ui/card';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent } from '@portfolio/ui/icon';

@Component({
  selector: 'crypto-dashboard-status-widget',
  imports: [
    CommonModule,
    IconComponent,
    ChipComponent,
    BarChartComponent,
    CardComponent,
  ],
  templateUrl: './status-widget.component.html',
  styleUrl: './status-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusWidgetComponent {}
