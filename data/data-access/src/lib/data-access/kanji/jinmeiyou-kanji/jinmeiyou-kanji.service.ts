import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class JinmeiyouKanjiService {
  private url = `${baseUrl}`;

  get(): Observable<string[]> {
    return of([]);
  }
}
