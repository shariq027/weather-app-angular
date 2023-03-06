import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IForecastData } from '../interfaces/forecast_data';
import { IWeather } from '../interfaces/weather';
import { WeatherService } from '../services/weather.service';

// interface IForecaseByDate{
//     dt: string;
//     forecastList: IWeather[];
// }

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent {

  @Input('forecastDataMap')
  dataMap = new Map<string, IWeather[]>();
  state = -1;

  constructor() { }
  
  setState(index: number){
    this.state = index;
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }

}
