import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent implements OnInit {
  totalPrice = 0;
  productPrices: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const storedPrices = localStorage.getItem('productPrices');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedPrices) {
      this.productPrices = JSON.parse(storedPrices);
      console.log(this.productPrices);
    }

    if (storedTotalPrice) {
      this.totalPrice = JSON.parse(storedTotalPrice);
      console.log(this.totalPrice);
    }
  }

  purchase(): void {
    // Limpiar el localStorage
    localStorage.removeItem('productPrices');
    localStorage.removeItem('totalPrice');

    // Vaciar las variables locales
    this.productPrices = [];
    this.totalPrice = 0;

    console.log('Carrito de compras vacío');
  }
}
