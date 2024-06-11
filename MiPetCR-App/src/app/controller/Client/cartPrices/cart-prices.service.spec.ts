import { TestBed } from '@angular/core/testing';

import { CartPricesService } from './cart-prices.service';

describe('CartPricesService', () => {
  let service: CartPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
