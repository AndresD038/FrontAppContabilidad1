import { Component } from '@angular/core';
import { Companias } from 'src/app/Entities/Companias';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';

@Component({
  selector: 'app-companias-update',
  templateUrl: './companias-update.component.html',
  styleUrls: ['./companias-update.component.scss']
})
export class CompaniasUpdateComponent {
  
  compania = new Companias;
  constructor(private client: BudgetapplicationService) { }

  updateCompania(id: string) {
    console.log('ID de la compañía a actualizar:', id);
    this.client.updateCompania(this.compania).subscribe(res => {
    })
  }
}
