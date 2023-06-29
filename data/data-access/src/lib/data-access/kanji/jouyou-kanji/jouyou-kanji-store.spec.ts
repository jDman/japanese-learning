import { TestBed } from '@angular/core/testing';
import { JouyouKanjiStore } from './jouyou-kanji-store';
import { first, firstValueFrom } from 'rxjs';

describe(JouyouKanjiStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
        providers: [JouyouKanjiStore]
    });
    const store = TestBed.inject(JouyouKanjiStore);

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

        const jouyouKanji = await firstValueFrom(store.jouyouKanji$.pipe(first()));

        expect(jouyouKanji).toEqual([]);
    });
  });
});