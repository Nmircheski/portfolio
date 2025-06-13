import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EChartsCoreOption, EChartsType } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'crypto-ui-candlestick-chart',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './candlestick-chart.component.html',
  styleUrl: './candlestick-chart.component.scss',
})
export class CandlestickChartComponent {
  volumes = [
    86160000, 79330000, 89440000, 86160000, 79330000, 89440000, 86160000,
    79330000, 89440000, 86160000, 79330000, 89440000, 86160000, 79330000,
    89440000,
  ];
  values: [number, number, number, number, number][] = [
    [696.73, 774.05, 678.9, 793.1, 622],
    [973.69, 968.72, 963.87, 992.42, 684],
    [554.28, 573.92, 543.16, 580.19, 710],
    [911.54, 824.37, 820.73, 929.78, 798],
    [893.35, 540.19, 522.37, 901.67, 681],
    [565.63, 628.47, 550.65, 639.39, 537],
    [590.15, 574.09, 565.83, 604.44, 580],
    [782.94, 686.33, 678.05, 789.97, 913],
    [549.82, 957.57, 541.82, 969.17, 941],
    [605.17, 999.1, 599.59, 1000.0, 701],
    [783.12, 636.81, 623.01, 800.96, 837],
    [508.02, 877.9, 507.12, 893.1, 760],
    [517.13, 611.46, 506.34, 630.06, 657],
    [663.45, 957.22, 651.12, 967.6, 548],
    [604.94, 678.32, 594.43, 684.52, 557],
    [561.79, 669.43, 547.26, 677.5, 699],
    [655.17, 584.16, 583.82, 656.43, 640],
    [617.28, 702.5, 598.83, 716.1, 837],
    [842.9, 849.51, 827.61, 863.53, 855],
    [672.75, 905.55, 666.38, 909.21, 964],
    [893.98, 922.39, 883.68, 928.95, 897],
    [639.64, 856.01, 637.63, 874.21, 973],
    [515.23, 743.39, 507.48, 753.66, 807],
    [909.77, 566.58, 561.6, 926.94, 945],
    [741.19, 849.53, 731.43, 858.48, 623],
    [804.84, 550.39, 533.02, 809.64, 725],
    [995.35, 828.39, 808.47, 1000.0, 830],
    [505.23, 963.21, 500.0, 975.81, 565],
    [871.05, 520.74, 519.2, 880.08, 506],
    [805.06, 955.82, 793.63, 972.41, 502],
  ];

  MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  options = signal<EChartsCoreOption>({
    animation: false,
    grid: [
      { left: 50, right: 50, top: 0, height: '60%' },
      { left: 50, right: 50, bottom: 0, height: '20%' },
    ],
    dataZoom: {
      type: 'inside',
      start: 150,
      end: 500,
    },
    xAxis: [
      {
        type: 'category',
        data: this.MONTHS,
        gridIndex: 0,
      },
      {
        type: 'category',
        data: this.MONTHS,
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true,
        },
        gridIndex: 0,
      },
      {
        gridIndex: 1,
      },
    ],
    series: [
      {
        name: 'Price',
        type: 'candlestick',
        data: this.values,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          color: '#4AFA9A',
          color0: '#E15457',
          borderColor: '#4AFA9A',
          borderColor0: '#E15457',
        },
      },
      {
        name: 'Volume',
        type: 'bar',
        data: this.volumes,
        color: '0#323438',
        xAxisIndex: 1,
        yAxisIndex: 1,
      },
    ],
  });

  onChartInit($event: EChartsType) {
    // throw new Error('Method not implemented.');
  }
}
