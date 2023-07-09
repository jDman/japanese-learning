import { TestBed } from '@angular/core/testing';
import { KanjiStore } from './kanji-store';
import { first, firstValueFrom } from 'rxjs';

describe(KanjiStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
        providers: [KanjiStore]
    });
    const store = TestBed.inject(KanjiStore);

    return {
      store
    };
;  }
  it('is provided to the module', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('jouyouKanji$', () => {
    it('initially emits empty jouyouKanji list', async () => {
        const { store } = setup();

        const jouyouKanji = await firstValueFrom(store.kanji$.pipe(first()));

        expect(jouyouKanji).toEqual([]);
    });
  });
});