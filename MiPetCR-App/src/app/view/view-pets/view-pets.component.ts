import { Component, OnInit} from '@angular/core';
import { ViewPetsService } from 'src/app/controller/Client/viewPets/view-pets.service';
import { GetClientCedulaI } from 'src/app/model/Client/get-client';
import { PetI } from 'src/app/model/Client/get-pets';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-view-pets',
  templateUrl: './view-pets.component.html',
  styleUrl: './view-pets.component.css'
})
export class ViewPetsComponent implements OnInit {

  cedula: number = 0;
  pet: PetI | undefined;
  pets: PetI[] = [];
  client: ClientModelI | undefined;

  constructor(private api: ViewPetsService) {}

   /**
   * @description function to get current product
   */
   ngOnInit(): void {
    const storedCedula = sessionStorage.getItem('cedula');
    console.log(storedCedula);
    if (storedCedula) {
      this.cedula = JSON.parse(storedCedula);  // Eliminar las comillas escapadas
    }
    this.updatePets();
  }

    /**
   * @description function to update pets
   */
    updatePets() {
      const client: GetClientCedulaI = { cedula: this.cedula};
      console.log(client);
      this.api.getAllPets(client).subscribe((data) => {
        console.log(data);
        this.pets = data.result;
      });
    }


}
