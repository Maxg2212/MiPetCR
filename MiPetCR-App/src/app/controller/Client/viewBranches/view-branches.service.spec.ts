import { TestBed } from '@angular/core/testing';

import { ViewBranchesService } from './view-branches.service';

describe('ViewBranchesService', () => {
  let service: ViewBranchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBranchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
