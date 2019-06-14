import { TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('ResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports, declarations}));

  it('should be created', () => {
    const service: ResultService = TestBed.get(ResultService);
    expect(service).toBeTruthy();
  });
});
