import { Routes, RouterModule } from '@angular/router';
import { LoginAct } from './loginblock.service';
import { HomeAct } from './homeblock.service';
import { NgModule } from '@angular/core';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule', canActivate: [LoginAct] },
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule', canActivate: [HomeAct] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            initialNavigation: "enabled"
        }
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }