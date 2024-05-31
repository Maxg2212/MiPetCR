import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddClientService } from 'src/app/controller/Client/addClient/add-client.service';
import { AddClientI } from 'src/app/model/Client/add-client';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {
  clientForm = new FormGroup({
    cedula: new FormControl('', Validators.required),
    rol_id: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl(0, Validators.required),
  });

  constructor( private api : AddClientService ) { }

  /**
   * @description This method is used to create a new client
   * @param form 
   */
  createNewClient(form : AddClientI) {

    console.log(form);

    this.api.addClient(form).subscribe(data => {
      alert('Client created successfully!');
    });
  }
  
}
