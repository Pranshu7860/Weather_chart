import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLwxComponent } from './components/weather-lwx/weather-lwx.component';
import { WeatherTopComponent } from './components/weather-top/weather-top.component';

const routes: Routes = [{
  path:'weather/LWX',
  component:WeatherLwxComponent
} , {
  path:'weather/TOP',
  component:WeatherTopComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
