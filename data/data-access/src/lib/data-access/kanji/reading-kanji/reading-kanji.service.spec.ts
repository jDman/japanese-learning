import { TestBed } from '@angular/core/testing';

import { ReadingKanjiService } from './reading-kanji.service';

describe('ReadingKanjiService', () => {
  let service: ReadingKanjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingKanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
