import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from "src/app/models/login/login.model";
import { Constants } from "../constats";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private loginResponse: LoginResponse;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loginResponse = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
    if (this.loginResponse && this.loginResponse.token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.loginResponse.token,
          "Content-Type": "application/json; charset=utf-8"
        }
      });
      console.log(request);
    }

    return next.handle(request);
  }
}
