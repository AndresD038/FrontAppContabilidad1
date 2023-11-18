import { Component, OnInit } from '@angular/core';
import { Accounting } from 'src/app/Entities/Accounting';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contabilidad-list',
  templateUrl: './contabilidad-list.component.html',
  styleUrls: ['./contabilidad-list.component.scss']
})
export class ContabilidadListComponent implements OnInit {
  dataSource: Accounting[];
  cuenta = new Accounting;
  displayedColumns: string[] = ['id', 'descripcion', 'naturaleza', 'delete', 'edit' ];

  constructor(private client: BudgetapplicationService, private _snackBar: MatSnackBar) {

  } 

  ngOnInit(): void {
    this.client.listAccount().subscribe(res => {
      this.dataSource = res;
    });
  }

  eliminarCuentaContable(cuenta: Accounting) {
    console.log('ID de la cuenta a eliminar:', cuenta.id);
    this.client.deleteAccount(cuenta.id).subscribe({
      next: res => {
        this.openSnackBar("Cuenta Eliminada Con Exito", "ok");
      },
    })
  }
   
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
