import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'landing-page-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  readonly contactUrl = environment.urlContact;
  readonly message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
}
