import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPricesService {
  private totalPrice = new BehaviorSubject<number>(0);
  currentTotalPrice = this.totalPrice.asObservable();

  private productPrices: number[] = [];
  private codeList: string[] = [];
  private productPricesSubject = new BehaviorSubject<number[]>([]);
  currentProductPrices = this.productPricesSubject.asObservable();

  constructor() { 
    // Recuperar del localStorage si existe
    const storedPrices = localStorage.getItem('productPrices');
    const storedTotalPrice = localStorage.getItem('totalPrice');
    const storedCodeList = localStorage.getItem('codelist');
    
    if (storedPrices) {
      this.productPrices = JSON.parse(storedPrices);
      this.productPricesSubject.next(this.productPrices);
    }

    if (storedTotalPrice) {
      this.totalPrice.next(JSON.parse(storedTotalPrice));
    }

    if (storedCodeList) {
      this.codeList = JSON.parse(storedCodeList);
    }
  }

  addToCart(price: number): void {
    console.log(price);
    this.productPrices.push(price);
    console.log(this.productPrices);
    this.productPricesSubject.next(this.productPrices);
    this.totalPrice.next(this.totalPrice.value + price);

    // Guardar en el localStorage
    localStorage.setItem('productPrices', JSON.stringify(this.productPrices));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice.value));
  }

  addProductCode(code: string): void {
    this.codeList.push(code);
    localStorage.setItem('codelist', JSON.stringify(this.codeList));
    console.log(this.codeList);
  }

  getTotalPrice(): number {
    return this.totalPrice.value;
  }

  getProductPrices(): number[] {
    return this.productPrices;
  }
}