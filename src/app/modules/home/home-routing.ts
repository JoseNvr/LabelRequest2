import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LoginAct } from '../../loginblock.service';


const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: '',
                outlet: 'mainPage',
                canActivate: [LoginAct]
            },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }