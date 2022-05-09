import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimientoCtacorrientePageRoutingModule } from './movimiento-ctacorriente-routing.module';

import { MovimientoCtacorrientePage } from './movimiento-ctacorriente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimientoCtacorrientePageRoutingModule
  ],
  declarations: [MovimientoCtacorrientePage]
})
export class MovimientoCtacorrientePageModule {}
