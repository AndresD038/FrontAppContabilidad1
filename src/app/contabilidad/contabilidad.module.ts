import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadCreateComponent } from './contabilidad-create/contabilidad-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { ContabilidadListComponent } from './contabilidad-list/contabilidad-list.component';
import { ContabilidadUpdateComponent } from './contabilidad-update/contabilidad-update.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ContabilidadCreateComponent,
    ContabilidadListComponent,
    ContabilidadUpdateComponent
  ],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule,
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
    MatSlideToggleModule
  ]
})


export class ContabilidadModule { }
