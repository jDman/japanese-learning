import { TestBed } from '@angular/core/testing';

import { CharacterHttpService } from './character-http.service';

describe(CharacterHttpService.name, () => {
  let service: CharacterHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});