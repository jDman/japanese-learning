import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradedKanjiService {

  getKanjiByGrade(grade: string): Observable<string[]> {
    return of([]);
  }
}
