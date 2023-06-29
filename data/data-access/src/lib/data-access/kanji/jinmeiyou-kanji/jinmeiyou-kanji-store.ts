import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface JinmeiyouKanjiState {
  jinmeiyouKanjiStore: string[];
}

@Injectable()
export class JinmeiyouKanjiStore extends ComponentStore<JinmeiyouKanjiState> {
  constructor() {
    super(initialState);
  }
}

const initialState: JinmeiyouKanjiState = {
  jinmeiyouKanjiStore: []
};