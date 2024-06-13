import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetallProductsService } from 'src/app/controller/Admin/getall-products.service';
import { ProductI } from 'src/app/model/Admin/get-products';
import { CartPricesService } from 'src/app/controller/Client/cartPrices/cart-prices.service';

@Component({
  selector: 'app-client-store',
  templateUrl: './client-store.component.html',
  styleUrl: './client-store.component.css'
})
export class ClientStoreComponent implements OnInit {
  currentProduct = 0;
  products: ProductI[] = [];
  product: ProductI | undefined;
  productPrice = 0;

  constructor(private router: Router, 
              private api: GetallProductsService,
              private CartPricesService: CartPricesService) {}

  ngOnInit(): void {
    this.updateProducts();
  }

  updateProducts(): void {
    this.api.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data.result;
    });
  }

  viewProduct(index: number): void {
    this.router.navigate(['/product', index]);
  }

  addProduct(index: number): void {
    this.product = this.products[index]; 
    this.productPrice = this.product.precio ?? 0;
    const codigo = this.product.codigo ?? "";
    console.log(this.productPrice);
    this.CartPricesService.addToCart(this.productPrice);
    this.CartPricesService.addProductCode(codigo);
    alert('Agregado al carrito');
  }
}