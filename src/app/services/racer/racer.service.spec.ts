import { TestBed } from '@angular/core/testing';

import { RacerService } from './racer.service';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('RacerService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports, declarations}));

  it('should be created', () => {
    const service: RacerService = TestBed.get(RacerService);
    expect(service).toBeTruthy();
  });
});
