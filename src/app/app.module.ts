import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginService } from "./modules/login/login.service";
import { Notify } from "./modules/notify/notify";
import { LoginAct } from "./loginact.service";
import { HomeAct } from "./homeact.service";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./routes.module";

import { PopoverModule } from "ngx-bootstrap/popover";
import { ModalModule } from "ngx-bootstrap/modal";
import { BasicAuthInterceptor } from "./helpers/interceptor/basic-auth-interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    LoginService,
    LoginAct,
    HomeAct,
    Notify,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
