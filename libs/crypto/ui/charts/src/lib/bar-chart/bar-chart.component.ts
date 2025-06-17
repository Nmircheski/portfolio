import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EChartsCoreOption, EChartsType } from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'crypto-ui-bar-chart',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
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
        barWidth: 6,
        itemStyle: {
          color: '#24E4A4',
          borderRadius: 5,
        },
      },
    ],
  });

  onChartInit($event: EChartsType) {}
}
