import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-mostrar-expedientes',
  templateUrl: './administrator-mostrar-expedientes.component.html',
  styleUrl: './administrator-mostrar-expedientes.component.css'
})
export class AdministratorMostrarExpedientesComponent implements OnInit {

  public expedientes: any;

  constructor(private _adminService: AdminService) {
    this.expedientes = [];
  }

  ngOnInit() {
    this.getAllExpedientes();
  }

  getAllExpedientes() {
    this._adminService.getAllFiles().subscribe(
      expedientesFromApi => {
        console.log(expedientesFromApi); // Depuración para ver los datos recibidos
        this.expedientes = expedientesFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
