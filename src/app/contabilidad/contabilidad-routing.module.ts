import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContabilidadCreateComponent } from './contabilidad-create/contabilidad-create.component';
import { ContabilidadListComponent } from './contabilidad-list/contabilidad-list.component';

const routes: Routes = [
  { path: 'contabilidadCreate', component: ContabilidadCreateComponent },
  { path: 'contabilidadList', component: ContabilidadListComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
