import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginResponse } from "src/app/models/login/login.model";
import { Constants } from "../../helpers/constats";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private loginResponse: LoginResponse;
  constructor(private http: HttpClient) {
    this.loginResponse = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
  }
}
