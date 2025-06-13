import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EChartsCoreOption, EChartsType } from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'crypto-ui-donut-chart',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent {
  options = signal<EChartsCoreOption>({
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'BTC' },
          { value: 735, name: 'Doge' },
          { value: 580, name: 'Tether' },
          { value: 484, name: 'ETH' },
        ],
      },
    ],
  });

  onChartInit($event: EChartsType) {
    // throw new Error('Method not implemented.');
  }
}
