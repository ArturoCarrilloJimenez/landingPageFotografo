import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'shared-btn-whatsapp',
  imports: [],
  templateUrl: './btn-whatsapp.html',
  styleUrl: './btn-whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnWhatsappComponent {
  contactUrl = environment.urlContact;
  message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
}
