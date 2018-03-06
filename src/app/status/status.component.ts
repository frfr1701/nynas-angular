import { WeatherService } from './../shared/remote/weather.service';
import { WeatherData, updateTable } from './../shared/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, updateTable {

  weatherData: Array<WeatherData>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.refresh(this);
  }
  updateWeather(data: Array<WeatherData>) {
    this.weatherData = data;
  }
  updateTrain(data: Array<any>) {

  }
}
