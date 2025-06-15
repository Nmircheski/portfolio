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
  opt: EChartsCoreOption = {
    series: [
      {
        data: [50, 70, 30, 40, 50, 60],
        type: 'bar',
      },
    ],
  };
  options = signal<EChartsCoreOption>({
    xAxis: {
      show: false,
      type: 'category',
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data: [50, 70, 30, 40, 50, 60],
        type: 'bar',
        barWidth: 12,
      },
    ],
  });

  onChartInit($event: EChartsType) {}
}
