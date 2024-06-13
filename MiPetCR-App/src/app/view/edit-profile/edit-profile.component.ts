import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EditClientService } from 'src/app/controller/Client/editClient/edit-client.service';
import { UpdateClienteI } from 'src/app/model/Client/get-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  client: ClientModelI | undefined;
  clients: ClientModelI[] = [];

  constructor(private router: Router, private api: EditClientService) { }

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  clientForm = new FormGroup({
    cedula: new FormControl(0, { nonNullable: true }),
    correo: new FormControl('', { nonNullable: true }),
    nombre: new FormControl('', { nonNullable: true }),
    telefono: new FormControl(0, { nonNullable: true }),
  });

  /**
   * @description This method is used to update the client information
   * @param form 
   */
  updateClient(form: UpdateClienteI) {
    const storedCorreo = sessionStorage.getItem('correo');
    const storedCorreoParsed = storedCorreo ? JSON.parse(storedCorreo) : '';

    // Check if the email has been modified
    if (storedCorreoParsed !== form.correo) {
      sessionStorage.setItem('correo', JSON.stringify(form.correo));
    }

    this.api.updateClient(form).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;

      if (dataResponse.status === 'ok') {
        console.log(dataResponse.status);
        console.log(data);
        alert('Información actualizada correctamente');
        this.router.navigate(['/client-hub']);
      } else {
        console.log(dataResponse.status);
        alert('No se pudo actualizar la información');
        console.log(data);
      }
    });
  }
}
