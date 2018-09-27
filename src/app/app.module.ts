import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http'
import {LoginService} from './modules/login/login.service';
import {Notify} from './modules/notify/notify';
import { LoginAct } from './loginblock.service';
import { HomeAct } from './homeblock.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routes.module';

import {PopoverModule} from 'ngx-bootstrap/popover';
import {ModalModule} from 'ngx-bootstrap/modal';
 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [LoginService,
               LoginAct,
               HomeAct,
               Notify
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
