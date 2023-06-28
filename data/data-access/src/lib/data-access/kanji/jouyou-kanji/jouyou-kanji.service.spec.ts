import { TestBed } from '@angular/core/testing';

import { JouyouKanjiService } from './jouyou-kanji.service';

describe('JouyouKanjiService', () => {
  let service: JouyouKanjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JouyouKanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
