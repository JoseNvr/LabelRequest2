import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtenderPedidosComponent } from 'src/app/components/atenderpedidos/atenderpedidos.component';

const routes: Routes = [
  { path: '', component: AtenderPedidosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtenderPedidosRoutingModule { }