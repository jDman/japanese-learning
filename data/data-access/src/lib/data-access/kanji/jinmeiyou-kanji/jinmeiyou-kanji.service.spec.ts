import { TestBed } from '@angular/core/testing';

import { JinmeiyouKanjiHttpService } from './jinmeiyou-kanji.service';
import { firstValueFrom } from 'rxjs';

describe(JinmeiyouKanjiHttpService.name, () => {
  let service: JinmeiyouKanjiHttpService;

  beforeEach(() => {
    service = TestBed.inject(JinmeiyouKanjiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially return empty array', async () => {
    const result = await firstValueFrom(service.get());

    expect(result).toEqual([]);
  });
});
