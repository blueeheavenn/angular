import { TestBed } from '@angular/core/testing';

import { RenterListServiceService } from './renter-list-service.service';

describe('RenterListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenterListServiceService = TestBed.get(RenterListServiceService);
    expect(service).toBeTruthy();
  });
});
