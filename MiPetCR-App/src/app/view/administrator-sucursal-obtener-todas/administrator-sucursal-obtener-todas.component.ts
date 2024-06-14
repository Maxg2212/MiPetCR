import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
@Component({
  selector: 'app-administrator-sucursal-obtener-todas',
  templateUrl: './administrator-sucursal-obtener-todas.component.html',
  styleUrl: './administrator-sucursal-obtener-todas.component.css'
})
export class AdministratorSucursalObtenerTodasComponent  implements OnInit{

  public branches: any;

  constructor(private _adminService: AdminService) {
    this.branches = [];
  }

  ngOnInit() {
    this.getAllBranches();
  }

  getAllBranches() {
    this._adminService.getAllBranches().subscribe(
      branchesFromApi => {
        console.log(branchesFromApi); // Depuración para ver los datos recibidos
        this.branches = branchesFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
