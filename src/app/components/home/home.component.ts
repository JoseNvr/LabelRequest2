import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common'
import { Router } from '@angular/router';
import { User, GeneralResponse } from '../../models/home/home.model';
import {Notify} from '../../modules/notify/notify';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HomeService } from '../../modules/home/home.service';
import { Constants } from '../../helpers/constats';
import { Subscription } from 'rxjs';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('modalCharg') charging: ModalDirective;
  public applicationconfig = { version: Constants.Version, application: Constants.application, applicationPath: Constants.applicationPath, logo: Constants.logo, ico: Constants.ico, plant: Constants.plant }
  public subscriptions: Subscription[] = [];
  public user: User;
  public menu: GeneralResponse;
  public menuList = []
  public currentYear;
  public currentRoute;

  constructor(public location: PlatformLocation,
              public router: Router,
              public loc: Location,
              public homeService: HomeService,
              public notify: Notify) {
   }



  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
        const subsciptionMenu = this.homeService.getMenuInfo({ user: this.user.username, application: this.applicationconfig.application, plant: Constants.plant }).subscribe(res => {
          this.menu = res;
          for (var i = 0; i < this.menu.data.menu.length; i++) {
            this.menuList.push(this.menu.data.menu[i]);
          } 
          this.charging.hide();
          this.notify.setNotification('Login Success', message, 'success');
          console.log(this.router.url);
          
          switch (this.router.url) {
            case '/': {
              this.currentRoute = 'home';
              break;
            }
            case '/Prueba1link': {
              this.currentRoute = 'prueba1';
              break;
            }
          }
      
        }, error => {
          console.log(error);
        });  

        this.subscriptions.push(subsciptionMenu);   
      
    var message = localStorage.getItem("message");
    let date = new Date();
    this.currentYear = date.getFullYear();
    
    
     
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
  changeRoute(currentRoute: string): void {
    switch (currentRoute) {
      case 'Home': {
        this.currentRoute = 'home';
        break;
      }
      case '/Prueba1link': {
        this.currentRoute = 'prueba1';
        break;
      }
    }
  }

  back(): void {
    this.loc.back();
    setTimeout(() => {
      switch (this.router.url) {
        case '/': {
          this.currentRoute = 'home';
          break;
        }
        case '/Prueba1link': {
          this.currentRoute = 'prueba1';
          break;
        }
      }

    }, 100);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
