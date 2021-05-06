import { TestBed } from '@angular/core/testing';

import { SubtextMatchService } from './sub-text-match.service';

describe('SubtextMatchService', () => {
  let service: SubtextMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtextMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
