import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardPricingComponent } from "../../../shared/templates/card-pricing/card-pricing.component";

@Component({
  selector: 'landing-page-pricing-section',
  imports: [CardPricingComponent],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent { }
