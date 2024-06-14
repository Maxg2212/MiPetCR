import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginClientService } from 'src/app/controller/Client/loginClient/login-client.service';
import { LoginClientI } from 'src/app/model/Client/login-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrl: './login-veterinario.component.css'
})
export class LoginVeterinarioComponent {
    constructor( private router : Router, 
      private api : LoginClientService ) { }

   /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
   clientForm = new FormGroup({
    correo: new FormControl('', { nonNullable: true }),
    contrasena: new FormControl('', { nonNullable: true }),
  });

    /** 
   * @description This method is used to login the admin
   * @param form 
   */
    veterinarioLogin(form : LoginClientI){

      this.api.loginClient(form).subscribe((data) => {
        let dataResponse: ResponseTemplateI = data;
        
        if (JSON.parse(JSON.stringify(dataResponse.status)) == 'ok') {
          console.log(dataResponse.status);
          sessionStorage.setItem('veterinario', JSON.stringify(data.result));
          console.log(data);
          this.router.navigate(['/veterinario-menu']);
        } 
        else {
          console.log(dataResponse.status);
          alert('Password or email incorrect');
          console.log(data);
        }
      });
    }
}
