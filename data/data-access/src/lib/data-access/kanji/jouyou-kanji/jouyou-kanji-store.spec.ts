import { TestBed } from '@angular/core/testing';
import { JouyouKanjiStore } from './jouyou-kanji-store';

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
});