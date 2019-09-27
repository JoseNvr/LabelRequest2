import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constants } from "../../helpers/constats";
import { GeneralResponse, LoginResponse } from "../../models/login/login.model";

@Injectable({
  providedIn: "root"
})
export class Prueba1Service {
  static ENDPOINT_GET_TEST = Constants.SERVER + "Get/Test/";
  static ENDPOINT_POST_TEST = Constants.SERVER + "Post/Test/";
  private loginResponse: LoginResponse;

  constructor(private http: HttpClient) {
    this.loginResponse = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
  }

  getTest(data: any): Observable<GeneralResponse> {
    return this.http
      .get<GeneralResponse>(Prueba1Service.ENDPOINT_GET_TEST, {
        params: data
      })
      .pipe();
  }

  postTest(data: any): Observable<GeneralResponse> {
    return this.http
      .post<GeneralResponse>(Prueba1Service.ENDPOINT_POST_TEST, data)
      .pipe();
  }
}
