import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, lastValueFrom, of, throwError } from 'rxjs';

import { ReadingKanjiStore } from './reading-kanji.store';
import { ReadingKanjiResponse } from './reading-kanji-response-interface';
import { ReadingKanjiHttpService } from './reading-kanji.service';
import { readingKanjiResponseMock } from './reading-kanji-response-mock'

describe(ReadingKanjiStore.name, () => {
  function setup(httpGetSpy: jest.Mock<Observable<ReadingKanjiResponse>, []> = jest.fn()) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReadingKanjiStore]
    });

    const http = TestBed.inject(ReadingKanjiHttpService);
    http.get = httpGetSpy;
    const store = TestBed.inject(ReadingKanjiStore);

    return {
      store
    };
  }

  it('is provided to the module', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('readingKanji$', () => {
    it('initially emits null', waitForAsync(() => {
      const { store } = setup();

      const readingKanji = lastValueFrom(store.readingKanji$);

      expect(readingKanji).resolves.toEqual(null);
    }));

    describe('loadReadingKanji', () => {
      it('loads a reading kanji record after called with successful return from api', waitForAsync(() => {
        const httpGetSpy = jest.fn().mockReturnValue(of(readingKanjiResponseMock));
        const { store } = setup(httpGetSpy);

        store.readingKanji$.subscribe(readingKanji => {
          expect(readingKanji).toEqual(readingKanjiResponseMock);
        });

        store.loadReadingKanji(readingKanjiResponseMock.reading);

        expect(httpGetSpy).toBeCalledWith(readingKanjiResponseMock.reading);
        expect(httpGetSpy).toBeCalledTimes(1);
      }));

      it('clears character record after called and error response from api', waitForAsync(() => {
        const httpGetSpy = jest.fn().mockImplementation(() => throwError(() => new Error('not found')));
        const { store } = setup(httpGetSpy);

        store.readingKanji$.subscribe(character => {
          expect(character).toEqual(null);
        });

        store.loadReadingKanji('');

        expect(httpGetSpy).toBeCalledWith('');
        expect(httpGetSpy).toBeCalledTimes(1);
      }));
    });
  });
});