import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { EChartsCoreOption, EChartsType } from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'crypto-ui-line-chart',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  options = signal<EChartsCoreOption>({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
      scale: true,
    },
    series: [
      {
        data: [820, 1900, 880, 1500, 950, 1330, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#24E4A4',
        },
      },
    ],
  });

  chartContainer = viewChild(NgxEchartsDirective, { read: ElementRef });

  onChartInit(chart: EChartsType) {
    // chart.resize({
    //   height: 80,
    // });
  }
}
