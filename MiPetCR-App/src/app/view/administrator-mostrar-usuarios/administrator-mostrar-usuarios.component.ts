import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/adminService/adminService';
import { User } from './users';

@Component({
  selector: 'app-administrator-mostrar-usuarios',
  templateUrl: './administrator-mostrar-usuarios.component.html',
  styleUrls: ['./administrator-mostrar-usuarios.component.css']
})
export class AdministratorMostrarUsuariosComponent implements OnInit {

  public users: any;

  constructor(private _adminService: AdminService) {
    this.users = [];
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._adminService.getAllUsers().subscribe(
      usersFromApi => {
        console.log(usersFromApi); // Depuración para ver los datos recibidos
        this.users = usersFromApi;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
