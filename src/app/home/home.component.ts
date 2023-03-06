import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IForecastData } from '../interfaces/forecast_data';
import { IWeather } from '../interfaces/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  isLoading = false;
  forecastData = <IForecastData>{};
  dataMap = new Map<string, IWeather[]>();
  currentWeather = <IWeather>{};

  constructor(private _weatherService: WeatherService){
    this._weatherService.isLoading().subscribe(val => this.isLoading=val);
  }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData(){
    this._weatherService.updateLoading(true);
    forkJoin([this._weatherService.getForecastData(), this._weatherService.getCurrentWeather()])
    .subscribe(([forecastRes, currentWeatherRes]) => {
      this._weatherService.updateLoading(false);
      this.forecastData = forecastRes;
      for(let item of this.forecastData.list){
          var date = (new Date(item.dt * 1000)).toLocaleDateString();
          if(this.dataMap.has(date)){
              this.dataMap.set(date, [...<[]>this.dataMap.get(date), item]);
          }
          else{
              this.dataMap.set(date, [item]);
          }
      }
      this.currentWeather = currentWeatherRes;
    }
  );
  }

  getForecastData() {
    this._weatherService.getForecastData()
      .subscribe((data: IForecastData) => {
        this.forecastData = data;
        for(let item of this.forecastData.list){
            var date = (new Date(item.dt * 1000)).toLocaleDateString();
            if(this.dataMap.has(date)){
                this.dataMap.set(date, [...<[]>this.dataMap.get(date), item]);
            }
            else{
                this.dataMap.set(date, [item]);
            }
        }
      });
  }

  getCurrentWeather() {
    this._weatherService.getCurrentWeather()
      .subscribe((data: IWeather) => {
        this.currentWeather = data;
        console.log(this.currentWeather);
      });
  }

}
