import { TestBed } from '@angular/core/testing';

import { JouyouKanjiHttpService } from './jouyou-kanji-http.service';
import { firstValueFrom } from 'rxjs';

describe(JouyouKanjiHttpService.name, () => {
  let service: JouyouKanjiHttpService;

  beforeEach(() => {
    service = TestBed.inject(JouyouKanjiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially return empty array', async () => {
    const result = await firstValueFrom(service.get());

    expect(result).toEqual([]);
  });
});
