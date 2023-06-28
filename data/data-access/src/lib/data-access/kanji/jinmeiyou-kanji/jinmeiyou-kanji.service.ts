import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JinmeiyouKanjiService {
  get(): Observable<string[]> {
    return of([]);
  }
}
