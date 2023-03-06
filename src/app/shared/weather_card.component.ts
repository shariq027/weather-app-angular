import { Component, Input } from '@angular/core';
import { IWeather } from '../interfaces/weather';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather_card.component.html',
})
export class WeatherCardComponent {

    @Input()
    weatherip = <IWeather>{};
    
    constructor() { }

    getDateTime(dt: number): Date{
        return new Date(dt*1000);
      }

}
