import { Component, OnInit } from '@angular/core';
import {ApplicationConfig} from '../../applicationConfig'; 
import { PlatformLocation } from '@angular/common'
import { Router } from '@angular/router';
import { User } from '../../interfaces/User';
import PNotify from 'pnotify/dist/es/PNotifyCompat';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  currentYear;

  constructor(public location: PlatformLocation,
              public router: Router,) {
   }



  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    var message = this.user.message;
      let date = new Date();
    this.currentYear = date.getFullYear();
    PNotifyButtons;
      new PNotify({
        title: 'Login Success',
        text: message,
        type: 'success',
        styling: 'bootstrap3',
        delay: '2000'
      });
  
      $('#profilePopOver').popover({
        trigger: 'hover',
        placement: 'bottom', 
        html: true,
        content: function () {
          return $('#contentProfilePopOver').html();
        }
      });
   
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
