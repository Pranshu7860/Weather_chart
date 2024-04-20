import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-weather-top',
  templateUrl: './weather-top.component.html',
  styleUrls: ['./weather-top.component.scss']
})
export class WeatherTopComponent {
  chartData : any;
  constructor(private weatherService : WeatherService) {
  }

  ngOnInit() {
  this.getChartData();
  }

  getChartData() {
    this.weatherService.getWeatherForecastData(environment.weatherTopUrl).subscribe((res : any) => {
      if(res) {
        this.chartData = res;
      }
      
    } , (err : any) => {

    })
  }
}
