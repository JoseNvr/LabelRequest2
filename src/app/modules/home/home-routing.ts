import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
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
                path: 'pedidosespera',
                loadChildren: 'src/app/modules/pedidosespera/pedidosespera.module#PedidosEsperaModule', canActivate: [LoginAct]
            },
            {
                path: 'pedidosproceso',
                loadChildren: 'src/app/modules/pedidosproceso/pedidosproceso.module#PedidosProcesoModule', canActivate: [LoginAct]
            },
            {
                path: 'pedidosimpresion',
                loadChildren: 'src/app/modules/pedidosimpresion/pedidosimpresion.module#PedidosImpresionModule', canActivate: [LoginAct]
            },
            {
                path: 'pedidosfinalizados',
                loadChildren: 'src/app/modules/pedidosfinalizados/pedidosfinalizados.module#PedidosFinalizadosModule', canActivate: [LoginAct]
            },
            {
                path: 'contacto',
                loadChildren: 'src/app/modules/contacto/contacto.module#ContactoModule', canActivate: [LoginAct]
            },
            {
                path: 'administrador',
                loadChildren: 'src/app/modules/administrador/administrador.module#AdministradorModule', canActivate: [LoginAct]
            },
            {
                path: 'realizarpedidos',
                loadChildren: 'src/app/modules/realizarpedidos/realizarpedidos.module#RealizarPedidosModule', canActivate: [LoginAct]
            },
            {
                path: 'verpedidos',
                loadChildren: 'src/app/modules/verpedidos/verpedidos.module#VerPedidosModule', canActivate: [LoginAct]
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
