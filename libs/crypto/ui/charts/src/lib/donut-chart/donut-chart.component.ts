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
        radius: ['60%', '90%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 0,
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
          { value: 550, name: 'Doge' },
          { value: 250, name: 'Tether' },
        ],
      },
    ],
  });

  onChartInit($event: EChartsType) {
    // throw new Error('Method not implemented.');
  }
}
