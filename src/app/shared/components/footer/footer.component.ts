import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'shared-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  urlContact = environment.urlContact;
  urlLogo = environment.logoUrl;

  message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
}
