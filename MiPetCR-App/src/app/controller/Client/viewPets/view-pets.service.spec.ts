import { TestBed } from '@angular/core/testing';

import { ViewPetsService } from './view-pets.service';

describe('ViewPetsService', () => {
  let service: ViewPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
