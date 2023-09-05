import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { baseUrl } from '../base-url';

@Injectable({
  providedIn: 'root'
})
export class KanjiHttpService {
  private url = `${baseUrl}`;

  constructor(private readonly http: HttpClient) {}

  get(kanjiListType: string): Observable<string[]> {
    return this.http.get('./assets/dictionary.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      }).pipe(
        map((data) => this.parseXML(data)),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => new Error(err.error));
        })
      );
    
    // return this.http.get<string[]>(`${this.url}${kanjiListType}`).pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     return throwError(() => new Error(err.error));
    //   })
    // );
  }

  private parseXML(data: string) {
    const entries: any[] = [];
    
    const parser = new xml2js.Parser(  
      {  
        trim: true,  
        explicitArray: true,
      }
    );

    data = data.replace(/;/g, '');
  
    parser.parseStringPromise(data)
      .then((result) => {
        console.log(result);
        const obj = result.JMdict;

        for(const k in obj.entry) {
          const item = obj.entry[k];

          entries.push({
            ent_seq: item.ent_seq[0],
            r_ele: item.r_ele.reb[0],
            xref: item.xref[0],
            gloss: item.sense.gloss
          });
        }
      })
      .catch(err => console.error(err));

    return entries;
  }
}
