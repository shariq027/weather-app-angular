import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '../interfaces/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
})
export class CurrentWeatherComponent{

  @Input()
  currentWeather = <IWeather>{};

  constructor() { }
  getDateTime(dt: number): Date{
    return new Date(dt*1000);
  }

}
