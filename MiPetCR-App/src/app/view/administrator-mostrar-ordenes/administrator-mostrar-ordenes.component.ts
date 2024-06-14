import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-mostrar-ordenes',
  templateUrl: './administrator-mostrar-ordenes.component.html',
  styleUrl: './administrator-mostrar-ordenes.component.css'
})
export class AdministratorMostrarOrdenesComponent  implements OnInit{

  public orders: any;

  constructor(private _adminService: AdminService) {
    this.orders = [];
  }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this._adminService.getAllOrders().subscribe(
      ordersFromApi => {
        console.log(ordersFromApi); // Depuración para ver los datos recibidos
        this.orders = ordersFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
