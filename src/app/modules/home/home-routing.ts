import { Component, NgModule } from '@angular/core';
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
                path: 'verpedidos',
                loadChildren: 'src/app/modules/verpedidos/verpedidos.module#VerPedidosModule', canActivate: [LoginAct]
            },
            {
                path: 'realizarpedidos',
                loadChildren: 'src/app/modules/realizarpedidos/realizarpedidos.module#RealizarPedidosModule', canActivate: [LoginAct]
            },
            {
                path: 'atenderpedidos',
                loadChildren: 'src/app/modules/atenderpedidos/atenderpedidos.module#AtenderPedidosModule', canActivate: [LoginAct]
            },
            {
                path: 'cancelarpedidos',
                loadChildren: 'src/app/modules/cancelarpedidos/cancelarpedidos.module#CancelarPedidosModule', canActivate: [LoginAct]
            },
            {
                path: 'reimpresion',
                loadChildren: 'src/app/modules/reimpresion/reimpresion.module#ReimpresionModule', canActivate: [LoginAct]
            },
            {
                path: 'usuarios',
                loadChildren: 'src/app/modules/usuarios/usuarios.module#UsuariosModule', canActivate: [LoginAct]
            }
            
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
