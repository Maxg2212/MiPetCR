import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
@Component({
  selector: 'app-administrator-citas-mostrar',
  templateUrl: './administrator-citas-mostrar.component.html',
  styleUrl: './administrator-citas-mostrar.component.css'
})
export class AdministratorCitasMostrarComponent implements OnInit{

  public appointments: any;

  constructor(private _adminService: AdminService) {
    this.appointments = [];
  }

  ngOnInit() {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this._adminService.getAllAppointments().subscribe(
      appointmentsFromApi => {
        console.log(appointmentsFromApi); // Depuración para ver los datos recibidos
        this.appointments = appointmentsFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
