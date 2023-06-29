import { TestBed } from '@angular/core/testing';

import { JouyouKanjiHttpService } from './jouyou-kanji.service';

describe(JouyouKanjiHttpService.name, () => {
  let service: JouyouKanjiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JouyouKanjiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
