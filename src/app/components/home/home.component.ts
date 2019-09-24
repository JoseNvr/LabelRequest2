import { Component, OnInit, ViewChild } from "@angular/core";
import { PlatformLocation, Location } from "@angular/common";
import { Router } from "@angular/router";
import { User, ApplicationData } from "../../models/home/home.model";
import { Notify } from "../../modules/notify/notify";
import { ModalDirective } from "ngx-bootstrap/modal";
import { HomeService } from "../../modules/home/home.service";
import { Constants } from "../../helpers/constats";
import { Subscription } from "rxjs";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("modalCharg") charging: ModalDirective;
  public applicationconfig = {
    version: Constants.Version,
    application: Constants.application,
    applicationPath: Constants.applicationPath,
    logo: Constants.logo,
    ico: Constants.ico,
    plant: Constants.plant,
    localStorage: Constants.localStorage
  };
  public subscriptions: Subscription[] = [];
  public user: User;
  public applicationData: ApplicationData;
  // public menuList = [];
  public currentYear;
  public currentRoute;

  constructor(
    public location: PlatformLocation,
    public router: Router,
    public loc: Location,
    public homeService: HomeService,
    public notify: Notify
  ) {}

  ngOnInit() {
    const message = localStorage.getItem("message");
    const date = new Date();
    this.applicationData = JSON.parse(
      localStorage.getItem(Constants.localStorage)
    );
    this.user = this.applicationData.userInfo;
    // for (let i = 0; i < this.applicationData.menus.length; i++) {
    //   this.menuList.push(this.applicationData.menus[i]);
    // }
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
          this.currentRoute = "home";
          break;
        }
        case "/Prueba1link": {
          this.currentRoute = "prueba1";
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
