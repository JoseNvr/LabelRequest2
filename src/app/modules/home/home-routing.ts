import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LoginAct } from '../../loginact.service';


const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: '',
                loadChildren: 'src/app/modules/principal/principal.module#PrincipalModule', canActivate: [LoginAct]
            },
            {
                path: 'Prueba1link',
                loadChildren: 'src/app/modules/prueba1/prueba1.module#Prueba1Module', canActivate: [LoginAct]
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
