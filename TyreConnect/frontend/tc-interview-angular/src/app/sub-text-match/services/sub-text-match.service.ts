import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubTextMatchService {

  constructor(private http: HttpClient) { }

  getMatches(text: string, subtext: string) { 
    let params = new HttpParams();
    params = params.append('text', text);
    params = params.append('subtext', subtext);
    return this.http.get('https://localhost:5001/WeatherForecast', { params: params })
  }
}
