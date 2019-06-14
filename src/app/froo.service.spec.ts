import { TestBed } from '@angular/core/testing';

import { FrooService } from './froo.service';

describe('FrooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrooService = TestBed.get(FrooService);
    expect(service).toBeTruthy();
  });
});
