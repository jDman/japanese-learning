import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterStore } from './character-store';
import { Observable, lastValueFrom, of, throwError } from 'rxjs';
import { CharacterHttpService } from './character-http.service';
import { characterRecordMock } from './character-record-mock';
import { CharacterRecord } from './character-record-interface';

describe(CharacterStore.name, () => {
  function setup(httpGetSpy: jest.Mock<Observable<CharacterRecord>, []> = jest.fn()) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterStore]
    });

    const http = TestBed.inject(CharacterHttpService);
    http.get = httpGetSpy;
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
    it('initially emits null', waitForAsync(() => {
      const { store } = setup();

      const characters = lastValueFrom(store.character$);

      expect(characters).resolves.toEqual(null);
    }));

    describe('loadCharacter', () => {
      it('loads a character record after called with successful return from api', waitForAsync(() => {
        const httpGetSpy = jest.fn().mockReturnValue(of(characterRecordMock));
        const { store } = setup(httpGetSpy);

        store.character$.subscribe(character => {
          expect(character).toEqual(characterRecordMock);
        });

        store.loadCharacter(characterRecordMock.kanji);

        expect(httpGetSpy).toBeCalledWith(characterRecordMock.kanji);
        expect(httpGetSpy).toBeCalledTimes(1);
      }));

      it('clears character record after called and error response from api', waitForAsync(() => {
        const httpGetSpy = jest.fn().mockImplementation(() => throwError(() => new Error('not found')));
        const { store } = setup(httpGetSpy);

        store.character$.subscribe(character => {
          expect(character).toEqual(null);
        });

        store.loadCharacter('');

        expect(httpGetSpy).toBeCalledWith('');
        expect(httpGetSpy).toBeCalledTimes(1);
      }));
    });
  });
});