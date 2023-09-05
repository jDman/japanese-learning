import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanjiStore } from '@learn-japanese/data/data-access';

@Component({
  selector: 'learn-japanese-lessons',
  standalone: true,
  imports: [CommonModule],
  providers: [KanjiStore],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonsComponent {
  public kanji$ = this.kanjiStore.kanji$;

  constructor(private readonly kanjiStore: KanjiStore) {}

  public loadJouyouKanji(): void {
    this.kanjiStore.loadKanji('jouyou');
  }

  public loadJinmeiyouKanji(): void {
    this.kanjiStore.loadKanji('jinmeiyou');
  }
}
