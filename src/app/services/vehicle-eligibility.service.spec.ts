import { TestBed, inject } from '@angular/core/testing';

import { VehicleEligibilityService } from './vehicle-eligibility.service';

describe('VehicleEligibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleEligibilityService]
    });
  });

  it('should be created', inject([VehicleEligibilityService], (service: VehicleEligibilityService) => {
    expect(service).toBeTruthy();
  }));
});
