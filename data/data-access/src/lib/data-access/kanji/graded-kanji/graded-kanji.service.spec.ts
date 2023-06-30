import { TestBed } from '@angular/core/testing';

import { GradedKanjiService } from './graded-kanji.service';

describe('GradedKanjiService', () => {
  let service: GradedKanjiService;

  beforeEach(() => {
    service = TestBed.inject(GradedKanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
