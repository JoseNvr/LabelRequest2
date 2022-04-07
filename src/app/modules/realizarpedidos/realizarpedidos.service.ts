import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Constants } from "../../helpers/constats";
import { Observable } from "rxjs";
import { GeneralResponse, LoginResponse } from "../../models/login/login.model";
import { map } from "rxjs/operators";
import { data } from "jquery";

@Injectable({
  providedIn: "root"
})
export class RealizarPedidosService {
  static ENDPOINT_GET_TEST = Constants.SERVER + "Get/Test/";
  static ENDPOINT_POST_TEST = Constants.SERVER + "Post/Test/";
  private ValidateValue = `${Constants.SERVER}validate`;
  private loginResponse: LoginResponse;

  constructor(private http: HttpClient,private httpClient: HttpClient) {
    this.loginResponse = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
  }
  getTest(data: any): Observable<GeneralResponse> {
    return this.http
      .get<GeneralResponse> (RealizarPedidosService.ENDPOINT_GET_TEST, {
        params: data
      })
      .pipe();
  }

  postTest(data: any): Observable<GeneralResponse> {
    return this.http
      .post<GeneralResponse>(RealizarPedidosService.ENDPOINT_POST_TEST, data)
      .pipe();
  }
  ValidatePasswordBarcode(data:any): Observable<GeneralResponse>{
    return this.httpClient.post<GeneralResponse>(`${this.ValidateValue}/password_barcode`,data).pipe();
  }
  ProcessUnitSerialNumber(data:any): Observable<GeneralResponse>{
    return this.httpClient.post<GeneralResponse>(`${this.ValidateValue}/process_unit`,data).pipe();
  }

}