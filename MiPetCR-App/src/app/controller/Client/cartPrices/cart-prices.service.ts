import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPricesService {
  private totalPrice = new BehaviorSubject<number>(0);
  currentTotalPrice = this.totalPrice.asObservable();

  constructor() { }

  addToCart(price: number): void {
    this.totalPrice.next(this.totalPrice.value + price);
  }

  getTotalPrice(): number {
    return this.totalPrice.value;
  }
}
