import {Component, Inject} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/Entities/Login';
import { BudgetapplicationService } from 'src/app/services/budgetapplication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  hide = true;
  username: string;
  password: string;

  constructor(private router: Router, 
    private _snackBar: MatSnackBar,
    private client: BudgetapplicationService) { }
  
  login() {
    var loginEntity = new Login();
    loginEntity.password = this.password;
    loginEntity.username = this.username;
    this.client.login(loginEntity).subscribe({
      next: res => { 
        this.openSnackBar("Logeo correcto!", "ok");
        localStorage.setItem("jwtToken", res.token);
        this.router.navigateByUrl('dashboard/transacciones/transaccionesInicio');
      },
      error: error => { 
        console.log(error);
        this.openSnackBar("Logeo no posible detalles: " + error.error , "ok")}
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
