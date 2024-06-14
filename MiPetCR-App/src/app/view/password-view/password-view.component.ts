import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from 'src/app/controller/Client/changePassword/change-password.service';
import { LoginClientI } from 'src/app/model/Client/login-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.css']
})
export class PasswordViewComponent {
  constructor(private router: Router, private api: ChangePasswordService) { }

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  clientForm = new FormGroup({
    correo: new FormControl('', { nonNullable: true }),
    contrasena: new FormControl('', { nonNullable: true }),
  });

  /**
   * @description This method is used to change the password
   * @param form 
   */
  changePassword(form: LoginClientI) {
    this.api.changePassword(form).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;
      const correo = this.clientForm.value.correo;

      if (JSON.parse(JSON.stringify(dataResponse.status)) == 'ok') {
        console.log(dataResponse.status);
        console.log(data);

        if (correo) {
          this.api.sendEmail(correo).subscribe((data) => {
            // Manejar la respuesta del envío del correo
          });
        } else {
          console.error('El correo es undefined');
        }

        alert('Contraseña cambiada correctamente');
      } else {
        console.log(dataResponse.status);
        alert('No se pudo cambiar la contraseña');
        console.log(data);
      }
    });
  }
}
