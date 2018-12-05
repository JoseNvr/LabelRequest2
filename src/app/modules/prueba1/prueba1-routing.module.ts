import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prueba1Component } from 'src/app/components/prueba1/prueba1.component';

const routes: Routes = [
  { path: '', component: Prueba1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prueba1RoutingModule { }
