import { Component, Input } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
import { Branch } from './sucursal';

@Component({
  selector: 'app-administrator-sucursal-crear',
  templateUrl: './administrator-sucursal-crear.component.html',
  styleUrl: './administrator-sucursal-crear.component.css'
})
export class AdministratorSucursalCrearComponent {

  @Input() sucursal:Branch;

  constructor(private _adminService: AdminService) {
    this.sucursal = {    
      provincia: "",
      canton: "",
      distrito: "",
      domicilio: "",
    };
  }

  createBranch() {
    console.log(this.sucursal);
    
    this._adminService.createBranch(this.sucursal).subscribe(response => {
      console.log('Branch added successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
