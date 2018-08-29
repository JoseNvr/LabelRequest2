import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
  
   }
  getUserInfo(urlAPI, data) {

    return this.http.get(urlAPI, { params: data });
  }
}