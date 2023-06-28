import { TestBed } from '@angular/core/testing';

import { ParsingJapaneseService } from './parsing-japanese.service';

describe(ParsingJapaneseService.name, () => {
  let service: ParsingJapaneseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParsingJapaneseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
