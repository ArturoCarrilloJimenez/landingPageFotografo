import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-page-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent { }
