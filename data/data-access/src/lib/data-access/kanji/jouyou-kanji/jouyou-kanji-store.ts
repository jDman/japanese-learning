import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface JouyouKanjiState {
  jouyouKanji: string[];
}

@Injectable()
export class JouyouKanjiStore extends ComponentStore<JouyouKanjiState> {
  readonly jouyouKanji$: Observable<string[]> = this.select(
    state => state.jouyouKanji
  );

  constructor() {
    super(initialState);
  }

  private updateKanji = this.updater<string[]>((state, jouyouKanji) => ({
    ...state,
    jouyouKanji
  }));
}

const initialState: JouyouKanjiState = {
  jouyouKanji: []
};