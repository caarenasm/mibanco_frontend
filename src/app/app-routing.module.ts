import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'movimiento',
    loadChildren: () => import('./pages/movimiento/movimiento.module').then( m => m.MovimientoPageModule)
  },
  {
    path: 'tercero',
    loadChildren: () => import('./pages/tercero/tercero.module').then( m => m.TerceroPageModule)
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./pages/micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'movimiento-ctacorriente',
    loadChildren: () => import('./pages/movimiento-ctacorriente/movimiento-ctacorriente.module').then( m => m.MovimientoCtacorrientePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
