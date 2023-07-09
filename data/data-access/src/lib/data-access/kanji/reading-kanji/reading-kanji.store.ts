import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { ReadingKanjiHttpService } from "./reading-kanji.service";
import { ReadingKanjiResponse } from "./reading-kanji-response-interface";

interface ReadingKanjiState {
    readingKanji: ReadingKanjiResponse | null;
  }
  
  @Injectable()
  export class ReadingKanjiStore extends ComponentStore<ReadingKanjiState> {
    readonly readingKanji$: Observable<ReadingKanjiResponse | null> = this.select(
      state => state.readingKanji,
      {
        debounce: true
      }
    );
  
    constructor(private http: ReadingKanjiHttpService) {
      super(initialState);
    }
  
    public loadReadingKanji(reading: string) {
      this.loadReadingKanjiFromQuery(reading);
    }
  
    private loadReadingKanjiFromQuery = this.effect<string>((reading$) => reading$.pipe(
      switchMap((reading: string) => this.http.get(reading).pipe(
        tapResponse(
          (reading: ReadingKanjiResponse) => this.updateKanji(reading),
          () => this.updateKanji(null)
        )
      )))
    );
  
    private updateKanji = this.updater<ReadingKanjiResponse | null>((state, readingKanji) => ({
      ...state,
      readingKanji
    }));
  }
  
  const initialState: ReadingKanjiState = {
    readingKanji: null
  };