import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherForecastData(url : string) : Observable<any> {
   return this.httpClient.get(url).pipe(map((res : any) => {
      return res;
    }))
  }
}
