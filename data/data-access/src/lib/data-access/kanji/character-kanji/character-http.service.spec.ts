import { TestBed } from '@angular/core/testing';

import { CharacterHttpService } from './character-http.service';
import { firstValueFrom } from 'rxjs';

describe(CharacterHttpService.name, () => {
  let service: CharacterHttpService;

  beforeEach(() => {
    service = TestBed.inject(CharacterHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially return null', async () => {
    const result = await firstValueFrom(service.get(''));

    expect(result).toBeNull();
  });
});
