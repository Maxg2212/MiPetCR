import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddClientService } from 'src/app/controller/Client/addClient/add-client.service';
import { AddClientI } from 'src/app/model/Client/add-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {
  clientForm = new FormGroup({
    cedula: new FormControl(0, Validators.required),
    rol_id: new FormControl(0, Validators.required),
    correo: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl(0, Validators.required),
  });

  constructor( private api : AddClientService,  private router : Router) { }

  /**
   * @description This method is used to create a new client
   * @param form 
   */
  createNewClient(form : AddClientI) {

    console.log(form);

    this.api.addClient(form).subscribe(data => {
      let dataResponse: ResponseTemplateI = data;
      
      if (JSON.parse(JSON.stringify(dataResponse.status)) == 'ok') {
        console.log(dataResponse.status);
        console.log(data);
        alert('Usuario creado correctamente!');
        this.router.navigate(['/login-client']);
      } 
      else {
        console.log(dataResponse.status);
        alert('Error al crear usuario');
        console.log(data);
      }


    });
  }
  
}
