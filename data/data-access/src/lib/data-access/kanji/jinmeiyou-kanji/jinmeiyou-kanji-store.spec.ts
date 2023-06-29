import { TestBed } from '@angular/core/testing';
import { JinmeiyouKanjiStore } from './jinmeiyou-kanji-store';

describe(JinmeiyouKanjiStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
        providers: [JinmeiyouKanjiStore]
    });
    const store = TestBed.inject(JinmeiyouKanjiStore);

    return {
      store
    };
;  }
  it('is provided to the module', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  }); 
});