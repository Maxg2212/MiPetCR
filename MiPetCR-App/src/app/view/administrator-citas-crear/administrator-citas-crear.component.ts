import { Component, Input } from '@angular/core';
import { Appointment } from './citas';
import { AdminService } from 'src/app/adminService/adminService';

@Component({
  selector: 'app-administrator-citas-crear',
  templateUrl: './administrator-citas-crear.component.html',
  styleUrl: './administrator-citas-crear.component.css'
})
export class AdministratorCitasCrearComponent {
  @Input() cita:Appointment;

  constructor(private _adminService: AdminService) {
    this.cita = {    
      user_ced: 0,
      veterinaria_id: 0,
      mascota_id: 0,
      fecha: "",
      hora_ingreso: "",
      hora_salida: ""
    };
  }

  createAppointment() {
    console.log(this.cita);
    
    this._adminService.createAppointment(this.cita).subscribe(response => {
      console.log('Appointment added successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
