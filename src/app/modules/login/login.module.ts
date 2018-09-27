import { NgModule } from '@angular/core';

import { LoginComponent } from '../../components/login/login.component';
import { LoginRoutingModule } from './login-routing'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginService } from './login.service';

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
        LoginComponent,
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        FormsModule,
        PopoverModule.forRoot(),
        ModalModule.forRoot(),
        SocialLoginModule,
    ],
    providers: [
        LoginService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],

})
export class LoginModule { }