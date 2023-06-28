import { TestBed } from '@angular/core/testing';

import { JinmeiyouKanjiService } from './jinmeiyou-kanji.service';

describe('JinmeiyouKanjiService', () => {
  let service: JinmeiyouKanjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JinmeiyouKanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
