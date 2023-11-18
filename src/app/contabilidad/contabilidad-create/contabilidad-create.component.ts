import { Component } from '@angular/core';
import { Accounting } from 'src/app/Entities/Accounting';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';

@Component({
  selector: 'app-contabilidad-create',
  templateUrl: './contabilidad-create.component.html',
  styleUrls: ['./contabilidad-create.component.scss']
})
export class ContabilidadCreateComponent {
  account = new Accounting;
  constructor( private client: BudgetapplicationService) { }
  
  createAccount() {
    this.client.createAccount(this.account).subscribe(res => {

    });
  }
}
