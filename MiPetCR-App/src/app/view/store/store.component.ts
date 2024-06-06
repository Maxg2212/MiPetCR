import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetallProductsService } from 'src/app/controller/Admin/getall-products.service';
import { ProductI } from 'src/app/model/Admin/get-products';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{
  currentProduct = 0;
  products : ProductI[] = [];
  constructor( private router : Router, 
    private api: GetallProductsService ) {}


  
  /**
   * @description function to get current product
   */
    ngOnInit(): void {
      this.updateProducts();
    }
 

  /**
   * @description function to update products
   */
  updateProducts(){
    this.api.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data.result;
    });
  }

  viewProduct(index: number): void {
    this.router.navigate(['/product', index]);
  }
}
