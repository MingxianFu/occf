import { TestBed, inject } from '@angular/core/testing';

import { SchDataService } from './sch-data.service';

describe('SchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchDataService]
    });
  });

  it('should be created', inject([SchDataService], (service: SchDataService) => {
    expect(service).toBeTruthy();
  }));
});
