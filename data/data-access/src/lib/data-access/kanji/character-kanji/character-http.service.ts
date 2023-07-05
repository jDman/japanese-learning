import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base-url';
import { Observable, catchError, mergeMap, of, throwError } from 'rxjs';
import { CharacterResponse } from './character-response-interface';
import { CharacterErrorResponse } from './character-error-response-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {
  private url = `${baseUrl}`;

  constructor(private readonly http: HttpClient) {}

  get(characterQuery: string): Observable<CharacterResponse | CharacterErrorResponse> {
    return this.http.get<CharacterResponse>(`${this.url}${characterQuery}`).pipe(
      mergeMap((response: CharacterResponse) => {
        return of({
          kanji: response.kanji,
          grade: response.grade,
          stroke_count: response.stroke_count,
          meanings: response.meanings,
          kun_readings: response.kun_readings,
          on_readings: response.on_readings,
          name_readings: response.name_readings,
        });
      }),
      catchError((err) => of(err))
    )
  }
}
