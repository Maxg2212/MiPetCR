import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetHistoryService } from 'src/app/controller/Client/getHistory/get-history.service';
import { HistoryI } from 'src/app/model/Client/history-model';
import { GetClientCedulaI } from 'src/app/model/Client/get-client';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent implements OnInit{

  client: ClientModelI | undefined;
  cedula: number | null = null;
  clientHistory: HistoryI [] = [];
  history: HistoryI | undefined;


  constructor(
    private route: ActivatedRoute,
    private api: GetHistoryService
  ) {}

    /**
   * @description function to get current product
   */
    ngOnInit(): void {
      const storedClient = sessionStorage.getItem('client');
      console.log(storedClient);
      if (storedClient) {
        this.client = JSON.parse(storedClient);  // Eliminar las comillas escapadas
        this.cedula = this.client?.cedula ?? null; // Asignar cedula si existe, de lo contrario null
      }
      this.updatePurchaseHistory();
    }

    updatePurchaseHistory() {
      if (this.cedula !== null) { // Verificar que cedula no es null
        const client: GetClientCedulaI = { cedula: this.cedula };
        console.log(client);
        this.api.getClientHistory(client).subscribe((data) => {
          console.log(data);
          this.clientHistory = data.result;
        });
      } else {
        console.error("Cédula no disponible.");
      }
    }
    

}
