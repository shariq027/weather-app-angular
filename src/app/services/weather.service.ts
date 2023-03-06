import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IWeather } from '../interfaces/weather';
import { IForecastData } from '../interfaces/forecast_data';
import { environment } from "../../environments/environment";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  baseUrl = environment.baseUrl;
  APIkey = environment.APIkey;
  lat='48.6786';
  lon='10.1507';

  getCurrentWeather() {
    return this.http.get<IWeather>(`${this.baseUrl}/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.APIkey}`);
  }

  getForecastData() {
    return this.http.get<IForecastData>(`${this.baseUrl}/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this.APIkey}`);
  }

  public isLoading(){
    return this.loading.asObservable();
  }

  public updateLoading(loading: boolean){
    this.loading.next(loading);
  }

}
