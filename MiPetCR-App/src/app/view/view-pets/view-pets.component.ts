import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ViewPetsService } from 'src/app/controller/Client/viewPets/view-pets.service';
import { GetClientCedulaI } from 'src/app/model/Client/get-client';
import { PetI } from 'src/app/model/Client/get-pets';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-view-pets',
  templateUrl: './view-pets.component.html',
  styleUrls: ['./view-pets.component.css']
})
export class ViewPetsComponent implements OnInit {

  cedula: number | null = null;
  pet: PetI | undefined;
  pets: PetI[] = [];
  client: ClientModelI | undefined;

  constructor(private router: Router, private api: ViewPetsService) {}

  ngOnInit(): void {
    const storedClient = sessionStorage.getItem('client');
    console.log(storedClient);
    if (storedClient) {
      this.client = JSON.parse(storedClient);  // Eliminar las comillas escapadas
      this.cedula = this.client?.cedula ?? null; // Asignar cedula si existe, de lo contrario null
    }
    this.updatePets();
  }

  updatePets() {
    if (this.cedula !== null) { // Verificar que cedula no es null
      const client: GetClientCedulaI = { cedula: this.cedula };
      console.log(client);
      this.api.getAllPets(client).subscribe((data) => {
        console.log(data);
        this.pets = data.result;
      });
    } else {
      console.error("Cédula no disponible.");
    }
  }

  viewPet(index: number): void {
    this.router.navigate(['/pet-history', index + 1]);
  }
}
