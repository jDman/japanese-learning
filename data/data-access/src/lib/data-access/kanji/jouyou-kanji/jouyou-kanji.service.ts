import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JouyouKanjiService {
  get(): Observable<string[]> {
    return of([]);
  }
}
