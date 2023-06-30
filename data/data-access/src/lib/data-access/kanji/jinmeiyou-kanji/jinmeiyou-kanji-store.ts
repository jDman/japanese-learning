import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { JinmeiyouKanjiHttpService } from './jinmeiyou-kanji.service';

export interface JinmeiyouKanjiState {
  jinmeiyouKanji: string[];
}

@Injectable()
export class JinmeiyouKanjiStore extends ComponentStore<JinmeiyouKanjiState> {
  readonly jinmeiyouKanji$: Observable<string[]> = this.select(
    state => state.jinmeiyouKanji
  );

  constructor(private http: JinmeiyouKanjiHttpService) {
    super(initialState);
  }

  public loadJinmeiyouKanji() {
    this.loadJinmeiyouKanjiFromQuery();
  }

  private loadJinmeiyouKanjiFromQuery = this.effect<void>((kanji$) => kanji$.pipe(
    switchMap(() => this.http.get().pipe(
      tapResponse(
        jinmeiyouKanji => this.updateKanji(jinmeiyouKanji),
        () => this.updateKanji([])
      )
    ))
  ));

  private updateKanji = this.updater<string[]>((state, jinmeiyouKanji) => ({
    ...state,
    jinmeiyouKanji
  }));
}

const initialState: JinmeiyouKanjiState = {
  jinmeiyouKanji: []
};