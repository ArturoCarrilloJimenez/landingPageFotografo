import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardPricingComponent } from '../../../shared/components/';
import { CommonModule } from '@angular/common';

interface PricingCard {
  title: string;
  description: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}

@Component({
  selector: 'landing-page-pricing-section',
  imports: [CardPricingComponent, CommonModule],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent {
  pricingCards: PricingCard[] = [
    {
      title: 'Básico',
      description: 'Sesión corta para sesiones rápidas o retratos.',
      price: '25 €',
      features: [
        '30 minutos de sesión en exterior',
        '30 fotos editadas (básicas)',
        'Entrega digital en 5 días',
      ],
    },
    {
      title: 'Estándar',
      description:
        'Ideal para sesiones en pareja o retratos donde cada detalle cuenta.',
      price: '45 €',
      features: [
        '1 horas de sesión en exterior',
        '50 fotos editadas (estándar)',
        'Entrega digital en 5 días',
        'Posibilidad de ir a otras ubicaciones (esto puede aumentar el precio)',
      ],
      isRecommended: true,
    },
    {
      title: 'Premium',
      description:
        'Para quienes buscan una experiencia completa y fotos de alta calidad.',
      price: '90 €',
      features: [
        '2 horas de sesión en exterior',
        '100 fotos editadas (avanzadas)',
        'Entrega digital en 5 días',
        'Posibilidad de ir a otras ubicaciones (esto puede aumentar el precio)',
        'Se puede personalizar el paquete según tus necesidades',
      ],
    },
  ];
}
