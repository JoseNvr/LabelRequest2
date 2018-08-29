import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'
import { LoginAct } from './config/config.loginact';
import { HomeAct } from './config/config.homeact';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [LoginAct]},
    { path: 'login', component: LoginComponent, canActivate: [HomeAct] },

    { path: '**', redirectTo: '' }
];