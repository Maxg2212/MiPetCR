import { TestBed } from '@angular/core/testing';

import { AddClientService } from './add-client.service';

describe('AddClientService', () => {
  let service: AddClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
