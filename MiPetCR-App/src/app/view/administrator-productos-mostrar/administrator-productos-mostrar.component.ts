import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-productos-mostrar',
  templateUrl: './administrator-productos-mostrar.component.html',
  styleUrl: './administrator-productos-mostrar.component.css'
})
export class AdministratorProductosMostrarComponent implements OnInit{
  public products: any;

  constructor(private _adminService: AdminService) {
    this.products = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this._adminService.getAllProducts().subscribe(
      productsFromApi => {
        console.log(productsFromApi); // Depuración para ver los datos recibidos
        this.products = productsFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
