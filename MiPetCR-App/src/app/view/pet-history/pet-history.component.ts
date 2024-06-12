import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetHistoryService } from 'src/app/controller/Client/petHistory/pet-history.service';
import { PetHistoryI } from 'src/app/model/Client/get-pets';
import { GetIdPetI } from 'src/app/model/Client/get-client';

@Component({
  selector: 'app-pet-history',
  templateUrl: './pet-history.component.html',
  styleUrl: './pet-history.component.css'
})
export class PetHistoryComponent implements OnInit{
  historyList: PetHistoryI[] = [];
  history: PetHistoryI | undefined;
  productIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private api: PetHistoryService
  ) {}

   /**
   * @description function to get current product
   */
   ngOnInit(): void {
    const productIndex = this.route.snapshot.paramMap.get('id');
    if (productIndex !== null) {
      this.productIndex = +productIndex; // Convierte 'productIndex' a número
      this.updatePetsHistory();
    }
  }

    /**
   * @description function to update pet histories
   */
    updatePetsHistory(){
      const id: GetIdPetI = { id: this.productIndex };
      this.api.getPetHistories(id).subscribe((data) => {
        console.log(data);
        this.historyList = data.result;
      });
    }



}
