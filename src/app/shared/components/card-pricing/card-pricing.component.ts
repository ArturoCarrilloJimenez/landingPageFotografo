import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'shared-card-pricing',
  imports: [CommonModule],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPricingComponent {
  isRecommended = input<boolean>(false);
  title = input<string>('Paquete Básico');
  description = input<string>('Ideal para sesiones cortas o eventos pequeños.');
  price = input<string>('100 €');
  features = input<string[]>([
    '1 hora de sesión',
    '10 fotos editadas',
    'Entrega digital',
  ]);

  urlContact = environment.urlContact;
  messageContact = `Hola, estoy interesado en el paquete: ${this.title()}. ¿Podrías darme más información?`;
}
