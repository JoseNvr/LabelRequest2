import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from 'src/app/components/administrador/administrador.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatTabsModule, MatIconModule, MatTableModule, MatPaginatorModule, MatCardModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatProgressBarModule, MatSliderModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { ButtonsModule, TooltipModule, TabsModule, TimepickerModule } from 'ngx-bootstrap';
import * as $ from 'jquery';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    MatListModule,
    AdministradorRoutingModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ButtonsModule,
    TooltipModule.forRoot(),
    MatSelectModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSliderModule,
    TimepickerModule.forRoot()

  ],
  declarations: [AdministradorComponent]
})
export class AdministradorModule { }
