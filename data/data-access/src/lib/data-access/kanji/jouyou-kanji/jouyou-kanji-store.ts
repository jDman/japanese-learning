import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { JouyouKanjiHttpService } from './jouyou-kanji-http.service';

interface JouyouKanjiState {
  jouyouKanji: string[];
}

@Injectable()
export class JouyouKanjiStore extends ComponentStore<JouyouKanjiState> {
  readonly jouyouKanji$: Observable<string[]> = this.select(
    state => state.jouyouKanji,
    {
      debounce: true
    }
  );

  constructor(private http: JouyouKanjiHttpService) {
    super(initialState);
  }

  public loadJouyouKanji() {
    this.loadJouyouKanjiFromQuery();
  }

  private loadJouyouKanjiFromQuery = this.effect<void>((kanji$) => kanji$.pipe(
    switchMap(() => this.http.get().pipe(
      tapResponse(
        jouyouKanji => this.updateKanji(jouyouKanji),
        () => this.updateKanji([])
      )
    ))
  ));

  private updateKanji = this.updater<string[]>((state, jouyouKanji) => ({
    ...state,
    jouyouKanji
  }));
}

const initialState: JouyouKanjiState = {
  jouyouKanji: []
};