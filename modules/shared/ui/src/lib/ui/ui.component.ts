import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-japanese-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {}
