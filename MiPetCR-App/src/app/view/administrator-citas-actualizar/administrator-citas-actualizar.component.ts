import { Component, Input } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
import { Appointment } from './citas';

@Component({
  selector: 'app-administrator-citas-actualizar',
  templateUrl: './administrator-citas-actualizar.component.html',
  styleUrl: './administrator-citas-actualizar.component.css'
})
export class AdministratorCitasActualizarComponent {
  @Input() cita:Appointment;

  constructor(private _adminService: AdminService) {
    this.cita = {   
      cita_id:0, 
      user_ced: 0,
      veterinaria_id: 0,
      mascota_id: 0,
      fecha: "",
      hora_ingreso: "",
      hora_salida: ""
    };
  }

  updateAppointment() {
    console.log(this.cita);
    
    this._adminService.updateAppointment(this.cita).subscribe(response => {
      console.log('Appointment added successfully:', response);
      
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
