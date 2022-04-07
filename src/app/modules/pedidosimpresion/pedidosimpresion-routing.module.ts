import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosImpresionComponent } from 'src/app/components/pedidosimpresion/pedidosimpresion.component';

const routes: Routes = [
  { path: '', component: PedidosImpresionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosImpresionRoutingModule { }
