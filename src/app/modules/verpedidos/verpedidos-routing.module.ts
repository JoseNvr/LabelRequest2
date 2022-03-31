import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerPedidosComponent } from '../../components/verpedidos/verpedidos.component';

const routes: Routes = [
  { path: '', component: VerPedidosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerPedidosRoutingModule { }
