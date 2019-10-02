import { Component, OnInit, ViewChild } from "@angular/core";
import { PlatformLocation, Location } from "@angular/common";
import { Router } from "@angular/router";
import { User, ApplicationData } from "../../models/home/home.model";
import { Notify } from "../../modules/notify/notify";
import { ModalDirective } from "ngx-bootstrap/modal";
import { HomeService } from "../../modules/home/home.service";
import { Constants } from "../../helpers/constats";
import { Subscription } from "rxjs";
import { LoginService } from "../../modules/login/login.service";
import {
  GeneralResponse,
  LoginResponse
} from "src/app/models/login/login.model";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("modalCharg", { static: true }) charging: ModalDirective;
  public applicationconfig = {
    version: Constants.Version,
    application: Constants.application,
    applicationName: Constants.applicationName,
    applicationPath: Constants.applicationPath,
    logo: Constants.logo,
    ico: Constants.ico,
    plant: Constants.plant,
    localStorage: Constants.localStorage
  };
  public subscriptions: Subscription[] = [];
  private generalresponse: GeneralResponse;
  private loginResponse: LoginResponse;
  public user: User;
  public applicationData: ApplicationData;
  public currentYear;
  public currentRoute;
  public currentPlant;
  public plants;
  public params: {
    user?: string;
    password?: string;
    application?: String;
    plant?: string;
  } = {
    application: Constants.application
  };

  constructor(
    public location: PlatformLocation,
    public router: Router,
    public loc: Location,
    public homeService: HomeService,
    public notify: Notify,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    const message = localStorage.getItem("message");
    const date = new Date();
    this.applicationData = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
    this.user = this.applicationData.userInfo;
    this.plants = this.applicationData.sites;
    if (!localStorage.getItem(Constants.plantLS)) {
      this.currentPlant = this.plants[0].name;
      localStorage.setItem(Constants.plantLS, this.currentPlant);
    } else {
      this.currentPlant = localStorage.getItem(Constants.plantLS);
    }
    this.charging.hide();
    this.notify.setNotification("Login Success", message, "success");
    switch (this.router.url) {
      case "/": {
        this.currentRoute = "home";
        break;
      }
      case "/Prueba1link": {
        this.currentRoute = "prueba1";
        break;
      }
    }
    this.currentYear = date.getFullYear();

    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }

  changeCurrentPlant(plant) {
    this.currentPlant = plant;
    localStorage.setItem(Constants.plantLS, this.currentPlant);
    const userParams = {
      user: this.user.email,
      application: this.params.application,
      plant: this.currentPlant
    };
    const subscribeUser = this.loginService.getUserInfo(userParams).subscribe(
      res => {
        this.generalresponse = res;
        this.loginResponse = this.generalresponse.data;
        this.loginResponse.loginType = this.applicationData.loginType;
        localStorage.setItem(
          this.applicationconfig.localStorage,
          JSON.stringify(this.loginResponse)
        );
      },
      error => {},
      () => {}
    );
    this.subscriptions.push(subscribeUser);
  }

  logout() {
    localStorage.removeItem(Constants.localStorage);
    this.router.navigate(["login"]);
  }
  changeRoute(currentRoute: string): void {
    switch (currentRoute) {
      case "Home": {
        this.currentRoute = "home";
        break;
      }
      case "/Prueba1link": {
        this.currentRoute = "prueba1";
        break;
      }
    }
  }

  back(): void {
    this.loc.back();
    setTimeout(() => {
      switch (this.router.url) {
        case "/": {
          this.currentRoute = "Home";
          break;
        }
        case "/Prueba1link": {
          this.currentRoute = "Prueba1";
          break;
        }
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
