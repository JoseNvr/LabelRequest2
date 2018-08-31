import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfigService} from '../../config/config.service';
import { Router } from '@angular/router';

import {User} from '../../interfaces/User';
import { ApplicationConfig } from '../../applicationConfig';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import {Notify} from '../../notify/notify';

import { ModalDirective } from 'ngx-bootstrap/modal';

 
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('LoadingModal') loading: ModalDirective;
  params: { user?: string, password?: string, application?: string } = { application: "Task IT"};
  applicationconfig: ApplicationConfig = {
    name: "TaskIT 2.0",
    application: "Task IT",
    applicationPath: "TaskIT",
    localStorage: "dataAuth_TaskIT",
    logo: "assets/sanmina/application/taskit.png",
    ico: "assets/sanmina/application/taskit.ico",
    logged: false
  }
  loadingMessage = "We are getting your information for Google please wait...";
  user: User;


  constructor(public configService: ConfigService,
              public router: Router,
              private socialAuthService: AuthService,
              private notify: Notify) { }

  ngOnInit() {  
    
  }

  singin(){
   // $('#loadingModal').modal('show');
    this.loading.show();
    this.configService.getInfo("http://localhost:8080/TaskIT/Get/User/Info/", this.params).subscribe((res: User) => this.user = {
      success: res['succes'],
      message: res['message'],
      data: res['data']
    }, error => {
      console.log(error);
    //  $('#loadingModal').modal('hide');
     this.loading.hide();
      this.notify.setNotification('Error', 'Ingrese un usuario', 'error');

    }, () => {
      if (this.user.message.includes("Welcome")){
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate(['']);
       
      }else{
        //$("#loadingModal").modal('hide');
        this.loading.hide();
        this.notify.setNotification('No Autorizado', this.user.message, 'notice')
      }
    });
  }
  singinwhitgoogle(){
    //$("#loadingModal").modal('show');
    this.loading.show();
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.params.user = userData.email;
        // Now sign-in with userData      
        this.configService.getInfo("http://localhost:8080/TaskIT/Get/User/Info/", this.params).subscribe((res: User) => this.user = {
          success: res['succes'],
          message: res['message'],
          data: res['data']
        }, error => {
          console.log(error);
          this.loading.hide();
          this.notify.setNotification('Error', 'sesion no iniciada con google', 'error');
        }, () => {
          console.log(this.user);
          if (this.user.message.includes("Welcome")) {
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.router.navigate(['']);
            //$("#loadingModal").modal('hide');
          } else {
            //$("#loadingModal").modal('hide');
            this.loading.hide();
            this.notify.setNotification('No Autorizado', this.user.message, 'notice')
          }
        });  
      }, error =>{
        console.log(error);
      }
    );

  }
}
