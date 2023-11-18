import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from "src/app/Entities/Login";
import { LoginResponse } from '../Entities/LoginResponse';
import { Accounting } from '../Entities/Accounting';
import { Companias } from '../Entities/Companias';

 
@Injectable({
  providedIn: 'root'
})
export class BudgetapplicationService {

  url = environment.url;

  constructor(private http:  HttpClient) { }

  login(login?: Login): Observable<LoginResponse> {
    var requestUrl = this.url + "/api/service/auth/login";
    return this.http.post<LoginResponse>(requestUrl, login);
  }

  createAccount(account?: Accounting): Observable<Accounting> {
    var requestUrl = this.url + "/api/v1/contabilidad";
    return this.http.post<Accounting>(requestUrl, account);
  }

  listAccount(): Observable<Accounting[]> {
    var requestUrl = this.url + "/api/v1/contabilidad";
    return this.http.get<Accounting[]>(requestUrl);
  }

  deleteAccount(id: string): Observable<Accounting> {
    const requestUrl = this.url + "/api/v1/contabilidad";
    return this.http.delete<Accounting>(requestUrl + "/" + id);
  } 

  agregarCompania(compania?: Companias): Observable<Companias> {
    var requestUrl = this.url + "/api/v1/companias";
    return this.http.post<Companias>(requestUrl, compania);
  }

  listCompania(): Observable<Companias[]> {
    var requestUrl = this.url + "/api/v1/companias";
    return this.http.get<Companias[]>(requestUrl);
  }
  
  eliminarCompania(id:string): Observable<Companias> {
    const requestUrl = this.url+ "/api/v1/companias";
    return this.http.delete<Companias>(requestUrl +"/"+id);
  } 

  updateCompania(compania:Companias):Observable<Companias> {
    var requestUrl = this.url + "/api/v1/companias";
    return this.http.put<Companias>(requestUrl + '/'+ compania.id, compania);
  }

}