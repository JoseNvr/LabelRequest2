import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constants } from "../../helpers/constats";
import { GeneralResponse } from "../../models/home/home.model";
import { LoginResponse } from "src/app/models/login/login.model";

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
