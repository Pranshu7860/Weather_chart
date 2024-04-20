import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
import * as moment from 'moment';
import { WeatherService } from '../../services/weather.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-weather-lwx',
  templateUrl: './weather-lwx.component.html',
  styleUrls: ['./weather-lwx.component.scss']
})
export class WeatherLwxComponent {
  title = 'ng-chart';
  chart: any = [];
  chartData : any;
  constructor(private weatherService : WeatherService) {
  }
  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.weatherService.getWeatherForecastData(environment.weatherLwxUrl).subscribe((res : any) => {
      if(res) {
        this.chartData = res;
      }
      
    } , (err : any) => {})
  }



}
