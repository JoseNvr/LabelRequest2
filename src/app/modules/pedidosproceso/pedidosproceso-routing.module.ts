import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosProcesoComponent } from '../../components/pedidosproceso/pedidosproceso.component';

const routes: Routes = [
  { path: '', component: PedidosProcesoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosProcesoRoutingModule { }
