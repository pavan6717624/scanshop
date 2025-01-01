import { TestBed } from '@angular/core/testing';

import { ScanshopService } from './scanshop.service';

describe('ScanshopService', () => {
  let service: ScanshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
