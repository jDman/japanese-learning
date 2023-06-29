import { Injectable } from '@angular/core';
import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class ReadingKanjiService {
  private url = `${baseUrl}`;
}
