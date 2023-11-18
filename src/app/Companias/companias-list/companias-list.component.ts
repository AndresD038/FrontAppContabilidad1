import { Component, OnInit } from '@angular/core';
import { Companias } from 'src/app/Entities/Companias';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companias-list',
  templateUrl: './companias-list.component.html',
  styleUrls: ['./companias-list.component.scss']
})
  export class CompaniasListComponent implements OnInit {
  dataSource: Companias[];
  displayedColumns: string[] = ['ID', 'Nombre', 'Monto', 'Delete', 'Edit'];
  compania = new Companias;
  

  constructor(private client: BudgetapplicationService, private _snackBar: MatSnackBar, private router: Router) {
   
  }
  update(id:string){
  this.router.navigateByUrl('dashboard/companias/companiasUpdate/'+ id);
  }
   

  ngOnInit(): void {
    this.client.listCompania().subscribe(res => {
      this.dataSource = res;
    });
  }
  deleteCompania(compania:Companias) {
    console.log('ID de la compañía a eliminar:', compania.id);
    this.client.eliminarCompania(compania.id).subscribe({
      next: res => {
        this.openSnackBar("Compañia Eliminada Con Exito", "ok");
      },
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
