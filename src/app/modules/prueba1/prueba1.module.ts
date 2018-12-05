import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Prueba1RoutingModule } from './prueba1-routing.module';
import { Prueba1Component } from '../../components/prueba1/prueba1.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Prueba1RoutingModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [Prueba1Component]
})
export class Prueba1Module { }
