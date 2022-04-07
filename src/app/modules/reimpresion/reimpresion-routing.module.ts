import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReimpresionComponent } from 'src/app/components/reimpresion/reimpresion.component';

const routes: Routes = [
  { path: '', component: ReimpresionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimpresionRoutingModule { }