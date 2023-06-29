import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class GradedKanjiService {
  private url = `${baseUrl}/grade-`;

  getKanjiByGrade(grade: string): Observable<string[]> {
    return of([]);
  }
}
