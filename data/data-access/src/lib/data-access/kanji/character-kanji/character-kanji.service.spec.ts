import { TestBed } from '@angular/core/testing';

import { CharacterKanjiService } from './character-kanji.service';

describe('CharacterKanjiService', () => {
  let service: CharacterKanjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterKanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
