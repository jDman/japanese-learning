import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { CharacterHttpService } from './character-http.service';
import { CharacterRecord } from './character-record-interface';

interface CharacterState {
  character: CharacterRecord | null;
}

@Injectable()
export class CharacterStore extends ComponentStore<CharacterState> {
  readonly character$: Observable<CharacterRecord | null> = this.select(
    state => state.character,
    {
      debounce: true
    }
  );

  constructor(private http: CharacterHttpService) {
    super(initialState);
  }

  public loadCharacter(characterQuery: string): void {
    this.loadCharacterFromQuery(characterQuery);
  }

  private loadCharacterFromQuery = this.effect<string>((character$) => character$.pipe(
    switchMap((characterQuery) => this.http.get(characterQuery).pipe(
      tapResponse(
        (character: CharacterRecord) => this.updateCharacter(character),
        () => { 
          return this.updateCharacter(null);
        }
      )
    ))
  ));

  private updateCharacter = this.updater<CharacterRecord | null>((state, character) => ({
    ...state,
    character
  }));
}

const initialState: CharacterState = {
    character: null
};