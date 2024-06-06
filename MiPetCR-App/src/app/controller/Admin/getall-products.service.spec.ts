import { TestBed } from '@angular/core/testing';

import { GetallProductsService } from './getall-products.service';

describe('GetallProductsService', () => {
  let service: GetallProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
