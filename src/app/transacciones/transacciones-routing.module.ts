import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesCreateComponent } from './transacciones-create/transacciones-create.component';
import { TransaccionesInicioComponent } from './transacciones-inicio/transacciones-inicio.component';
import { TransaccionesUpdateComponent } from './transacciones-update/transacciones-update.component';
import { CuentaUsuarioComponent } from './cuenta-usuario/cuenta-usuario.component';



const routes: Routes = [
  { path: 'transaccionesCreate', component: TransaccionesCreateComponent },
  { path: 'transaccionesInicio', component: TransaccionesInicioComponent },
  { path: 'transaccionesUpdate', component: TransaccionesUpdateComponent },
  { path: 'cuenta', component: CuentaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesRoutingModule{ }
