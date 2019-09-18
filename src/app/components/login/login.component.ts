import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Subscription } from "rxjs";
import { Constants } from "../../helpers/constats";
import { GeneralResponse, User,LoginResponse } from "../../models/login/login.model";
import { LoginService } from "../../modules/login/login.service";
import { Notify } from "../../modules/notify/notify";



declare var $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild("LoadingModal") loading: ModalDirective;
  private generalresponse: GeneralResponse;
  private loginResponse: LoginResponse;
  private subscribeUser: Subscription;
  params: { user?: string; password?: string; application?: string } = {
    application: "TaskIT2.0"
  };
  applicationconfig = {
    name: Constants.application + " " + Constants.Version,
    application: Constants.application,
    applicationPath: Constants.applicationPath,
    logo: Constants.logo,
    ico: Constants.ico,
    localStorage: Constants.localStorage
  };
  loadingMessage = "We are getting your information for Google please wait...";
  user: User;

  constructor(
    public loginService: LoginService,
    public router: Router,
    private socialAuthService: AuthService,
    private notify: Notify
  ) {}

  ngOnInit() {
    // setTimeout(() => this.singinwhitgoogle(), 1000);
  }

  singin() {
    this.loading.show();
    this.subscribeUser = this.loginService.getUserInfo(this.params).subscribe(
      res => {
        this.generalresponse = res;
        this.loginResponse = this.generalresponse.data;
        this.loginResponse.loginType = "LDAP";
        console.log(this.loginResponse);
        this.user = this.loginResponse.userInfo;
      },
      error => {
        console.log(error);
        this.loading.hide();
        this.notify.setNotification("Error", "Ingrese un usuario", "error");
      },
      () => {
        if (this.generalresponse.message.includes("Welcome")) {
          localStorage.setItem(
            this.applicationconfig.localStorage,
            JSON.stringify(this.loginResponse)
          );
          localStorage.setItem("message", this.generalresponse.message);
          this.router.navigate(["/"]);
        } else {
          this.loading.hide();
          this.notify.setNotification(
            "No Autorizado",
            this.generalresponse.message,
            "notice"
          );
        }
      }
    );
  }
  singinwhitgoogle() {
    this.loading.show();
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      userData => {
        const userDate = {
          user: userData.email,
          application: this.params.application
        };
        // Now sign-in with userData
        this.loading.show();
        this.subscribeUser = this.loginService.getUserInfo(userDate).subscribe(
          res => {
             this.generalresponse = res;
             this.loginResponse = this.generalresponse.data;
             this.loginResponse.loginType = "Google";
             console.log(this.loginResponse);
             this.user = this.loginResponse.userInfo;
             console.log(this.user);
          },
          error => {
            console.log(error);
            this.loading.hide();
            this.notify.setNotification(
              "Error",
              "sesion no iniciada con google",
              "error"
            );
          },
          () => {
            if (this.generalresponse.message.includes("Welcome")) {
              localStorage.setItem(
                this.applicationconfig.localStorage,
                JSON.stringify(this.loginResponse)
              );
              localStorage.setItem("message", this.generalresponse.message);
              this.router.navigate(["/"]);
            } else {
              this.loading.hide();
              this.notify.setNotification(
                "No Autorizado",
                this.generalresponse.message,
                "notice"
              );
            }
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscribeUser.unsubscribe();
  }
}
