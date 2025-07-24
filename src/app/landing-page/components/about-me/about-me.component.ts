import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'landing-page-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  contactUrl = environment.urlContact;
  message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
}
