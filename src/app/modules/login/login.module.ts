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
                //follow this link https://console.developers.google.com and in the project SanminaUniversal make your OAuth 2.0 client ID
                provider: new GoogleLoginProvider("47775143219-jsvd9rl9va6c6ijadh0pgidkl8534etu.apps.googleusercontent.com") 
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