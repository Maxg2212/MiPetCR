import { Component } from '@angular/core';
import { CartPricesService } from 'src/app/controller/Client/cartPrices/cart-prices.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
  totalPrice = 0;

  constructor(private CartPricesService: CartPricesService) { }

  ngOnInit(): void {
    this.CartPricesService.currentTotalPrice.subscribe(price => {
      this.totalPrice = price;
    });
  }

}
