import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterStore } from './character-store';
import { firstValueFrom } from 'rxjs';

describe(CharacterStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterStore]
    });

    const store = TestBed.inject(CharacterStore);

    return {
      store
    };
  }

  it('is provided to the module', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('character$', () => {
    it('initially emits null', async () => {
      const { store } = setup();

      const characters = await firstValueFrom(store.character$);

      expect(characters).toEqual(null);
    });
  });
});