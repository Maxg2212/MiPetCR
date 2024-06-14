import { Component, Input } from '@angular/core';
import { Branch } from './sucursal';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-sucursal-actualizar',
  templateUrl: './administrator-sucursal-actualizar.component.html',
  styleUrl: './administrator-sucursal-actualizar.component.css'
})
export class AdministratorSucursalActualizarComponent {
  @Input() sucursal:Branch;

  constructor(private _adminService: AdminService) {
    this.sucursal = {
      id:0,    
      provincia: "",
      canton: "",
      distrito: "",
      domicilio: "",
    };
  }

  updateBranch() {
    console.log(this.sucursal);
    
    this._adminService.updateBranch(this.sucursal).subscribe(response => {
      console.log('Branch updated successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
