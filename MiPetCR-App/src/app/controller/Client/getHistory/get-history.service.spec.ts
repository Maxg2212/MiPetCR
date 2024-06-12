import { TestBed } from '@angular/core/testing';

import { GetHistoryService } from './get-history.service';

describe('GetHistoryService', () => {
  let service: GetHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
