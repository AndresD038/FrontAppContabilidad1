import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompaniasCreateComponent } from './companias-create/companias-create.component';
import { CompaniasListComponent } from './companias-list/companias-list.component';
import { CompaniasUpdateComponent } from './companias-update/companias-update.component';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CompaniasRoutingModule } from './companias-routing.module';
import { MatTableModule } from '@angular/material/table';  



@NgModule({
  declarations: [
    CompaniasCreateComponent,
    CompaniasListComponent,
    CompaniasUpdateComponent,
  ],
  imports: [
    CommonModule,
    CompaniasRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule,
    MatTableModule
  ]
})
export class CompaniasModule { }
