import { Injectable } from '@angular/core';
import { baseUrl } from '../base-url';
import { Observable, of } from 'rxjs';
import { CharacterRecord } from './character-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {
  private url = `${baseUrl}`;

  get(characterQuery: string): Observable<CharacterRecord | null> {
    return of(null);
  }
}
