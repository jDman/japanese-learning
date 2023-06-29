import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class JouyouKanjiHttpService {
  private url = `${baseUrl}jouyou`;

  get(): Observable<string[]> {
    return of([]);
  }
}
