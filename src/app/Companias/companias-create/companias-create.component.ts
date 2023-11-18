import { Component } from '@angular/core';
import { Companias } from 'src/app/Entities/Companias';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';

@Component({
  selector: 'app-companias-create',
  templateUrl: './companias-create.component.html',
  styleUrls: ['./companias-create.component.scss']
})
export class CompaniasCreateComponent {
  compania = new Companias;
  constructor(private client: BudgetapplicationService) { }

  agregarCompania() {
    this.client.agregarCompania(this.compania).subscribe(res => {

    });
  }

}
