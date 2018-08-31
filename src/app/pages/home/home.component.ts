import { Component, OnInit, ViewChild } from '@angular/core';
import {ApplicationConfig} from '../../applicationConfig'; 
import { PlatformLocation } from '@angular/common'
import { Router } from '@angular/router';
import { User } from '../../interfaces/User';
import {Notify} from '../../notify/notify';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ConfigService } from '../../config/config.service';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('modalCharg') charging: ModalDirective;
  applicationconfig: ApplicationConfig = {
    name: "TaskIT 2.0",
    application: "Task IT",
    applicationPath: "TaskIT",
    localStorage: "dataAuth_TaskIT",
    logo: "assets/sanmina/application/taskit.png",
    ico: "../../../../sanmina/images/application/taskit.ico",
    logged: false
  }
  user: User;
  plant: any;
  menu: any;
  menuList = []
  currentYear;

  constructor(public location: PlatformLocation,
              public router: Router,
              public configService: ConfigService,
              public notify: Notify) {
   }



  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.configService.getInfo("http://localhost:8080/TaskIT/Get/User/Plant/", { user: this.user.data.username, application: this.applicationconfig.application}).subscribe(res => {
      this.charging.show();
      this.plant = res;    
    }, error => {
      console.log(error);
      }, () => {
        this.configService.getInfo("http://localhost:8080/TaskIT/Get/User/Plant/Menu/", { user: this.user.data.username, application: this.applicationconfig.application, plant: this.plant.data.plants[0].plant }).subscribe(res  => {
          this.menu = res;
          for (var i = 0; i < this.menu.data.menu.length; i++) {
            this.menuList.push(this.menu.data.menu[i]);
          } 
          this.charging.hide();
          this.notify.setNotification('Login Success', message, 'success');      
        }, error => {
          console.log(error);
        });     
      });
      
    var message = this.user.message;
    let date = new Date();
    this.currentYear = date.getFullYear();
    
    
     
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
