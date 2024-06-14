import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../view/administrator-productos-crear/producto";
import { Branch } from "../view/administrator-sucursal-crear/sucursal";
import { Appointment } from "../view/administrator-citas-crear/citas";

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

  createProduct(product:Product):Observable<Product>{
    const url = this.path + 'create_product';
    return this._http.post<Product>(url,product);
  }

  createBranch(branch:Branch):Observable<Branch>{
    const url = this.path + 'create_branch';
    return this._http.post<Branch>(url,branch);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    const url = this.path + 'create_appointment';
    return this._http.post<Appointment>(url,appointment);
  }

  updateProduct(product:Product):Observable<Product>{
    const url = this.path + 'update_product';
    return this._http.post<Product>(url,product);
  }

  updateBranch(branch:Branch):Observable<Branch>{
    const url = this.path + 'update_branch';
    return this._http.post<Branch>(url,branch);
  }

  updateAppointment(appointment:Appointment):Observable<Appointment>{
    const url = this.path + 'update_appointment';
    return this._http.post<Appointment>(url,appointment);
  }
  

}
