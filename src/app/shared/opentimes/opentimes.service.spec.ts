import { TestBed } from '@angular/core/testing';

import { OpentimesService } from './opentimes.service';

describe('OpentimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpentimesService = TestBed.get(OpentimesService);
    expect(service).toBeTruthy();
  });
});
