import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CurrentWeatherComponent } from './current/current.component';
import { WeatherForecastComponent } from './forecast/forecast.component';
import { WeatherCardComponent } from './shared/weather_card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
