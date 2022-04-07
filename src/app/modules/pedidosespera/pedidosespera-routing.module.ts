import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosEsperaComponent } from '../../components/pedidosespera/pedidosespera.component';

const routes: Routes = [
  { path: '', component: PedidosEsperaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosEsperaRoutingModule { }
