import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoNavbarComponent } from '@portfolio/crypto-ui-navbar';
import { CryptoSidenavComponent } from '@portfolio/crypto-ui-sidenav';
import { BarChart, CandlestickChart, PieChart } from 'echarts/charts';
import { DataZoomComponent, GridComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { provideEchartsCore } from 'ngx-echarts';
echarts.use([
  PieChart,
  CandlestickChart,
  BarChart,
  DataZoomComponent,
  GridComponent,
  CanvasRenderer,
]);

@Component({
  imports: [RouterModule, CryptoNavbarComponent, CryptoSidenavComponent],
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class AppComponent {
  title = 'crypto-portfolio';
}
