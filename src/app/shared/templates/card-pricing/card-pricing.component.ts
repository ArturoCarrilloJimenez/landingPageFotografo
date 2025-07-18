import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'shared-card-pricing',
  imports: [CommonModule],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPricingComponent {
  position = input<'left' | 'right' | 'center'>('left');
  title = input<string>('Paquete Básico');
  description = input<string>('Ideal para sesiones cortas o eventos pequeños.');
  price = input<string>('100 €');
  features = input<string[]>([
    '1 hora de sesión',
    '10 fotos editadas',
    'Entrega digital',
  ]);
}
