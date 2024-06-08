import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetallProductsService } from 'src/app/controller/Admin/getall-products.service';
import { ProductI } from 'src/app/model/Admin/get-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  products : ProductI[] = [];
  product: ProductI | undefined;
  productIndex = 0;
  
  constructor(
    private route: ActivatedRoute,
    private api: GetallProductsService
  ) {}

    /**
   * @description function to get current product
   */
    ngOnInit(): void {
      const productIndex = this.route.snapshot.paramMap.get('id');
      if (productIndex !== null) {
        this.productIndex = +productIndex; // Convierte 'productIndex' a número
        this.updateProducts();
      }
    }
 

  /**
   * @description function to update products
   */
  updateProducts(){
    this.api.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data.result;
      this.product = this.products[this.productIndex];
    });
  }
}
