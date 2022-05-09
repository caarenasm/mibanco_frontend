import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientoCtacorrientePage } from './movimiento-ctacorriente.page';

const routes: Routes = [
  {
    path: '',
    component: MovimientoCtacorrientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimientoCtacorrientePageRoutingModule {}
