import { TestBed } from '@angular/core/testing';

import { PrepopulateService } from './prepopulate.service';

describe('PrepopulateService', () => {
  let service: PrepopulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepopulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
