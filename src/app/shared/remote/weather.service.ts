import { updateTable, WeatherData } from './../data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const weather_url: string = 'https://api.openweathermap.org/data/2.5/forecast?q=nynashamn&APPID=7e483fda3799b98fc867a6231f62d3ed&lang=se';

@Injectable()
export class WeatherService {


  constructor(private http: HttpClient) { }

  refresh(table: updateTable){
    this.http.get(weather_url).subscribe( data => {
      var weatherResponse = this.parseWeather(data);
      table.updateWeather(weatherResponse);
    });
  }

  parseWeather(data: any): Array<WeatherData>{
    var weatherData = new Array<WeatherData>();
    var weatherList = data.list;
    for(let index = 0; index < 7; index++){
      var time = ((new Date(weatherList[index].dt_txt).getHours() + ":00").length > 4 ? "": "0") + new Date(weatherList[index].dt_txt).getHours() + ":00";
      var wind = weatherList[index].wind.speed.toFixed(1);
      var temp = (Number(weatherList[index].main.temp) - 273.15).toFixed(1);
      var desc = weatherList[index].weather[0].description[0].toUpperCase() + weatherList[index].weather[0].description.substr(1);
      weatherData.push({
        clock: time,
        wind: wind,
        temperature: temp,
        description: desc
      });
    }
    return weatherData;
  }
}
