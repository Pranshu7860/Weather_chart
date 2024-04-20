import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import * as moment from 'moment';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewChecked{
  chart: any = [];
  @Input() chartData : any;

  ngAfterViewChecked(): void {
    this.updateChart()
  }

  updateChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.getChartlabels(),
        datasets: [
          {
            label: 'Temperature',
            data:   this.getChartData(),
            borderWidth: 1,
          },

        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getChartData() {
   return this.chartData.properties.periods.map((res : any) => res.temperature)
  }

  getChartlabels() {
    return this.chartData.properties.periods.map((res : any) =>  moment(res.startTime).format('DD/MM/yyyy hh:mm'))
   }
}
