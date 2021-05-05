import { TestBed } from '@angular/core/testing';

import { SubTextMatchService } from './sub-text-match.service';

describe('SubTextMatchService', () => {
  let service: SubTextMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubTextMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
