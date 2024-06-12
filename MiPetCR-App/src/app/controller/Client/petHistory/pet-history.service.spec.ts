import { TestBed } from '@angular/core/testing';

import { PetHistoryService } from './pet-history.service';

describe('PetHistoryService', () => {
  let service: PetHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
