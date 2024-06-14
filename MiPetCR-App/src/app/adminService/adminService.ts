import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../view/administrator-mostrar-usuarios/users";

@Injectable()
export class AdminService {

  public path = 'https://localhost:7030/api/';

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<any> {
    const url = this.path + 'get_all_users';
    return this._http.get<any>(url);
  }

  getAllOrders(): Observable<any> {
    const url = this.path + 'get_all_orders';
    return this._http.get<any>(url);
  }

  getAllAppointments(): Observable<any> {
    const url = this.path + 'get_all_appointments';
    return this._http.get<any>(url);
  }

  getAllBranches(): Observable<any> {
    const url = this.path + 'get_all_branches';
    return this._http.get<any>(url);
  }

  getAllProducts(): Observable<any> {
    const url = this.path + 'get_all_products';
    return this._http.get<any>(url);
  }

  getAllFiles(): Observable<any> {
    const url = this.path + 'get_all_files';
    return this._http.get<any>(url);
  }

}
