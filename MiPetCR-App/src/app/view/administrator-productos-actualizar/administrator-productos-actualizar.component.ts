import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../administrator-productos-crear/producto';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-productos-actualizar',
  templateUrl: './administrator-productos-actualizar.component.html',
  styleUrl: './administrator-productos-actualizar.component.css'
})
export class AdministratorProductosActualizarComponent{
  
  @Input() producto:Product;

  constructor(private _adminService: AdminService) {
    this.producto = {    
      codigo: "",
      descripcion: "",
      marca: "",
      precio: 0,
      iva: 0,
      cantidad_disponible: 0,
      categoria: "",
      proc_med: true
    };
  }

  updateProduct() {
    console.log(this.producto);
    
    this._adminService.updateProduct(this.producto).subscribe(response => {
      console.log('Product updated successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
