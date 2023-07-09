import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { baseUrl } from '../base-url';
import { ReadingKanjiResponse } from './reading-kanji-response-interface';

@Injectable({
  providedIn: 'root'
})
export class ReadingKanjiHttpService {
  private url = `${baseUrl}/reading/`;

  constructor(private readonly http: HttpClient) {}

  get(reading: string): Observable<ReadingKanjiResponse> {
    return this.http.get<ReadingKanjiResponse>(`${this.url}${reading}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(err.error))
      })
    );
  }
}
