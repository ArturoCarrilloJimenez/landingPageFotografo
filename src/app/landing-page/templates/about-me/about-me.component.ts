import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-page-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
