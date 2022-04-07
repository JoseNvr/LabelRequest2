import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAct } from '../../loginact.service';
import { RealizarPedidosComponent } from '../../components/realizarpedidos/realizarpedidos.component';

const routes: Routes = [
  { path: '', component: RealizarPedidosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizarPedidosRoutingModule { }