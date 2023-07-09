import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { KanjiHttpService } from './kanji-http.service';

interface KanjiState {
  kanji: string[];
}

@Injectable()
export class KanjiStore extends ComponentStore<KanjiState> {
  readonly kanji$: Observable<string[]> = this.select(
    state => state.kanji,
    {
      debounce: true
    }
  );

  constructor(private http: KanjiHttpService) {
    super(initialState);
  }

  public loadKanji(kanjiListType: string) {
    this.loadKanjiFromQuery(kanjiListType);
  }

  private loadKanjiFromQuery = this.effect<string>((kanji$) => kanji$.pipe(
    switchMap((kanjiListType: string) => this.http.get(kanjiListType).pipe(
      tapResponse(
        kanji => this.updateKanji(kanji),
        () => this.updateKanji([])
      )
    )))
  );

  private updateKanji = this.updater<string[]>((state, kanji) => ({
    ...state,
    kanji
  }));
}

const initialState: KanjiState = {
  kanji: []
};