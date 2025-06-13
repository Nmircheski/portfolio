import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EChartsCoreOption, EChartsType } from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'crypto-ui-chart',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  options = signal<EChartsCoreOption>({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  });

  onChartInit($event: EChartsType) {}
}
