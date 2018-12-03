import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../helpers/constats';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralResponse } from '../../models/home/home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  static ENDPOINT_GET_USER_MENU = Constants.SERVER + "Get/User/Menu/";
  constructor(private http: HttpClient) {
  
   }

  getMenuInfo(data: any): Observable<GeneralResponse> {
    return this.http.get<GeneralResponse>(HomeService.ENDPOINT_GET_USER_MENU, { params: data }).pipe();
  }
}
