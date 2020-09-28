import { TestBed } from '@angular/core/testing';

import { CitynetService } from './citynet.service';

describe('CitynetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitynetService = TestBed.get(CitynetService);
    expect(service).toBeTruthy();
  });
});
