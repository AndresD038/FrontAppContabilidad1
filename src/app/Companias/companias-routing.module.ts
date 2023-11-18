import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniasCreateComponent } from './companias-create/companias-create.component';
import { CompaniasListComponent } from './companias-list/companias-list.component';
import { CompaniasUpdateComponent } from './companias-update/companias-update.component';

const routes: Routes = [
  { path: 'companiasCreate', component: CompaniasCreateComponent },
  { path: 'companiasList', component: CompaniasListComponent },
  { path: 'companiasUpdate/:id', component: CompaniasUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniasRoutingModule { }
