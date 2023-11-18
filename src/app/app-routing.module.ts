import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: PagesComponent,
    children: [
      { path: "transacciones",
        loadChildren:()=> import('./transacciones/transacciones.module').then(m=>m.TransaccionesModule)
      },
      { path: "contabilidad",
        loadChildren:()=> import('./contabilidad/contabilidad.module').then(m=>m.ContabilidadModule)
      },
      { path: "companias",
        loadChildren: () => import('./Companias/companias.module').then(m => m.CompaniasModule),
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
