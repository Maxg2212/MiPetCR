import { Component, Input} from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
import { Product } from './producto';

@Component({
  selector: 'app-administrator-productos-crear',
  templateUrl: './administrator-productos-crear.component.html',
  styleUrl: './administrator-productos-crear.component.css'
})
export class AdministratorProductosCrearComponent {

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

  createProduct() {
    console.log(this.producto);
    
    this._adminService.createProduct(this.producto).subscribe(response => {
      console.log('Product added successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }

}
