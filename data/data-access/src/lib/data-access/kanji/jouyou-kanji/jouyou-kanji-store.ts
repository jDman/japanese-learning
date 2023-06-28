import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface JouyouKanjiState {
  jouyouKanji: string[];
}

@Injectable()
export class JouyouKanjiStore extends ComponentStore<JouyouKanjiState> {
    constructor() {
        super(initialState);
    }
}

const initialState: JouyouKanjiState = {
  jouyouKanji: []
};