import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionesCreateComponent } from './transacciones-create/transacciones-create.component';
import { TransaccionesRoutingModule } from './transacciones-routing.module';
import { TransaccionesInicioComponent } from './transacciones-inicio/transacciones-inicio.component';
import { TransaccionesUpdateComponent } from './transacciones-update/transacciones-update.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CuentaUsuarioComponent } from './cuenta-usuario/cuenta-usuario.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TransaccionesCreateComponent,
    TransaccionesInicioComponent,
    TransaccionesUpdateComponent,
    CuentaUsuarioComponent
  ],
  imports: [
    CommonModule,
    TransaccionesRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ]
})
export class TransaccionesModule { }
