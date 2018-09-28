import { Component, OnInit, ViewChild } from '@angular/core';
import {LoginService} from '../../modules/login/login.service';
import { Router } from '@angular/router';

import {User, GeneralResponse} from '../../models/login/login.model';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import {Notify} from '../../modules/notify/notify';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { Constants } from '../../helpers/constats';
import { Subscription } from 'rxjs';

 
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('LoadingModal') loading: ModalDirective;
  private generalresponse: GeneralResponse;
  private subscribeUser: Subscription;
  params: { user?: string, password?: string, application?: string } = { application: "Task IT"};
  applicationconfig = {name: Constants.Name, application: Constants.application, applicationPath: Constants.applicationPath, logo: Constants.logo, ico: Constants.ico}
  loadingMessage = "We are getting your information for Google please wait...";
  user: User;


  constructor(public LoginService: LoginService,
              public router: Router,
              private socialAuthService: AuthService,
              private notify: Notify) { }

  ngOnInit() {  
    
  }

  singin(){
   // $('#loadingModal').modal('show');
    this.loading.show();
    this.subscribeUser =this.LoginService.getUserInfo(this.params).subscribe(res => {
      this.generalresponse = res;      
      this.user = this.generalresponse.data;
    }, error => {

      console.log(error);
    //  $('#loadingModal').modal('hide');
     this.loading.hide();
      this.notify.setNotification('Error', 'Ingrese un usuario', 'error');

    }, () => {
      if (this.generalresponse.message.includes("Welcome")){
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        localStorage.setItem('message', this.generalresponse.message);
        this.router.navigate(['']);
       
      }else{
        //$("#loadingModal").modal('hide');
        this.loading.hide();
        this.notify.setNotification('No Autorizado', this.generalresponse.message, 'notice')
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
        this.loading.show();
        this.subscribeUser = this.LoginService.getUserInfo(this.params).subscribe(res => {
          this.generalresponse = res;
          this.user = this.generalresponse.data;
        }, error => {
          console.log(error);
          this.loading.hide();
          this.notify.setNotification('Error', 'sesion no iniciada con google', 'error');
        }, () => {
          if (this.generalresponse.message.includes("Welcome")) {
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            localStorage.setItem('message', this.generalresponse.message);
            this.router.navigate(['']);
            //$("#loadingModal").modal('hide');
          } else {
            //$("#loadingModal").modal('hide');
            this.loading.hide();
            this.notify.setNotification('No Autorizado', this.generalresponse.message, 'notice')
          }
        });  
      }, error =>{
        console.log(error);
      }
    );

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribeUser.unsubscribe();
  }
}
