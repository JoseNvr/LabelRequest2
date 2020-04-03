import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constants } from "../../helpers/constats";
import { GeneralResponse, LoginResponse } from "../../models/login/login.model";

@Injectable({
  providedIn: "root"
})
export class FunctionsService {
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
      .get<GeneralResponse>(FunctionsService.ENDPOINT_GET_TEST, {
        params: data
      })
      .pipe();
  }

  postTest(data: any): Observable<GeneralResponse> {
    return this.http
      .post<GeneralResponse>(FunctionsService.ENDPOINT_POST_TEST, data)
      .pipe();
  }
}
