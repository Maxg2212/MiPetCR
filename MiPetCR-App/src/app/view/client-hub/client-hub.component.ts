import { Component, OnInit } from '@angular/core';
import { GetClientService } from 'src/app/controller/Client/getClient/get-client.service';
import { GetClientI } from 'src/app/model/Client/get-client';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-client-hub',
  templateUrl: './client-hub.component.html',
  styleUrls: ['./client-hub.component.css']
})
export class ClientHubComponent implements OnInit {

  correo: string = "";
  client: ClientModelI | undefined;
  clients: ClientModelI[] = [];

  constructor(private api: GetClientService) {}

  /**
   * @description function to get current product
   */
  ngOnInit(): void {
    const storedCorreo = sessionStorage.getItem('correo');
    if (storedCorreo) {
      this.correo = JSON.parse(storedCorreo);  // Eliminar las comillas escapadas
    }

    this.updateClient();
    

  }

  /**
   * @description function to update products
   */
  updateClient() {
    const client: GetClientI = { correo: this.correo };
    this.api.getClient(client).subscribe((data) => {
      console.log(data);
      this.clients = data.result;
      this.client = this.clients[0];
      sessionStorage.setItem('cedula', JSON.stringify(this.client?.cedula));
    });
  }

  
}
