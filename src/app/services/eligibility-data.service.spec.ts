import { TestBed, inject } from '@angular/core/testing';

import { EligibilityDataService } from './eligibility-data.service';

describe('EligibilityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EligibilityDataService]
    });
  });

  it('should be created', inject([EligibilityDataService], (service: EligibilityDataService) => {
    expect(service).toBeTruthy();
  }));
});
