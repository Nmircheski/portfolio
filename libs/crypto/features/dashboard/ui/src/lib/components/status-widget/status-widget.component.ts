import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from '../../../../../../../../shared/ui/chip/src/lib/chip/chip.component';
import { IconComponent } from '../../../../../../../../shared/ui/icon/src/lib/icon/icon.component';
import { ChartComponent } from '../../../../../../../ui/charts/src/lib/chart/chart.component';

@Component({
  selector: 'crypto-dashboard-status-widget',
  imports: [CommonModule, IconComponent, ChipComponent, ChartComponent],
  templateUrl: './status-widget.component.html',
  styleUrl: './status-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusWidgetComponent {}
