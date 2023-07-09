import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class KanjiHttpService {
  private url = `${baseUrl}`;

  constructor(private readonly http: HttpClient) {}

  get(kanjiListType: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/${kanjiListType}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(err.error))
      })
    );
  }
}
