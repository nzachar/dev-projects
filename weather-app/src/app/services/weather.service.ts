import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OPEN_WEATHER_BASE_URL } from '../app.constants';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.openWeatherApiKey);
    return this.http.get<Weather>(`${OPEN_WEATHER_BASE_URL}/data/2.5/weather`, { params: options });

  }
}
