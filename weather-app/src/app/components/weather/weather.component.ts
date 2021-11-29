import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;
  imageUrl = `https://openweathermap.org/img/wn/`;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }

}
