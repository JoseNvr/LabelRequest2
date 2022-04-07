import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosFinalizadosComponent } from 'src/app/components/pedidosfinalizados/pedidosfinalizados.component';

const routes: Routes = [
  { path: '', component: PedidosFinalizadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosFinalizadosRoutingModule { }
