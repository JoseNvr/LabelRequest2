import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelarPedidosComponent } from 'src/app/components/cancelarpedidos/cancelarpedidos.component';


const routes: Routes = [
  { path: '', component: CancelarPedidosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelarPedidosRoutingModule { }
