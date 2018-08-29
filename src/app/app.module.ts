import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http'
import {ConfigService} from './config/config.service';
import { LoginAct } from './config/config.loginact';
import { HomeAct } from './config/config.homeact';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {routes} from './app.routes';
import { LoginComponent } from './pages/login/login.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("750475401698-q97li2b37sm0d94750upvg5sbbkv2vd5.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: "enabled"
    })
  ],
  providers: [ConfigService,
               LoginAct,
               HomeAct,
               {
               provide: AuthServiceConfig,
               useFactory: getAuthServiceConfigs
               }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
