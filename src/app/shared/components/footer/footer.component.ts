import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

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

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
